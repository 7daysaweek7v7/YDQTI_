/* =========================================================
   《玉簟秋》角色人格测试 · 页面渲染与交互
   三段式：开始 → 答题 → 结果。文案全部来自 data/content.js。
   ========================================================= */
(function () {
  "use strict";

  const D = window.YDQ;
  const STORAGE_KEY = "ydq_quiz_v1";
  const LETTERS = ["A", "B", "C", "D"];
  const STAGES = ["start", "quiz", "result", "gallery"];

  /* ------------------------- 小工具 ------------------------- */

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function append(parent, child) {
    if (child) parent.appendChild(child);
    return parent;
  }

  function blockTitle(title, sub) {
    const wrap = el("div", "block-title");
    wrap.appendChild(el("h3", "", title));
    if (sub) wrap.appendChild(el("span", "", sub));
    return wrap;
  }

  function toast(message) {
    const box = document.getElementById("toast");
    if (!box) return;
    box.textContent = message;
    box.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () {
      box.classList.remove("show");
    }, 2200);
  }

  function copyText(text, okMessage) {
    const done = function () {
      toast(okMessage || D.ui.export.copied);
    };
    const fallback = function () {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.top = "-9999px";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, ta.value.length);
      let ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (err) {
        ok = false;
      }
      document.body.removeChild(ta);
      if (ok) done();
      else toast(D.ui.export.fail);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else {
      fallback();
    }
  }

  /* ------------------------- 阶段切换 ------------------------- */

  function showStage(name) {
    STAGES.forEach(function (key) {
      const node = document.getElementById("stage-" + key);
      if (node) node.hidden = key !== name;
    });
    document.body.classList.toggle("on-quiz", name === "quiz");
    window.scrollTo(0, 0);
  }

  /* ------------------------- 封面 ------------------------- */

  function renderHero() {
    const host = document.getElementById("heroContent");

    const kicker = el("p", "hero-kicker", D.meta.kicker);
    const title = el("h1", "hero-title", D.meta.title);
    const sub = el("p", "hero-sub", D.meta.subtitle);
    const rule = el("div", "hero-rule");
    const quote = el("p", "hero-quote", D.meta.quote);
    quote.appendChild(el("em", "", D.meta.quoteFrom));

    const actions = el("div", "hero-actions");
    const start = el("button", "btn btn-primary", D.ui.hero.start);
    start.type = "button";
    start.addEventListener("click", beginQuiz);
    actions.appendChild(start);

    [kicker, title, sub, rule, quote, actions].forEach(function (n) {
      append(host, n);
    });

    const seal = el("div", "hero-seal", D.meta.seal || "玉簟秋");
    seal.setAttribute("aria-hidden", "true");
    document.querySelector(".hero").appendChild(seal);
  }

  /* ------------------------- 答题状态 ------------------------- */

  const state = {
    started: false,
    done: false,
    idx: 0,
    answers: new Array(D.questions.length).fill(null)
  };

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!data || !Array.isArray(data.answers) || data.answers.length !== D.questions.length) return;
      state.answers = data.answers.map(function (v) {
        return Number.isInteger(v) && v >= 0 && v < 4 ? v : null;
      });
      state.started = !!data.started;
      state.done = !!data.done && state.answers.every(function (v) { return v !== null; });
      state.idx = Number.isInteger(data.idx) ? Math.max(0, Math.min(D.questions.length - 1, data.idx)) : 0;
    } catch (err) {
      /* 忽略损坏的本地记录 */
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      /* 存储不可用时静默 */
    }
  }

  function answeredCount() {
    return state.answers.filter(function (v) { return v !== null; }).length;
  }

  /* ------------------------- 计分与匹配 ------------------------- */

  function compute() {
    const totalPerDim = [0, 0, 0, 0];
    const points = [0, 0, 0, 0];

    D.questions.forEach(function (q, i) {
      const weight = q.anchor ? 2 : 1;
      totalPerDim[q.dim] += weight;
      if (state.answers[i] === null) return;
      const chosen = q.options[state.answers[i]];
      if (chosen && chosen.pole === 0) points[q.dim] += weight;
    });

    const vector = points.map(function (p, i) {
      return totalPerDim[i] ? (p / totalPerDim[i]) * 100 : 50;
    });

    const ranked = D.characters.map(function (person, index) {
      let sum = 0;
      for (let i = 0; i < 4; i++) {
        const diff = vector[i] - person.vector[i];
        sum += diff * diff;
      }
      const distance = Math.sqrt(sum);
      return {
        person: person,
        index: index,
        distance: distance,
        similarity: Math.max(0, Math.min(100, Math.round(100 - distance / 2)))
      };
    });

    ranked.sort(function (a, b) {
      if (Math.abs(a.distance - b.distance) < 0.0001) return a.index - b.index;
      return a.distance - b.distance;
    });

    const code = D.dimensions.map(function (dim, i) {
      return vector[i] >= 50 ? dim.codeA : dim.codeB;
    }).join("、");

    return { vector: vector, ranked: ranked, code: code };
  }

  /* ------------------------- 答题流程 ------------------------- */

  function beginQuiz() {
    state.started = true;
    const firstEmpty = state.answers.indexOf(null);
    state.idx = firstEmpty === -1 ? D.questions.length - 1 : firstEmpty;
    saveState();
    showStage("quiz");
    renderQuestion();
  }

  function goNext() {
    if (state.idx < D.questions.length - 1) {
      state.idx += 1;
      saveState();
      renderQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    if (!state.answers.every(function (v) { return v !== null; })) {
      const missing = state.answers.map(function (v, i) { return v === null ? i + 1 : 0; }).filter(Boolean);
      toast(D.ui.quiz.missing.replace("{n}", String(missing.length)).replace("{list}", missing.slice(0, 6).join("、") + (missing.length > 6 ? "…" : "")));
      return;
    }
    state.done = true;
    saveState();
    showStage("result");
    renderResult();
  }

  function resetQuiz() {
    state.started = true;
    state.done = false;
    state.idx = 0;
    state.answers = new Array(D.questions.length).fill(null);
    saveState();
    showStage("quiz");
    renderQuestion();
    toast(D.ui.toast.reset);
  }

  function goHome() {
    state.started = false;
    state.done = false;
    state.idx = 0;
    state.answers = new Array(D.questions.length).fill(null);
    saveState();
    showStage("start");
  }

  function renderQuestion() {
    const host = document.getElementById("quiz");
    if (!host) return;
    host.textContent = "";

    const q = D.questions[state.idx];
    const chosen = state.answers[state.idx];
    const panel = el("div", "quiz-panel");

    const top = el("div", "quiz-top");
    const countEl = el("div", "quiz-count");
    countEl.appendChild(el("b", "", D.ui.quiz.counter.replace("{n}", String(state.idx + 1)).replace("{total}", String(D.questions.length))));
    top.appendChild(countEl);
    top.appendChild(el("span", "quiz-mini", D.ui.quiz.answered.replace("{n}", String(answeredCount()))));
    panel.appendChild(top);

    const barWrap = el("div", "quiz-progress");
    const bar = el("i");
    bar.style.width = (answeredCount() / D.questions.length) * 100 + "%";
    barWrap.appendChild(bar);
    panel.appendChild(barWrap);

    const stemWrap = el("div", "q-stem-wrap");
    stemWrap.appendChild(el("span", "q-index", String(state.idx + 1).padStart(2, "0")));
    stemWrap.appendChild(el("h3", "q-stem", q.stem));
    panel.appendChild(stemWrap);

    const options = el("div", "options");
    options.setAttribute("role", "radiogroup");
    options.setAttribute("aria-label", D.ui.quiz.ariaOptions.replace("{n}", String(state.idx + 1)));

    let autoNextTimer = null;

    q.options.forEach(function (opt, i) {
      const btn = el("button", "opt");
      btn.type = "button";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", chosen === i ? "true" : "false");
      btn.appendChild(el("span", "opt-key", LETTERS[i]));
      btn.appendChild(el("span", "opt-text", opt.text));
      btn.addEventListener("click", function () {
        state.answers[state.idx] = i;
        saveState();
        options.querySelectorAll(".opt").forEach(function (node, idx) {
          node.setAttribute("aria-checked", idx === i ? "true" : "false");
        });
        const mini = panel.querySelector(".quiz-mini");
        if (mini) mini.textContent = D.ui.quiz.answered.replace("{n}", String(answeredCount()));
        const barFill = panel.querySelector(".quiz-progress i");
        if (barFill) barFill.style.width = (answeredCount() / D.questions.length) * 100 + "%";
        clearTimeout(autoNextTimer);
        autoNextTimer = setTimeout(goNext, 200);
      });
      options.appendChild(btn);
    });
    panel.appendChild(options);

    const actions = el("div", "quiz-actions");

    const prev = el("button", "btn btn-line", D.ui.quiz.prev);
    prev.type = "button";
    prev.disabled = state.idx === 0;
    prev.addEventListener("click", function () {
      if (state.idx > 0) {
        state.idx -= 1;
        saveState();
        renderQuestion();
      }
    });
    actions.appendChild(prev);

    actions.appendChild(el("span", "quiz-hint", D.ui.quiz.hint));

    panel.appendChild(actions);
    host.appendChild(panel);
  }

  /* ------------------------- 结果 ------------------------- */

  function renderResult() {
    const host = document.getElementById("result");
    if (!host) return;
    host.textContent = "";

    const result = compute();
    const best = result.ranked[0];
    const second = result.ranked[1];
    const third = result.ranked[2];
    const person = best.person;

    const card = el("article", "result-card");

    const head = el("div", "result-head");
    head.appendChild(el("p", "result-kicker", D.ui.result.kicker));
    const title = el("h3", "result-title");
    title.appendChild(document.createTextNode(D.ui.result.typePrefix));
    const role = el("span", "role", person.name + "--" + person.label + D.ui.result.typeSuffix);
    title.appendChild(role);
    head.appendChild(title);

    const sub = el("div", "result-sub");
    sub.appendChild(el("span", "", D.ui.result.codeTitle + " " + result.code));
    const badge = el("span", "match-badge");
    badge.appendChild(document.createTextNode(D.ui.result.matchWord + " "));
    badge.appendChild(el("b", "", String(best.similarity)));
    badge.appendChild(document.createTextNode("%"));
    sub.appendChild(badge);
    head.appendChild(sub);
    card.appendChild(head);

    const body = el("div", "result-body");

    const dims = el("div", "result-dims");
    dims.appendChild(blockTitle(D.ui.result.dimsTitle, D.ui.result.fourAxes));
    D.dimensions.forEach(function (dim, i) {
      const percent = result.vector[i];
      const row = el("div", "axis-row");

      const top = el("div", "axis-top");
      const left = el("span", "axis-a");
      left.appendChild(document.createTextNode(dim.a + " "));
      const lv = el("b", "", String(Math.round(percent)) + "%");
      left.appendChild(lv);
      top.appendChild(left);

      top.appendChild(el("span", "axis-val", D.ui.result.axisLean.replace("{pole}", percent >= 50 ? dim.a : dim.b)));

      const right = el("span", "axis-b");
      right.appendChild(document.createTextNode(dim.b + " "));
      right.appendChild(el("b", "", String(Math.round(100 - percent)) + "%"));
      top.appendChild(right);
      row.appendChild(top);

      const track = el("div", "axis-track");
      const fill = el("span", "axis-fill");
      fill.style.width = Math.round(percent) + "%";
      track.appendChild(fill);
      row.appendChild(track);

      dims.appendChild(row);
    });
    body.appendChild(dims);

    const blocks = el("div", "result-blocks");
    D.ui.result.blocks.forEach(function (block) {
      const wrap = el("div", "result-block");
      wrap.appendChild(el("h4", "", block.title));
      wrap.appendChild(el("p", "", person.match[block.key]));
      blocks.appendChild(wrap);
    });
    body.appendChild(blocks);

    const others = el("div", "result-others");
    others.appendChild(el("b", "", D.ui.result.othersTitle + "："));
    [second, third].forEach(function (item) {
      others.appendChild(el("span", "", item.person.name + "　" + item.similarity + "%"));
    });
    body.appendChild(others);

    const actions = el("div", "result-actions");

    const copyResult = el("button", "btn btn-line", D.ui.result.copyResult);
    copyResult.type = "button";
    copyResult.addEventListener("click", function () {
      copyText(D.text.result(result), D.ui.result.resultCopied);
    });
    actions.appendChild(copyResult);

    const copyAnswers = el("button", "btn btn-line", D.ui.result.copyAnswers);
    copyAnswers.type = "button";
    copyAnswers.addEventListener("click", function () {
      copyText(D.text.answers(state.answers), D.ui.result.answersCopied.replace("{n}", String(answeredCount())));
    });
    actions.appendChild(copyAnswers);

    const copyPrompt = el("button", "btn btn-ink", D.ui.result.copyPrompt);
    copyPrompt.type = "button";
    copyPrompt.addEventListener("click", function () {
      copyText(D.text.prompt(state.answers), D.ui.toast.promptCopied);
    });
    actions.appendChild(copyPrompt);

    const more = el("button", "btn btn-line", D.ui.result.viewMore);
    more.type = "button";
    more.addEventListener("click", function () {
      showStage("gallery");
      renderGallery();
    });
    actions.appendChild(more);

    const home = el("button", "btn btn-line", D.ui.result.backHome);
    home.type = "button";
    home.addEventListener("click", goHome);
    actions.appendChild(home);

    const again = el("button", "btn btn-line", D.ui.result.again);
    again.type = "button";
    again.addEventListener("click", resetQuiz);
    actions.appendChild(again);

    body.appendChild(actions);
    card.appendChild(body);
    host.appendChild(card);
  }

  /* ------------------------- 人格档案 --------------------------------------------------------- */

  function renderGallery() {
    const host = document.getElementById("gallery");
    if (!host) return;
    host.textContent = "";

    const result = compute();
    const mine = result.ranked[0].person.name;

    const head = el("div", "gallery-head");
    const copy = el("div", "gallery-copy");
    copy.appendChild(el("p", "gallery-kicker", D.ui.gallery.kicker));
    copy.appendChild(el("h2", "gallery-title", D.ui.gallery.title));
    copy.appendChild(el("p", "gallery-sub", D.ui.gallery.sub));
    head.appendChild(copy);

    const back = el("button", "btn btn-line", D.ui.gallery.back);
    back.type = "button";
    back.addEventListener("click", function () {
      showStage("result");
      renderResult();
    });
    head.appendChild(back);
    host.appendChild(head);

    const grid = el("div", "char-grid");
    D.characters.forEach(function (person) {
      const card = el("article", "char-card" + (person.name === mine ? " is-mine" : ""));

      if (person.name === mine) {
        card.appendChild(el("span", "mine-badge", D.ui.gallery.mine));
      }

      const top = el("div", "char-top");
      const nameBox = el("div");
      nameBox.appendChild(el("h4", "char-name", person.name));
      nameBox.appendChild(el("p", "char-role", person.role));
      top.appendChild(nameBox);
      top.appendChild(el("span", "char-code", person.code));
      card.appendChild(top);

      card.appendChild(el("p", "char-label", person.label));

      const fields = el("dl", "char-fields");

      const valueRow = el("div", "char-field");
      valueRow.appendChild(el("dt", "", D.ui.charFields.values));
      valueRow.appendChild(el("dd", "", person.values));
      fields.appendChild(valueRow);

      const strengthRow = el("div", "char-field");
      strengthRow.appendChild(el("dt", "", D.ui.charFields.strengths));
      const tags = el("dd", "char-tags");
      person.strengths.forEach(function (tag) {
        tags.appendChild(el("span", "", tag));
      });
      strengthRow.appendChild(tags);
      fields.appendChild(strengthRow);

      const weakRow = el("div", "char-field");
      weakRow.appendChild(el("dt", "", D.ui.charFields.weakness));
      weakRow.appendChild(el("dd", "", person.weakness));
      fields.appendChild(weakRow);

      const modeRow = el("div", "char-field");
      modeRow.appendChild(el("dt", "", D.ui.charFields.mode));
      modeRow.appendChild(el("dd", "", person.mode));
      fields.appendChild(modeRow);

      card.appendChild(fields);

      grid.appendChild(card);
    });

    host.appendChild(grid);
  }

  /* ------------------------- 键盘支持 ------------------------- */

  function bindKeyboard() {
    document.addEventListener("keydown", function (e) {
      if (!state.started || state.done) return;
      if (document.getElementById("stage-quiz").hidden) return;
      const active = document.activeElement;
      if (active && active !== document.body && active.tagName === "BUTTON") {
        /* 按钮获得焦点时交给浏览器默认行为 */
        if (active.classList.contains("opt")) return;
      }
      if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;

      const key = e.key.toUpperCase();
      const index = LETTERS.indexOf(key);
      if (index > -1) {
        state.answers[state.idx] = index;
        saveState();
        goNext();
        return;
      }
      if (e.key === "Enter") {
        if (state.answers[state.idx] !== null) goNext();
      }
    });
  }

  /* ------------------------- 启动 ------------------------- */

  function init() {
    loadState();
    renderHero();
    bindKeyboard();

    if (state.done) {
      showStage("result");
      renderResult();
    } else if (state.started) {
      showStage("quiz");
      renderQuestion();
    } else {
      showStage("start");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
