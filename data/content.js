/* =========================================================
   《玉簟秋》角色人格测试 、 全部文本内容
   本文件只存放文字与计分数据，不负责任何页面渲染。
   ========================================================= */
window.YDQ = (function () {
  "use strict";

  const meta = {
    title: "玉簟秋",
    subtitle: "角色人格测试",
    kicker: "南怀风云",
    quote: "红藕香残玉簟秋。轻解罗裳，独上兰舟。",
    quoteFrom: "—— 李清照《一剪梅》",
    seal: "玉簟秋",
    metaLine: "四十道选择题，测测你和玉簟秋里哪个人物最相似",
    lead:
      "有人把真心藏在纨绔皮囊之下，有人把倔强写在脸上；有人以忠诚为骨，有人以野心为刃。",
    lead2:
      "凉薄乱世，真情难遇。相逢或别离，执念或妥协，不过各有风霜，各有归途。在“藏与露、情与势、算与真、守与破”之间，找寻自己的抉择。"
  };

  const guide = {
    title: "作答须知",
    items: [
      "凭第一反应作答，选“你真的会做”的，而不是“你觉得应该做”的。",
      "四十道题全部单选，每题只选一个最接近自己的选项。",
      "请记下题号与选项字母（如 1-A、2-C），方便最后交给 AI 解析。",
      "没有好坏、没有标准答案；四组维度两端都是一种活法。"
    ],
    stats: [
      { k: "题量", v: "40题" },
      { k: "题型", v: "单选题" },
      { k: "维度", v: "4组" },
      { k: "匹配", v: "玉簟秋中14位角色" }
    ]
  };

  const dimensions = [
    {
      no: "维度一",
      a: "藏锋",
      b: "扬声",
      codeA: "C",
      codeB: "Y",
      title: "你把真实意图，露几分？",
      descA:
        "不轻易亮底牌。你相信“先让人看不透，才不会被拿捏”，常用沉默、玩笑、退让做掩护，等时机到了再出手。",
      descB:
        "不藏。你宁可先吃亏，也要把态度摆在明处；喜怒形于色，说了就认，不愿把力气花在演。",
      castA: "虞昶轩、顾瑞同、陈晚荞",
      castB: "叶平君 、 宋含之 、 虞仲权",
      shadowA: "容易把真心也一并藏没，让别人只看见你的手段。",
      shadowB: "锋芒太露，容易在没准备好的时候先受了伤。"
    },
    {
      no: "维度二",
      a: "重情",
      b: "重势",
      codeA: "Q",
      codeB: "S",
      title: "你把什么放在天平重的一端？",
      descA:
        "把具体的人放在前面。承诺、亲疏、良心、旧恩，都是你愿意为之让路的东西；你怕的不是输，是辜负。",
      descB:
        "把局放在前面。你相信位置、资源与赢面才是护人的底气；先站稳，再谈情，先成事，再谈委屈。",
      castA: "叶平君  赵宝茹 、 兰卿",
      castB: "江学廷 、 虞仲权 、 牟林森",
      shadowA: "太重情，容易被情分绑住手脚，该断的时候断不了。",
      shadowB: "太看局，容易把人也算成筹码，赢了位置却失了人心。"
    },
    {
      no: "维度三",
      a: "谋定",
      b: "本真",
      codeA: "M",
      codeB: "Z",
      title: "你做决定时，先算还是先信？",
      descA:
        "先算后动。你习惯留后手、做预案、试探人心，讨厌把命运交给运气；每一步都要知道退路在哪里。",
      descB:
        "先动后算。你信直觉与本心，觉得想太多会错过；宁可试错，也不愿把话憋回去、把事拖下去。",
      castA: "虞昶轩、顾瑞同、牟林森",
      castB: "宋含之、匡炳文、陶紫宜",
      shadowA: "算得太尽，容易错过本可以更简单、更真诚的时刻。",
      shadowB: "凭心而动，容易在代价来临时才发现自己没有后手。"
    },
    {
      no: "维度四",
      a: "守火",
      b: "破局",
      codeA: "H",
      codeB: "P",
      title: "面对一个坏掉的局，你留还是掀？",
      descA:
        "护住眼前的人与秩序。你擅长忍、修、等，相信“留下来”本身就是一种力量；灯不能灭，人不能散。",
      descB:
        "掀桌重来。你受不了烂局，宁可代价大，也要换一种活法；与其在旧屋里修补，不如另起一炉火。",
      castA: "顾瑞同、兰卿、君敏如",
      castB: "叶平君、虞昶轩、宋含之",
      shadowA: "守得太久，会把忍耐误当修养，把自己困在原地。",
      shadowB: "破得太急，容易把还能救的东西，一并烧掉。"
    }
  ];

  const characters = [
    {
      name: "虞昶轩",
      role: "虞家五少，陆军部参谋，第九军军团长",
      label: "藏锋执棋人",
      code: "C、Q、M、P",
      vector: [86, 78, 88, 28],
      values: "护住南怀与身边人；家国底线；不肯把命交给别人安排。",
      strengths: ["看局极快", "越乱越稳", "护短且出手狠", "能把纨绔当伪装"],
      weakness: "习惯用控制代替表达，越在乎越不肯好好说；怕被看穿，就先把自己藏起来。",
      mode: "先布子，再落子；明面松弛，暗处收网。必要时宁可自己背骂名。",
      match: {
        core: "把真话藏在玩笑里，把杀招藏在闲棋后。你天生会读局，越乱越冷静，越在乎越不肯好好说。",
        like: "你和虞昶轩一样，表面松弛，心里有数；别人以为你在玩，其实你在看牌。你护人护得不动声色，出手时却极狠。",
        weak: "太习惯用控制代替表达。你怕被看穿，就先把自己藏起来；越重要的人，越容易只收到你的手段，收不到你的真心。",
        tip: "偶尔把棋局放下，说一句没有算计的实话。真正的关系，不需要你先赢一局才敢靠近。"
      }
    },
    {
      name: "叶平君",
      role: "平民女学生，后为战地记录者",
      label: "执笔破局者",
      code: "Y、Q、M、P",
      vector: [28, 84, 72, 22],
      values: "人的尊严；女子为自己执笔；看见弱者就不能转头。",
      strengths: ["清醒", "坚韧", "共情力强", "行动力快"],
      weakness: "太要强，习惯自己扛；不肯低头，也不肯示弱，容易把求助当成失败。",
      mode: "直面、据理力争；先做再说，用行动把局面顶开。",
      match: {
        core: "眼里有光，脚下有路。你相信人可以凭本事与善意站稳，不靠谁的脸色过日子。",
        like: "你和叶平君一样，直面世界，不肯把委屈咽成习惯；看见不平会出手，看见弱小会心软。",
        weak: "太要强，习惯自己扛；不肯低头，也不肯示弱，容易把求助当成失败。",
        tip: "允许别人帮你一次。独立不是一个人扛完所有事，而是知道自己什么时候该借力。"
      }
    },
    {
      name: "顾瑞同",
      role: "虞昶轩侍卫长",
      label: "守夜执刀人",
      code: "C、Q、M、H",
      vector: [90, 82, 86, 76],
      values: "忠义；职责；答应的事一定做到；不越界。",
      strengths: ["可靠", "敏锐", "嘴严", "执行力极强"],
      weakness: "太会把责任往自己身上揽，也太容易沉默；怕给人添麻烦，最后把最难的部分留给自己。",
      mode: "先观察，再执行；护主、补位、收尾，不抢功也不抢话。",
      match: {
        core: "把忠诚当骨头，把分寸当皮肉。你不抢话、不抢功，但所有关键处都有你。",
        like: "你和顾瑞同一样，可靠、稳、嘴严；你习惯先观察再行动，答应的事一定做到。",
        weak: "太会把责任往自己身上揽，也太容易沉默。你怕给人添麻烦，最后往往把最难的部分留给自己。",
        tip: "忠诚不等于无限透支。学会在第一时间说出实情，比事后独自补救更负责。"
      }
    },
    {
      name: "江学廷",
      role: "叶平君青梅竹马，留日归国文人",
      label: "执刃求名者",
      code: "Y、S、M、P",
      vector: [38, 26, 84, 32],
      values: "才华被看见；出人头地；不再被人轻看。",
      strengths: ["文才", "口才", "韧劲", "会借势"],
      weakness: "自尊与野心绑得太紧，受挫时容易把“赢”当成解药；越在意的人，越可能被当成证明自己的战场。",
      mode: "以退为进，借势上位；需要时用舆论与规则做刀。",
      match: {
        core: "才气是刀，自尊是鞘。你要的不只是被爱，更是被看见、被承认。",
        like: "你和江学廷一样，有才华、有韧劲，也有一股不肯服输的劲；越被轻视，越想证明自己。",
        weak: "自尊和野心绑得太紧，受挫时容易把“赢”当成解药；越在意的人，越可能被你当成证明自己的战场。",
        tip: "把自我价值从别人的评价里拿回来。真正的强大，不需要用一场胜利来抵押。"
      }
    },
    {
      name: "陶紫宜",
      role: "陶家千金，虞昶轩未婚妻",
      label: "锦绣较劲人",
      code: "Y、S、Z、H",
      vector: [24, 24, 34, 72],
      values: "体面；婚约；赢，而且要赢得漂亮。",
      strengths: ["社交手腕", "审美", "反应快", "敢争"],
      weakness: "输不起，也放不下；情绪上来时，体面先替她说话，等回过神来，真正想要的东西已经走远。",
      mode: "明面得体，暗地较劲；用场面与关系维持自己的位置。",
      match: {
        core: "体面是盔甲，骄傲是刀锋。你要赢，更要赢得漂亮。",
        like: "你和陶紫宜一样，审美好、反应快、场面上从不失分；你敢争，也不肯让人看轻。",
        weak: "输不起，也放不下。情绪上来时，体面会先替你说话，等回过神来，真正想要的东西已经走远。",
        tip: "承认“我很在意”并不可耻。把较劲的力气，分一点给真实的表达。"
      }
    },
    {
      name: "兰卿",
      role: "玉春戏班头牌，虞明轩旧爱",
      label: "低眉守情人",
      code: "C、Q、Z、H",
      vector: [82, 88, 26, 88],
      values: "情义；戏；守候；不给人添麻烦。",
      strengths: ["温柔", "坚韧", "体恤", "耐得住"],
      weakness: "太容易把等待当成忠贞，把委屈当成修养；她不说，别人就真的以为她不需要。",
      mode: "以柔克刚，沉默守护；在戏台上把苦处唱过去。",
      match: {
        core: "把深情藏在低眉里，把倔强藏在戏腔里。你不争，但你有自己的守。",
        like: "你和兰卿一样，温柔、能忍、重情；你愿意等，也愿意为一个人把苦处咽下去。",
        weak: "太容易把等待当成忠贞，把委屈当成修养；你不说，别人就真的以为你不需要。",
        tip: "你的温柔要留一份给自己。说出来不是索取，是让别人有机会对你公平。"
      }
    },
    {
      name: "匡炳文",
      role: "虞家女婿，第七军旅长",
      label: "藏刀行伍人",
      code: "Y、S、Z、P",
      vector: [34, 18, 30, 20],
      values: "翻身；掌控；不再仰人鼻息。",
      strengths: ["能忍", "能打", "执行力强", "关键时刻敢下手"],
      weakness: "自卑与骄傲缠在一起，容易把“被尊重”误当成“被服从”；情绪一上头，手段会先于分寸。",
      mode: "表面恭顺，暗中结党；忍到极处，一次翻盘。",
      match: {
        core: "沉默是壳，欲望是火。你能忍很久，但一旦动手，就不留退路。",
        like: "你和匡炳文一样，能扛事、能隐忍、执行力强；你不爱解释，习惯用结果说话。",
        weak: "自卑与骄傲缠在一起，容易把“被尊重”误当成“被服从”；情绪一上头，手段会先于分寸。",
        tip: "力量不是让人怕你。真正的掌控，是能按住自己那一刻的火。"
      }
    },
    {
      name: "陈晚荞",
      role: "虞府三姨太",
      label: "帘后执秤人",
      code: "C、S、Z、P",
      vector: [78, 18, 38, 24],
      values: "旧账要清；要上位；要让踩过她的人低头。",
      strengths: ["察言观色", "演技", "耐心", "懂得借刀"],
      weakness: "恨意和比较心会悄悄吞掉判断；她太擅长忍，也太擅长记，最后容易把自己困在旧账里。",
      mode: "枕边风、慢火熬；软话在前，算盘在后。",
      match: {
        core: "笑意是帘，算盘在帘后。你懂得等，也懂得借力。",
        like: "你和陈晚荞一样，眼力好、耐性好、会说话；你知道什么时候该软，什么时候该进。",
        weak: "恨意和比较心会悄悄吞掉判断。你太擅长忍，也太擅长记，最后容易把自己困在旧账里。",
        tip: "别让过去的人决定你未来的样子。放下不是认输，是把力气拿回来。"
      }
    },
    {
      name: "虞仲权",
      role: "南怀陆军总司令",
      label: "落子定盘人",
      code: "Y、S、M、H",
      vector: [44, 14, 90, 74],
      values: "虞家军；家族延续；秩序与地盘。",
      strengths: ["威望", "魄力", "权衡", "关键时刻敢定"],
      weakness: "太容易把所有人当棋子，包括最亲的人；他习惯用安排表达关心，别人收到的却是命令。",
      mode: "以势压人，一锤定音；先算全局，再落一子。",
      match: {
        core: "一辈子在落子，一辈子在守盘。你信秩序，也信手段。",
        like: "你和虞仲权一样，有威望、有魄力、会权衡；关键时刻你能一锤定音。",
        weak: "太容易把所有人当棋子，包括最亲的人；你习惯用安排表达关心，别人收到的却是命令。",
        tip: "有些人不需要被安排，只需要被听见。把“为你好”换成“你怎么想”。"
      }
    },
    {
      name: "赵宝茹",
      role: "虞家主母",
      label: "暖灯护家人",
      code: "Y、Q、Z、H",
      vector: [30, 90, 22, 84],
      values: "儿子；家宅平安；一家人齐齐整整。",
      strengths: ["慈爱", "调度", "圆融", "会暖场"],
      weakness: "护短会遮住判断，心软会拖住决断；越亲近的人，她越看不见他的问题。",
      mode: "以情动人，以家为局；先稳住人心，再处理事情。",
      match: {
        core: "家是道场，情是香火。你护短、心软，也有一套自己的调度。",
        like: "你和赵宝茹一样，重感情、会照顾人、场面上一团和气；你在的地方，家才像家。",
        weak: "护短会遮住判断，心软会拖住决断；越亲近的人，你越看不见他的问题。",
        tip: "爱不是替他挡掉所有风雨。有时让他自己淋一次，才是真的为他好。"
      }
    },
    {
      name: "宋含之",
      role: "叶平君挚友，救国青年",
      label: "热血点灯人",
      code: "Y、Q、Z、P",
      vector: [22, 86, 14, 18],
      values: "朋友；公义；国家病了就得治。",
      strengths: ["热烈", "直率", "勇敢", "说做就做"],
      weakness: "太容易把自己豁出去，也太容易相信“只要真心就够了”；理想一上头，会忽略代价。",
      mode: "先做了再说；认准的事，不绕弯、不回头。",
      match: {
        core: "热血先于算计，真心快于权衡。你信人，也信一件事值得就去做。",
        like: "你和宋含之一样，明亮、直接、肯为朋友出头；你不太会绕弯，也不屑于绕。",
        weak: "太容易把自己豁出去，也太容易相信“只要真心就够了”；理想一上头，会忽略代价。",
        tip: "把勇敢留一点给明天。救人之前，先确认自己还站得住。"
      }
    },
    {
      name: "君敏如",
      role: "虞明轩妻子",
      label: "隔帘观局人",
      code: "C、S、Z、H",
      vector: [76, 38, 30, 88],
      values: "名分；体面；不惊动任何人地活下去。",
      strengths: ["清醒", "分寸感", "耐性", "看得透"],
      weakness: "太会忍，也太会退；体面守住了，却可能把真正想要的生活让出去。",
      mode: "旁观、守礼、静观其变；看破不说破。",
      match: {
        core: "话不多，分寸极准。你看得清，但不轻易下场。",
        like: "你和君敏如一样，清醒、克制、守礼；你知道什么该说，什么该让它过去。",
        weak: "太会忍，也太会退；你把体面守住了，却可能把真正想要的生活让出去了。",
        tip: "旁观也是一种选择，但别让它变成习惯。该争的时候，允许自己开口。"
      }
    },
    {
      name: "虞瑾萱",
      role: "虞家小姐、慈善会干事",
      label: "持家明白人",
      code: "Y、Q、M、H",
      vector: [36, 80, 68, 78],
      values: "家人；尊严；先把眼前的事办明白。",
      strengths: ["条理清楚", "说话直", "肯担事", "务实"],
      weakness: "嘴硬心软，容易替别人扛；怕家里乱，就总想先稳住，久了会把自己排在最后。",
      mode: "先问清状况，再动手；嘴上不饶人，事情办得妥。",
      match: {
        core: "嘴上不饶人，心里有杆秤。你务实、护家，也肯担事。",
        like: "你和虞瑾萱一样，条理清楚、说话直、遇事先问“现在怎么办”；家里人出事，你第一个到场。",
        weak: "嘴硬心软，容易替别人扛；你怕家里乱，就总想先稳住，久了会把自己排在最后。",
        tip: "照顾别人之前，先问问自己累不累。你不是这个家的备用屋顶。"
      }
    },
    {
      name: "牟林森",
      role: "池化陆军总司令",
      label: "冷账操盘人",
      code: "C、S、M、P",
      vector: [88, 10, 94, 26],
      values: "吞下或毁掉；绝对掌控；只信筹码。",
      strengths: ["战略感", "耐心", "谈判", "不动声色"],
      weakness: "不信人，所以只能用利益绑人；算得太尽，反而容易把真正可用的人推远。",
      mode: "借刀、布局、等对手犯错；要么一口吞下，要么亲手毁掉。",
      match: {
        core: "只信筹码，不信人心。你看得远，也下得了狠手。",
        like: "你和牟林森一样，战略感强、耐得住、谈判时不动声色；你要的不是赢一次，是赢到底。",
        weak: "不信人，所以只能用利益绑人；你算得太尽，反而容易把真正可用的人推远。",
        tip: "有些关系不靠筹码维系。留一个不必设防的人，比多赢一局更重要。"
      }
    }
  ];

  const questions = [
    { id: 1, dim: 0, anchor: true, stem: "被人当众误会，你的第一反应是？", options: [
      { text: "先笑着把场面圆过去，回头再处理", pole: 0 },
      { text: "不急着解释，先看是谁在带节奏", pole: 0 },
      { text: "当场把来龙去脉讲清楚", pole: 1 },
      { text: "直接问一句“你凭什么这么说”", pole: 1 }
    ] },
    { id: 2, dim: 0, stem: "进入一个陌生圈子，你通常先做什么？", options: [
      { text: "先摸清人和关系，再决定站哪儿", pole: 0 },
      { text: "多听少说，等别人来问", pole: 0 },
      { text: "主动介绍自己，把态度摆出来", pole: 1 },
      { text: "找最顺眼的人直接搭话", pole: 1 }
    ] },
    { id: 3, dim: 0, stem: "有一个很想要的计划，你会告诉别人吗？", options: [
      { text: "做成之前一个字不说", pole: 0 },
      { text: "只跟最信的一两个人讲", pole: 0 },
      { text: "会跟朋友分享，顺便听听意见", pole: 1 },
      { text: "恨不得让所有人都知道", pole: 1 }
    ] },
    { id: 4, dim: 0, stem: "朋友做了件让你不舒服的事：", options: [
      { text: "表面不提，心里默默减分", pole: 0 },
      { text: "找个合适时机，轻描淡写提一句", pole: 0 },
      { text: "当面说“我有点介意”", pole: 1 },
      { text: "立刻讲清楚，不留隔夜", pole: 1 }
    ] },
    { id: 5, dim: 0, stem: "被人当面夸奖时，你：", options: [
      { text: "笑着收下，不让人看出真实情绪", pole: 0 },
      { text: "客气两句，把话题岔开", pole: 0 },
      { text: "大方道谢，顺便自嘲一句", pole: 1 },
      { text: "开心写在脸上，再回夸对方", pole: 1 }
    ] },
    { id: 6, dim: 0, stem: "你更怕哪一种后果？", options: [
      { text: "底牌被人看穿", pole: 0 },
      { text: "私事被人打听", pole: 0 },
      { text: "被人觉得好欺负", pole: 1 },
      { text: "想说的话没说出来", pole: 1 }
    ] },
    { id: 7, dim: 0, stem: "遇到一个很强势的人，你会：", options: [
      { text: "先顺着他，找他的破绽", pole: 0 },
      { text: "不正面冲突，绕开走", pole: 0 },
      { text: "把界限说清楚，能谈就谈", pole: 1 },
      { text: "当场顶回去，气势不能输", pole: 1 }
    ] },
    { id: 8, dim: 0, stem: "群里讨论一件你有不同意见的事：", options: [
      { text: "先看风向，必要时私聊关键的人", pole: 0 },
      { text: "不发言，等结果出来再说", pole: 0 },
      { text: "直接把自己的看法发出来", pole: 1 },
      { text: "当场反驳，哪怕得罪人", pole: 1 }
    ] },
    { id: 9, dim: 0, stem: "你更愿意别人怎么评价你？", options: [
      { text: "“看不透，但不好惹”", pole: 0 },
      { text: "“稳，嘴严”", pole: 0 },
      { text: "“直，好相处”", pole: 1 },
      { text: "“有什么说什么”", pole: 1 }
    ] },
    { id: 10, dim: 0, stem: "第一次见重要的人（家长或客户），你会：", options: [
      { text: "提前打听对方喜好，备好话题", pole: 0 },
      { text: "少说多听，礼貌应对", pole: 0 },
      { text: "做自己，坦率地聊", pole: 1 },
      { text: "主动热场，把气氛带起来", pole: 1 }
    ] },

    { id: 11, dim: 1, anchor: true, stem: "一个能改变前途的机会，需要你放弃和家人的约定：", options: [
      { text: "推掉机会，家人优先", pole: 0 },
      { text: "先跟家人商量，尽量两全", pole: 0 },
      { text: "去争取机会，回头补偿家人", pole: 1 },
      { text: "机会难得，先拿下再说", pole: 1 }
    ] },
    { id: 12, dim: 1, stem: "选朋友或伴侣，你最看重：", options: [
      { text: "对我真心，肯为我扛事", pole: 0 },
      { text: "相处舒服，三观相合", pole: 0 },
      { text: "能不能一起往上走", pole: 1 },
      { text: "条件、圈层、资源是否匹配", pole: 1 }
    ] },
    { id: 13, dim: 1, stem: "团队里有人拖后腿，但人很好：", options: [
      { text: "帮他补上，不让他难堪", pole: 0 },
      { text: "私下提醒，再给他机会", pole: 0 },
      { text: "按规则处理，该换就换", pole: 1 },
      { text: "直接请走，结果最重要", pole: 1 }
    ] },
    { id: 14, dim: 1, stem: "你更在意哪一种“输”？", options: [
      { text: "辜负了信任我的人", pole: 0 },
      { text: "错过了值得的人", pole: 0 },
      { text: "输给不如我的人", pole: 1 },
      { text: "丢了本该属于我的位置", pole: 1 }
    ] },
    { id: 15, dim: 1, stem: "长辈让你选一份稳定但你不喜欢的工作：", options: [
      { text: "先顾家，稳定要紧", pole: 0 },
      { text: "折中，先做着再找机会", pole: 0 },
      { text: "争取自己的方向，跟家里谈条件", pole: 1 },
      { text: "直接拒绝，人生自己负责", pole: 1 }
    ] },
    { id: 16, dim: 1, stem: "朋友向你借钱，你自己也不宽裕：", options: [
      { text: "有多少先借多少", pole: 0 },
      { text: "少借一点，说明难处", pole: 0 },
      { text: "不借，但帮他找别的办法", pole: 1 },
      { text: "拒绝，钱和感情分开", pole: 1 }
    ] },
    { id: 17, dim: 1, stem: "你更愿意跟哪种人共事？", options: [
      { text: "重承诺、讲义气的人", pole: 0 },
      { text: "温和、好沟通的人", pole: 0 },
      { text: "能力强、能带团队赢的人", pole: 1 },
      { text: "有资源、能给我铺路的人", pole: 1 }
    ] },
    { id: 18, dim: 1, stem: "你被放到一个“背锅”的位置：", options: [
      { text: "为了大局先扛下来", pole: 0 },
      { text: "帮团队缓一缓，再找机会说清", pole: 0 },
      { text: "先把责任边界划清", pole: 1 },
      { text: "当场指出该谁负责", pole: 1 }
    ] },
    { id: 19, dim: 1, stem: "多年后的同学聚会，你最想证明：", options: [
      { text: "我过得踏实，身边人都好", pole: 0 },
      { text: "我没辜负当年对我好的人", pole: 0 },
      { text: "我比从前更拿得出手", pole: 1 },
      { text: "我站到了当年看不起我的人上面", pole: 1 }
    ] },
    { id: 20, dim: 1, stem: "你更认同哪句话？", options: [
      { text: "人这一辈子，不能负人", pole: 0 },
      { text: "有情有义，路才走得长", pole: 0 },
      { text: "先站稳，才谈得上照顾别人", pole: 1 },
      { text: "位置越高，能护的人越多", pole: 1 }
    ] },

    { id: 21, dim: 2, anchor: true, stem: "要做一件没把握的事，你会：", options: [
      { text: "先做完整方案，推演所有可能", pole: 0 },
      { text: "列个大概，边走边调", pole: 0 },
      { text: "先试一下，凭感觉调整", pole: 1 },
      { text: "想做就做，不想那么多", pole: 1 }
    ] },
    { id: 22, dim: 2, stem: "第一次跟人合作，你会：", options: [
      { text: "先把规则、分工、利益讲明白", pole: 0 },
      { text: "先用小事试探对方", pole: 0 },
      { text: "边做边看，合得来就继续", pole: 1 },
      { text: "先交个朋友，其他再说", pole: 1 }
    ] },
    { id: 23, dim: 2, stem: "面对一个你不喜欢但很有用的人：", options: [
      { text: "保持礼貌距离，按需往来", pole: 0 },
      { text: "表面客气，心里有数", pole: 0 },
      { text: "尽量少来往，不勉强自己", pole: 1 },
      { text: "喜不喜欢都写在脸上", pole: 1 }
    ] },
    { id: 24, dim: 2, stem: "出门旅行，你是哪种人？", options: [
      { text: "攻略、路线、预算全做好", pole: 0 },
      { text: "定好住处和大致方向", pole: 0 },
      { text: "只订车票，到了再说", pole: 1 },
      { text: "说走就走，走到哪算哪", pole: 1 }
    ] },
    { id: 25, dim: 2, stem: "吵架之后，你通常：", options: [
      { text: "先冷静，想清楚怎么谈", pole: 0 },
      { text: "等气消了，再找机会沟通", pole: 0 },
      { text: "憋不住，先把心里话说了", pole: 1 },
      { text: "当场把情绪全倒出来", pole: 1 }
    ] },
    { id: 26, dim: 2, stem: "有人打听一件你不便说的事：", options: [
      { text: "笑着绕开，反手把话题引走", pole: 0 },
      { text: "说一半，留一半", pole: 0 },
      { text: "直接说“这个不方便讲”", pole: 1 },
      { text: "不会绕，表情已经出卖你", pole: 1 }
    ] },
    { id: 27, dim: 2, stem: "买一件很贵的东西，你会：", options: [
      { text: "比价、查口碑、等合适时机", pole: 0 },
      { text: "先加购物车，观察几天", pole: 0 },
      { text: "看着喜欢就买", pole: 1 },
      { text: "当场刷卡，快乐最重要", pole: 1 }
    ] },
    { id: 28, dim: 2, stem: "你对“计划”的感觉是：", options: [
      { text: "有计划才安心", pole: 0 },
      { text: "大方向要有，细节可调", pole: 0 },
      { text: "计划赶不上变化，别太死", pole: 1 },
      { text: "计划会毁掉惊喜", pole: 1 }
    ] },
    { id: 29, dim: 2, stem: "被人算计了一次，你会：", options: [
      { text: "记下这笔账，找机会还回去", pole: 0 },
      { text: "提高警惕，不再给第二次机会", pole: 0 },
      { text: "当面问清楚，能翻篇就翻篇", pole: 1 },
      { text: "当场翻脸，绝不憋着", pole: 1 }
    ] },
    { id: 30, dim: 2, stem: "你更相信：", options: [
      { text: "提前布局的人赢", pole: 0 },
      { text: "准备充分，运气才会来", pole: 0 },
      { text: "直觉往往比分析准", pole: 1 },
      { text: "心之所向，就是答案", pole: 1 }
    ] },

    { id: 31, dim: 3, anchor: true, stem: "一份稳定但让你窒息的生活，你会：", options: [
      { text: "先忍着，把手头的事做好", pole: 0 },
      { text: "一边维持，一边悄悄找出口", pole: 0 },
      { text: "找机会跳出去，哪怕从头来", pole: 1 },
      { text: "直接推翻，宁可一无所有", pole: 1 }
    ] },
    { id: 32, dim: 3, stem: "家里或团队有长期解决不了的矛盾：", options: [
      { text: "维持表面和平，别闹大", pole: 0 },
      { text: "一点点修补，能好一点是一点", pole: 0 },
      { text: "把问题摊开，逼大家面对", pole: 1 },
      { text: "干脆分开，各自清净", pole: 1 }
    ] },
    { id: 33, dim: 3, stem: "面对一条不合理的规则：", options: [
      { text: "先遵守，在规则里找空间", pole: 0 },
      { text: "私下反映，等上面改", pole: 0 },
      { text: "公开提出来，争取改", pole: 1 },
      { text: "直接不遵守，谁爱守谁守", pole: 1 }
    ] },
    { id: 34, dim: 3, stem: "一段已经消耗你的关系：", options: [
      { text: "再撑撑，也许会好", pole: 0 },
      { text: "试着沟通，做最后一次努力", pole: 0 },
      { text: "认真告别，重新开始", pole: 1 },
      { text: "立刻切断，不留余地", pole: 1 }
    ] },
    { id: 35, dim: 3, stem: "你更像哪种人？", options: [
      { text: "守夜的人，灯不能灭", pole: 0 },
      { text: "修补的人，哪坏补哪", pole: 0 },
      { text: "拆墙的人，先破再立", pole: 1 },
      { text: "纵火的人，烧完再种", pole: 1 }
    ] },
    { id: 36, dim: 3, stem: "生活突然失控，你第一反应：", options: [
      { text: "先稳住最基本的秩序", pole: 0 },
      { text: "把能抓住的抓住，慢慢来", pole: 0 },
      { text: "顺势换个活法", pole: 1 },
      { text: "索性全部推倒重来", pole: 1 }
    ] },
    { id: 37, dim: 3, stem: "你更愿意成为：", options: [
      { text: "让人安心的那个人", pole: 0 },
      { text: "能把烂摊子收拾好的人", pole: 0 },
      { text: "敢第一个吃螃蟹的人", pole: 1 },
      { text: "能把旧世界掀翻的人", pole: 1 }
    ] },
    { id: 38, dim: 3, stem: "面对长辈坚持的旧观念：", options: [
      { text: "不争，照做，少生事", pole: 0 },
      { text: "表面顺着，实际按自己的来", pole: 0 },
      { text: "认真讲道理，希望他们理解", pole: 1 },
      { text: "直接对着干，我的人生我做主", pole: 1 }
    ] },
    { id: 39, dim: 3, stem: "关于钱，你更接近：", options: [
      { text: "存着，手里有底才安心", pole: 0 },
      { text: "留足安全垫，其余再花", pole: 0 },
      { text: "把钱投出去，换一个更大的可能", pole: 1 },
      { text: "不留后手，押上全部去搏一次", pole: 1 }
    ] },
    { id: 40, dim: 3, stem: "如果人生只能选一种姿态：", options: [
      { text: "守住", pole: 0 },
      { text: "修好", pole: 0 },
      { text: "闯出去", pole: 1 },
      { text: "推倒重来", pole: 1 }
    ] }
  ];

  const rules = {
    intro: "这套题不靠“多数票”决定人格，而靠四组维度各自的天平。每题只在一组维度上计分，四组独立累计，最后得到一个四字代号，再与角色档案比对。四个选项分属两端，两端背后各站着一类剧中人；题目与选项卡都不直接标注角色，以免你先入为主。",
    steps: [
      {
        t: "分段计分",
        d: "第 1–10 题计“藏锋 / 扬声”；第 11–20 题计“重情 / 重势”；第 21–30 题计“谋定 / 本真”；第 31–40 题计“守火 / 破局”。"
      },
      {
        t: "选项归属",
        d: "每题中，A、B 选项计左侧维度，C、D 选项计右侧维度。四个选项在同侧内部不分高下，各计 1 分。"
      },
      {
        t: "锚题加权",
        d: "每组维度的第一题（第 1、11、21、31 题）为锚题，计 2 分；其余各计 1 分。因此每组维度总分为 11 分，天然不会出现 5.5 : 5.5 的平局。"
      },
      {
        t: "维度判定",
        d: "某侧得分率 = 该侧得分 ÷ 11 × 100%。≥ 50% 取左侧，< 50% 取右侧，得到四字代号（如 C、Q、M、P）。"
      },
      {
        t: "角色匹配",
        d: "把四组得分率组成你的向量，与 14 位角色的档案向量逐一计算欧氏距离；距离最小者，就是“最贴合角色”。契合度 = 100 − 距离 ÷ 2。"
      },
      {
        t: "并列处理",
        d: "若两位角色距离相同，取档案顺序靠前者。同时给出第二、第三接近的角色，供你对照。"
      }
    ],
    table: {
      head: ["题号", "维度", "A / B 计分", "C / D 计分", "锚题"],
      rows: [
        ["1–10", "藏锋 / 扬声", "藏锋 +1", "扬声 +1", "第 1 题 ×2"],
        ["11–20", "重情 / 重势", "重情 +1", "重势 +1", "第 11 题 ×2"],
        ["21–30", "谋定 / 本真", "谋定 +1", "本真 +1", "第 21 题 ×2"],
        ["31–40", "守火 / 破局", "守火 +1", "破局 +1", "第 31 题 ×2"]
      ]
    },
    formula: "契合度 = 100 − √[(藏差)² + (情差)² + (谋差)² + (守差)²] ÷ 2",
    note: "角色向量按“藏锋、重情、谋定、守火”四项记录；右侧维度为其补数（如虞昶轩守火 28，即破局 72）。"
  };

  const ui = {
    nav: [
      { href: "#setup", text: "基础设定" },
      { href: "#rules", text: "计分规则" },
      { href: "#test", text: "开始作答" },
      { href: "#prompt", text: "解析 Prompt" }
    ],
    sections: {
      setup: { no: "①", title: "测试基础设定", sub: "THE SETTING", note: "四组维度，十四位剧中人。" },
      rules: { no: "②", title: "计分与匹配规则", sub: "THE RULES", note: "四组独立计分，再以距离取最近的角色。" },
      test: { no: "③", title: "四十道选择题", sub: "THE QUESTIONS", note: "凭第一反应作答，每题只选一个。" },
      prompt: { no: "④", title: "作答后 AI 解析 Prompt", sub: "THE PROMPT", note: "复制给任意 AI，让它替你算出结果。" }
    },
    charHead: { title: "角色维度档案", sub: "十四种活法", tip: "档案依剧本人物的行为逻辑整理。" },
    hero: { start: "开始测试", look: "先看设定" },
    charFields: { values: "价值观", strengths: "优点", weakness: "软肋", mode: "处事" },
    intro: {
      statsTitle: "一卷速览",
      axesTitle: "四组维度释义",
      axesSub: "FOUR AXES"
    },
    quiz: {
      mark: "卷",
      counter: "第 {n} / {total} 题",
      startTitle: "准备好了吗？",
      startText: "四十道题，约十分钟。没有“应该选”的答案，只有你真正会做出的那一个。",
      startBtn: "落笔作答",
      progress: "第 {n} / 40 题",
      prev: "上一题",
      next: "下一题",
      finish: "查看结果",
      restart: "重新作答",
      selectHint: "请选择一个选项",
      hint: "点击选项即自动进入下一题，可点「上一题」返回修改",
      missing: "还有 {n} 题未作答：{list}",
      ariaOptions: "第 {n} 题选项",
      answered: "已答 {n} / 40",
      resume: "继续上次作答"
    },
    result: {
      kicker: "你的测试结果",
      typePrefix: "你的人格：",
      typeSuffix: "",
      matchWord: "契合度",
      dimsTitle: "四维得分",
      fourAxes: "FOUR AXES",
      codeTitle: "组合代号",
      axisLean: "偏 {pole}",
      blocks: [
        { key: "core", title: "你的核心特质" },
        { key: "like", title: "和该角色的相似之处" },
        { key: "weak", title: "你的潜在软肋" },
        { key: "tip", title: "相处 & 自我发展小提示" }
      ],
      othersTitle: "另外接近你的剧中人",
      copyResult: "复制测试结果",
      resultCopied: "测试结果已复制",
      copyAnswers: "复制我的作答",
      answersCopied: "作答已复制：{n} 题",
      copyPrompt: "复制含答案的解析 Prompt",
      viewMore: "查看更多人格",
      backHome: "返回封面",
      again: "重新测一次"
    },
    gallery: {
      kicker: "十四种活法",
      title: "剧中人的人格档案",
      sub: "你像其中一个，也可以看懂另外十三个。",
      back: "返回结果",
      mine: "最像你"
    },
    prompt: {
      title: "把答案交给 AI",
      text: "下面是一段完整的解析 Prompt。你可以直接复制，粘贴给任意 AI，再附上你的四十道题作答（如 1-A、2-C……）。",
      copy: "复制 Prompt 模板",
      copyFilled: "复制含本次答案的Prompt",
      hint: "若 AI 只拿到部分题号，Prompt 中已要求它先指出缺失题号，再按已答题目归一计算。"
    },
    export: {
      label: "完整问卷",
      copyAll: "复制完整问卷",
      download: "下载问卷 TXT",
      filename: "玉簟秋_角色人格测试_问卷全文.txt",
      copied: "已复制到剪贴板",
      copiedQuestionnaire: "完整问卷已复制",
      downloaded: "问卷 TXT 已开始下载",
      fail: "复制失败，请手动选择文本"
    },
    toast: {
      reset: "已清空作答记录",
      promptCopied: "含答案的解析 Prompt 已复制",
      promptTemplateCopied: "解析 Prompt 已复制"
    },
    copy: {
      typeLine: "【你的人格：\n{name}--{label}】",
      blockLine: "▸{title}：{text}",
      sectionLine: "【{title}】",
      dimLine: "、 {a} {pa}% ／ {b} {pb}%　→ {pole}",
      codeLine: "【{codeTitle}】{code}　｜　{matchWord} {sim}%",
      othersLine: "【{othersTitle}】{first} {firstSim}%　、　{second} {secondSim}%",
      answersPrefix: "我的作答：\n",
      emptyAnswers: "（尚未作答）",
      promptPlaceholder: "（在此粘贴你的作答：1-A 2-B 3-C ……）"
    },
    exportText: {
      title: "《玉簟秋》角色人格测试",
      subtitle: "（四十道单选，适合直接复制给被测者作答）",
      introHead: "【测试简介】",
      guideHead: "【作答须知】",
      dimsHead: "【四组维度释义】",
      dimHeader: "{no}　{a}（{ca}） ↔ {b}（{cb}）",
      dimSide: "　{a}：{desc}",
      dimCast: "　剧中人｜{a}：{castA}；{b}：{castB}",
      charsHead: "【全部角色维度档案】",
      charTitle: "{name}｜{role}｜{code}｜{label}",
      charVector: "　维度偏向：{vec}",
      charValues: "　核心价值观：{values}",
      charStrengths: "　优点：{strengths}",
      charWeak: "　软肋：{weak}",
      charMode: "　处事模式：{mode}",
      rulesHead: "【计分与匹配规则】",
      ruleStep: "{n}. {t}：{d}",
      quizHead: "【四十道测试题】",
      quizNote: "说明：每题只选一个选项，记下题号与字母（如 1-A）。",
      option: "　{letter}. {text}",
      howHead: "【如何得到结果】",
      howText: "把“题号-字母”的作答（如 1-A 2-C 3-D……）连同第④节《解析 Prompt》一起发给任意 AI，即可得到维度得分、最贴合角色与完整解析。",
      sep: " 、 "
    },
    footer: "本测试为《玉簟秋》同人向人格问卷，角色档案基于剧本人物的行为逻辑整理；结果仅供自我观察与娱乐，不构成心理学诊断。"
  };

  const promptTemplate = `你是一名熟悉电视剧《玉簟秋》的人物分析与人格测评师。下面是一份“《玉簟秋》角色人格测试”的作答记录。请你严格按以下规则计分、匹配角色，并输出解析。

【一、四组维度】
1. 藏锋（C）↔ 扬声（Y）：真实意图露几分。藏锋=不轻易亮底牌，用沉默、玩笑、退让做掩护；扬声=态度摆在明处，喜怒形于色，说了就认。
2. 重情（Q）↔ 重势（S）：把什么放在天平重的一端。重情=具体的人、承诺、旧恩优先；重势=位置、资源、赢面优先，先站稳再谈情。
3. 谋定（M）↔ 本真（Z）：做决定先算还是先信。谋定=先算后动，留后手、做预案、试探人心；本真=凭直觉与本心，先动后算，宁可试错。
4. 守火（H）↔ 破局（P）：面对坏局留还是掀。守火=护住眼前人与秩序，忍、修、等；破局=掀桌重来，宁可代价大也要换活法。

【二、计分规则】
- 共 40 题，全部单选。
- 第 1–10 题：选 A 或 B 计“藏锋”，选 C 或 D 计“扬声”。
- 第 11–20 题：选 A 或 B 计“重情”，选 C 或 D 计“重势”。
- 第 21–30 题：选 A 或 B 计“谋定”，选 C 或 D 计“本真”。
- 第 31–40 题：选 A 或 B 计“守火”，选 C 或 D 计“破局”。
- 第 1、11、21、31 题为锚题，计 2 分；其余每题计 1 分。因此每组维度总分为 11 分。
- 某侧得分率 = 该侧得分 ÷ 11 × 100%。≥50% 取左侧（C/Q/M/H），<50% 取右侧（Y/S/Z/P），得到四字组合代号。
- 若用户答案不足 40 题：先列出缺失题号；再按已作答题目按比例归一（例如某维度只答了 9 分权重，则该侧得分 ÷ 实际作答权重 × 100%），继续匹配。
- 若用户给出的是选项文字而非字母，请先根据题目内容判断其属于 A/B 侧还是 C/D 侧。

【三、角色档案向量】
每行格式：角色 | 代号 | 向量（依次为 藏锋%、重情%、谋定%、守火%）
虞昶轩 | C、Q、M、P | 86,78,88,28
叶平君 | Y、Q、M、P | 28,84,72,22
顾瑞同 | C、Q、M、H | 90,82,86,76
江学廷 | Y、S、M、P | 38,26,84,32
陶紫宜 | Y、S、Z、H | 24,24,34,72
兰卿 | C、Q、Z、H | 82,88,26,88
匡炳文 | Y、S、Z、P | 34,18,30,20
陈晚荞 | C、S、Z、P | 78,18,38,24
虞仲权 | Y、S、M、H | 44,14,90,74
赵宝茹 | Y、Q、Z、H | 30,90,22,84
宋含之 | Y、Q、Z、P | 22,86,14,18
君敏如 | C、S、Z、H | 76,38,30,88
虞瑾萱 | Y、Q、M、H | 36,80,68,78
牟林森 | C、S、M、P | 88,10,94,26

【四、匹配算法】
1. 用户向量 u =（藏锋得分率，重情得分率，谋定得分率，守火得分率）。
2. 对每位角色 c，计算距离 d = √[(u1−c1)² + (u2−c2)² + (u3−c3)² + (u4−c4)²]。
3. 取 d 最小者为“最贴合角色”；契合度 = 100 − d ÷ 2，四舍五入到整数。
4. 若 d 并列，按上表顺序取靠前者。
5. 同时列出距离第二、第三近的角色及契合度。
6. 若用户的四字代号正好是某角色代号，仍需按向量距离复核，不要直接跳过计算。

【五、输出格式】必须严格按以下结构输出：

【你的人格：XXX、XXX】
▸你的核心特质：
▸和该角色的相似之处：
▸你的潜在软肋：
▸相处 & 自我发展小提示：

【四维得分】
| 维度 | 左侧得分率 | 右侧得分率 | 判定 |
（四行：藏锋/扬声、重情/重势、谋定/本真、守火/破局）

【组合代号】C、Q、M、P（按用户实际结果替换）

【另外接近你的剧中人】
1. 角色名 、 契合度 %
2. 角色名 、 契合度 %

【一句总评】
（20 字以内，克制、有余味，不要喊口号）

写作要求：
- 全部用中文；不要复述题目；不要罗列剧情百科。
- 解析要扣住用户的具体选择倾向，而不是泛泛而谈。
- 每条 60–120 字，语气克制、有洞察，不灌鸡汤，不贴心理疾病标签。
- “相似之处”要结合剧中人物的命运与选择；“潜在软肋”要指出这种性格在现实关系中的代价；“小提示”要具体、可执行。
- 不要泄露“标准答案”或暗示某种人格更高级。

【六、用户作答】
{{ANSWERS}}`;

  /* ---------- 文本组装（与页面渲染无关，可独立复制/下载） ---------- */

  const LETTERS = ["A", "B", "C", "D"];

  function fill(tpl, map) {
    return Object.keys(map).reduce(function (text, key) {
      return text.split("{" + key + "}").join(map[key]);
    }, tpl);
  }

  function vectorText(person) {
    return dimensions.map(function (dim, i) {
      const a = person.vector[i];
      const b = 100 - a;
      return a >= 50 ? dim.a + " " + a : dim.b + " " + b;
    });
  }

  function answersText(answers) {
    const lines = [];
    let chunk = [];
    answers.forEach(function (choice, i) {
      if (choice === null || choice === undefined) return;
      chunk.push(String(i + 1) + "-" + LETTERS[choice]);
      if (chunk.length === 5) {
        lines.push(chunk.join("　"));
        chunk = [];
      }
    });
    if (chunk.length) lines.push(chunk.join("　"));
    return lines.join("\n");
  }

  function resultText(result) {
    const best = result.ranked[0];
    const copy = ui.copy;
    const lines = [];

    lines.push(fill(copy.typeLine, { name: best.person.name, label: best.person.label }));
    ui.result.blocks.forEach(function (block) {
      lines.push(fill(copy.blockLine, { title: block.title, text: best.person.match[block.key] }));
    });

    lines.push("");
    lines.push(fill(copy.sectionLine, { title: ui.result.dimsTitle }));
    dimensions.forEach(function (dim, i) {
      const percent = Math.round(result.vector[i]);
      lines.push(fill(copy.dimLine, {
        a: dim.a,
        pa: String(percent),
        b: dim.b,
        pb: String(100 - percent),
        pole: percent >= 50 ? dim.a : dim.b
      }));
    });

    const second = result.ranked[1];
    const third = result.ranked[2];
    lines.push(fill(copy.codeLine, {
      codeTitle: ui.result.codeTitle,
      code: result.code,
      matchWord: ui.result.matchWord,
      sim: String(best.similarity)
    }));
    lines.push(fill(copy.othersLine, {
      othersTitle: ui.result.othersTitle,
      first: second.person.name,
      firstSim: String(second.similarity),
      second: third.person.name,
      secondSim: String(third.similarity)
    }));

    return lines.join("\n");
  }

  function questionnaireText() {
    const e = ui.exportText;
    const lines = [];

    lines.push(e.title);
    lines.push(e.subtitle);
    lines.push("");
    lines.push(e.introHead);
    lines.push(meta.lead);
    lines.push(meta.lead2);
    lines.push("");
    lines.push(e.guideHead);
    guide.items.forEach(function (item, i) {
      lines.push(String(i + 1) + ". " + item);
    });

    lines.push("");
    lines.push(e.dimsHead);
    dimensions.forEach(function (dim) {
      lines.push("");
      lines.push(fill(e.dimHeader, { no: dim.no, a: dim.a, ca: dim.codeA, b: dim.b, cb: dim.codeB }));
      lines.push(fill(e.dimSide, { a: dim.a, desc: dim.descA }));
      lines.push(fill(e.dimSide, { a: dim.b, desc: dim.descB }));
      lines.push(fill(e.dimCast, { a: dim.a, castA: dim.castA, b: dim.b, castB: dim.castB }));
    });

    lines.push("");
    lines.push(e.charsHead);
    characters.forEach(function (person) {
      lines.push("");
      lines.push(fill(e.charTitle, { name: person.name, role: person.role, code: person.code, label: person.label }));
      lines.push(fill(e.charVector, { vec: vectorText(person).join(ui.exportText.sep) }));
      lines.push(fill(e.charValues, { values: person.values }));
      lines.push(fill(e.charStrengths, { strengths: person.strengths.join("、") }));
      lines.push(fill(e.charWeak, { weak: person.weakness }));
      lines.push(fill(e.charMode, { mode: person.mode }));
    });

    lines.push("");
    lines.push(e.rulesHead);
    lines.push(rules.intro);
    rules.steps.forEach(function (step, i) {
      lines.push(fill(e.ruleStep, { n: String(i + 1), t: step.t, d: step.d }));
    });
    lines.push("　" + rules.formula);

    lines.push("");
    lines.push(e.quizHead);
    lines.push(e.quizNote);
    questions.forEach(function (q) {
      lines.push("");
      lines.push(q.id + ". " + q.stem);
      q.options.forEach(function (opt, i) {
        lines.push(fill(e.option, { letter: LETTERS[i], text: opt.text }));
      });
    });

    lines.push("");
    lines.push(e.howHead);
    lines.push(e.howText);

    return lines.join("\n");
  }

  function promptText(answers) {
    const body = answers ? answersText(answers) : "";
    const block = answers
      ? ui.copy.answersPrefix + (body || ui.copy.emptyAnswers)
      : ui.copy.promptPlaceholder;
    return promptTemplate.split("{{ANSWERS}}").join(block);
  }

  return {
    meta, guide, dimensions, characters, questions, rules, ui, promptTemplate,
    text: {
      answers: answersText,
      result: resultText,
      questionnaire: questionnaireText,
      prompt: promptText,
      vector: vectorText
    }
  };
})();
