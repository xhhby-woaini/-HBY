const lessons = [
  {
    id: 'facts', category: '理解自己', title: '把事实和猜测分开',
    subtitle: '一句“他看不起我”，可能只是一个未经核对的解释。',
    lead: '同一件事，可以有好几种解释。先找到能够观察和核对的部分，情绪就有了可以落脚的地方。',
    map: ['发生了什么', '我怎么解释', '还有什么可能', '下一步核对'],
    sections: [
      { heading: '先说可观察的事', text: '“朋友三天没有回消息”是事实；“他故意冷落我”是解释。解释有时是对的，但在证据不足时，把它当作事实，容易让我们过早生气、内耗，或者作出伤人的回应。' },
      { heading: '把想法写成待验证的问题', text: '试着问：我直接看到或听到了什么？我还缺哪一条信息？如果我是局外人，会提出什么别的解释？这不是要你否定自己的感受；难过是真实的，难过的原因仍值得核对。' },
      { heading: '用一个小动作代替猜测', text: '可以直接而平静地问对方是否方便回复，也可以先完成手头的事，等更多信息出现。遇到反复失约、冒犯或伤害，也要认真看行为模式，而不是无限替别人找理由。' }
    ],
    case: { title: '朋友没有回应你的求助', body: '你发去一条重要消息，对方一天没回。你准备怎么理解？', choices: [
      { text: '他一定不在乎我，立刻断绝来往。', feedback: '你的失落可以理解，但一次未回复不足以确定动机。先核对情况；如果长期失约，再依据行为决定关系边界。' },
      { text: '先确认消息是否看到，同时安排其他办法。', feedback: '这把“对方为什么没回”的未知留作未知，也照顾了自己眼前的需要。' },
      { text: '都是我的问题，以后再也不提要求。', feedback: '向朋友求助本身没有错。观察对方的回应和自己的需要，再决定以后怎样求助。' }
    ] }, question: '最近哪件事里，我把自己的解释当成了事实？'
  },
  {
    id: 'evidence', category: '独立判断', title: '听完成功故事，再问一个问题',
    subtitle: '有感染力的经历，仍需要看背景和适用条件。',
    lead: '演讲可以给你勇气。把它变成自己的行动时，还要弄清楚它为什么在那个人身上有效。',
    map: ['观点是什么', '依据在哪里', '条件有哪些', '能否小试'],
    sections: [
      { heading: '故事告诉你“有可能”，不保证“都会”', text: '一个创业者谈坚持，一个考研人谈逆袭，都有真实的启发。但台上发言的人往往已经走到了被看见的位置；与他们做过类似选择、结果不同的人，很少出现在镜头前。单凭一个故事，无法估计某条路有多适合你。' },
      { heading: '把口号翻译成条件', text: '听到“只要努力就能成功”，可以接着问：他从哪里起步？得到过哪些帮助？坚持的具体方法是什么？什么时候调整了方向？哪些因素是他也控制不了的？这些问题能帮助你从情绪鼓舞走向可用经验。' },
      { heading: '在自己的生活里小规模验证', text: '比如借鉴一位老师的复习法，先试一周，记录学习时长、错题变化和身体状态，再决定是否继续。适合别人的方法不一定适合你的基础、时间与目标。' }
    ],
    case: { title: '看完“每天学习十六小时”的视频', body: '你正准备考研，视频让你热血沸腾。明天最合理的一步是什么？', choices: [
      { text: '直接照搬十六小时安排，睡眠以后再说。', feedback: '热情值得珍惜，但照搬强度会挤掉休息和检验效果的时间。先确认自己可持续的节奏。' },
      { text: '提取一个可试的方法，连续七天记录效果。', feedback: '这让你借到方法，也让数据和身体感受帮你决定是否保留。' },
      { text: '所有演讲都没用，以后完全不看。', feedback: '故事可以提供动力和新视角。关键是区分鼓舞、经验与适用于自己的证据。' }
    ] }, question: '我最近被哪句话打动？它成立可能需要哪些条件？'
  },
  {
    id: 'boundaries', category: '人与关系', title: '在乎别人，也尊重边界',
    subtitle: '善意可以很坚定，也可以有分寸。',
    lead: '想托举爱你的人，是很珍贵的心意。照顾他人之前，也可以把自己的能力、对方的意愿和长远影响放进判断。',
    map: ['对方需要', '我能提供', '双方同意', '留出余地'],
    sections: [
      { heading: '先问“需要什么”，别急着代做', text: '有时别人需要的是陪伴和倾听，而不是替他决定。即使出于好心，未经询问地安排别人的生活，也可能让对方失去选择。你可以提出帮助，再听对方怎么想。' },
      { heading: '帮助不等于透支', text: '如果每次帮忙都让你放弃自己的学习、休息或基本需要，关系可能越来越紧绷。明确说出“我今晚能陪你聊二十分钟，明天再一起想办法”，比勉强答应之后埋怨更诚实。' },
      { heading: '判断要看具体处境', text: '紧急危险与日常请求需要不同回应。边界不是固定的冷漠规则；它是让关心能够长久、让每个人都被当作独立的人对待的一种协商。' }
    ],
    case: { title: '家人希望你立刻帮忙', body: '今晚你有重要复习任务，家人想让你处理一件可以等到明天的事。', choices: [
      { text: '说清今晚安排，问是否紧急，约定明天帮忙。', feedback: '你回应了关系，也确认了紧迫性。若确有急事，可以再调整计划。' },
      { text: '不管事情大小都答应，自己的任务全部放弃。', feedback: '有时需要临时让步，但长期如此会消耗你。判断紧迫性和自己的承受范围很重要。' },
      { text: '直接说“你的事与我无关”，不再沟通。', feedback: '你可以拒绝，但说明能力与时间，再听听对方需要，通常更利于相互尊重。' }
    ] }, question: '我能怎样表达关心，同时诚实说出自己的能力范围？'
  },
  {
    id: 'selfworth', category: '考试与成长', title: '一次成绩，不能概括一个人',
    subtitle: '把分数当作反馈，不把它当作身份。',
    lead: '考试结果很重要，值得认真对待；但它只测到了特定时间、特定题目下的一部分表现。',
    map: ['看到结果', '拆开原因', '找可控项', '安排调整'],
    sections: [
      { heading: '把“我不行”改成具体问题', text: '一次模考失利，可能来自知识漏洞、时间分配、审题失误、状态波动或试卷难度。说“我就是没能力”，难以指导下一步；说“英语阅读第三篇连续错了推断题”，才有机会调整。' },
      { heading: '接受不确定，仍然做准备', text: '考研有竞争，没人能承诺结果。可以把“我能控制什么”写下来：做题、复盘、求助、休息和选择报考信息；对竞争者表现等不可控因素，尽量不把所有注意力耗在猜测上。' },
      { heading: '目标和生活都需要空间', text: '你可以认真追求一个更好的未来，同时允许自己在疲惫时休息、在发现方法无效时调整。一次分数是下一步决策的材料，不是人格判决书。' }
    ],
    case: { title: '模拟考试低于预期', body: '你原本很努力，看到分数后觉得自己“彻底失败”。', choices: [
      { text: '马上否定此前所有努力，不再看试卷。', feedback: '情绪需要缓冲，但长期回避会让试卷失去反馈价值。休息之后再拆分原因。' },
      { text: '先缓一缓，再挑两类可改进的错题复盘。', feedback: '既承认失落，也把评价从“我是什么人”拉回“下一步怎么做”。' },
      { text: '假装分数完全不重要，不作调整。', feedback: '分数不能定义你，但作为考试反馈仍有用。看清问题，才能更有效地投入。' }
    ] }, question: '最近一个结果给了我什么具体信息，而不是给我贴了什么标签？'
  },
  {
    id: 'effort', category: '行动方法', title: '坚持，也要允许调整方法',
    subtitle: '不把“吃苦”本身当作进步的证明。',
    lead: '投入是一种能力；定期查看投入有没有带来想要的变化，也是一种能力。',
    map: ['定小目标', '实际行动', '观察反馈', '继续或调整'],
    sections: [
      { heading: '区分忙碌和有效行动', text: '坐在桌前八小时，不一定比四小时有针对性的练习收获多。可以先定一个可观察目标，例如“本周弄懂二十道反复出错的题”，再看是否达成。任务要小到今天能够开始。' },
      { heading: '给方法一个试用期', text: '换方法太频繁，来不及看到效果；明知没有进展却一直重复，也会消耗时间。给一种方法设定期限和指标，按预定时间复盘，减少只凭当天心情判断。' },
      { heading: '暂停不是失败', text: '睡眠、饮食和人际支持会影响你能否长期投入。若一种安排持续让你精疲力竭，调整强度可能比继续硬撑更接近目标。行动后的反馈，比一句“再拼一点”更具体。' }
    ],
    case: { title: '刷题很多，错误却没减少', body: '你连续两周每天做大量题，错题类型几乎不变。', choices: [
      { text: '继续加倍刷同类题，不看错误原因。', feedback: '投入值得肯定，但反馈提示方法需要检查。单纯加量未必能解决重复错误。' },
      { text: '挑出高频错误，减少题量并验证新方法。', feedback: '你没有放弃目标，而是在保留投入的同时根据反馈调整路径。' },
      { text: '一次效果不好就认定自己永远学不会。', feedback: '两周的某种方法无效，并不能证明能力上限。先寻找更具体的知识和策略问题。' }
    ] }, question: '我正在坚持的事，有什么信号能告诉我该继续或调整？'
  },
  {
    id: 'disagree', category: '价值与对话', title: '有分歧时，先弄清对方在担心什么',
    subtitle: '坚持原则，不必把对方简化成坏人。',
    lead: '很多争论里，人们关心的价值可能不同：公平、自由、安全、责任，或对亲近之人的保护。',
    map: ['复述观点', '找共同点', '看实际影响', '说明选择'],
    sections: [
      { heading: '试着完整复述反对意见', text: '讨论一项选择前，先试着说：“我理解你担心的是……”再让对方纠正。能够准确复述，不表示你必须认同；它能帮助你对准真正的分歧，而不是自己想象出的对手。' },
      { heading: '原则往往需要一起权衡', text: '比如朋友的隐私值得尊重，但如果有人正面临明确的危险，仅仅说“保密最重要”就可能遗漏另一项责任。问清事实、影响谁、有哪些更小伤害的选择，通常比背一条口号更可靠。' },
      { heading: '允许修正，不等于没有立场', text: '你可以清楚说出当前判断和理由，也愿意在新证据出现时改变看法。成熟并非永远正确，而是愿意为自己的选择负责，同时承认自己可能遗漏的信息。' }
    ],
    case: { title: '朋友与你争论“该不该告诉家人”', body: '朋友说一件私事，希望你保密；你担心他可能遇到危险，但还没弄清具体情况。', choices: [
      { text: '先问清危险是否迫近，说明自己的担心和可寻求的支持。', feedback: '这既重视隐私，也认真核对安全风险。若出现迫切危险，应及时寻找可信赖的人或当地紧急帮助。' },
      { text: '立刻转告所有认识的人，完全不解释。', feedback: '传播范围过大可能造成额外伤害。先了解风险，选择必要且合适的支持渠道。' },
      { text: '为了守诺，任何情况下都不再过问。', feedback: '尊重隐私重要，但若有迫切危险，也需要考虑安全和必要的求助。' }
    ] }, question: '我不同意一个观点时，能否准确说出它想保护的东西？'
  }
];

const $ = selector => document.querySelector(selector);
const STORAGE = 'haobangyang-learn-v1';
function readState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE) || '{}');
    return raw && typeof raw === 'object' ? raw : {};
  } catch { return {}; }
}
const state = readState();
let active = null;
function persist() { try { localStorage.setItem(STORAGE, JSON.stringify(state)); return true; } catch { return false; } }
function make(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value !== undefined) element.textContent = value;
  return element;
}
function updateProgress() {
  const count = lessons.filter(item => state[item.id]?.read === true).length;
  $('#progress-text').textContent = `${count} / ${lessons.length} 篇已读`;
  $('#progress-fill').style.width = `${count / lessons.length * 100}%`;
  $('#mark-read').textContent = active && state[active.id]?.read ? '已读 ✓' : '标记已读';
}
function renderTopics() {
  const grid = $('#topic-grid');
  grid.replaceChildren();
  lessons.forEach((item, i) => {
    const card = make('button', 'topic-card');
    card.type = 'button';
    card.append(make('span', 'tag', `${String(i + 1).padStart(2, '0')} / ${item.category}`), make('h3', '', item.title), make('p', '', item.subtitle));
    const bottom = make('span', 'bottom');
    bottom.append(make('span', state[item.id]?.read ? 'done' : '', state[item.id]?.read ? '已读 ✓' : '开始阅读'), make('span', '', '→'));
    card.append(bottom);
    card.addEventListener('click', () => { location.hash = `lesson=${item.id}`; });
    grid.append(card);
  });
  updateProgress();
}
function showLesson(id) {
  const item = lessons.find(lesson => lesson.id === id);
  if (!item) { active = null; $('#lesson').hidden = true; $('#topics').hidden = false; return; }
  active = item;
  $('#topics').hidden = true;
  $('#lesson').hidden = false;
  $('#lesson-position').textContent = `${lessons.indexOf(item) + 1} / ${lessons.length}`;
  $('#lesson-kicker').textContent = item.category;
  $('#lesson-title').textContent = item.title;
  $('#lesson-lead').textContent = item.lead;
  $('#idea-map').replaceChildren(...item.map.map(label => make('span', '', label)));
  const article = $('#lesson-article');
  article.replaceChildren();
  item.sections.forEach(section => article.append(make('h3', '', section.heading), make('p', '', section.text)));
  $('#case-title').textContent = item.case.title;
  $('#case-body').textContent = item.case.body;
  const options = $('#options');
  options.replaceChildren();
  const feedback = $('#feedback');
  feedback.hidden = true;
  item.case.choices.forEach((choice, index) => {
    const button = make('button', '', choice.text);
    button.type = 'button';
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      options.querySelectorAll('button').forEach(other => other.setAttribute('aria-pressed', String(other === button)));
      feedback.textContent = choice.feedback;
      feedback.hidden = false;
      state[item.id] = { ...state[item.id], choice: index };
      persist();
    });
    options.append(button);
  });
  const chosen = state[item.id]?.choice;
  if (Number.isInteger(chosen) && chosen >= 0 && chosen < options.children.length) options.children[chosen].click();
  $('#reflection-question').textContent = item.question;
  $('#reflection-input').value = state[item.id]?.reflection || '';
  $('#save-status').textContent = '';
  $('#next-lesson').textContent = lessons.indexOf(item) === lessons.length - 1 ? '返回第一主题 →' : '下一主题 →';
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function route() {
  const match = location.hash.match(/^#lesson=([a-z]+)$/);
  if (match) showLesson(match[1]);
  else { active = null; $('#lesson').hidden = true; $('#topics').hidden = false; renderTopics(); }
}
$('#back').addEventListener('click', () => { location.hash = 'topics'; });
$('#next-lesson').addEventListener('click', () => {
  if (active) location.hash = `lesson=${lessons[(lessons.indexOf(active) + 1) % lessons.length].id}`;
});
$('#mark-read').addEventListener('click', () => {
  if (!active) return;
  state[active.id] = { ...state[active.id], read: true };
  persist(); updateProgress();
});
$('#save-reflection').addEventListener('click', () => {
  if (!active) return;
  state[active.id] = { ...state[active.id], reflection: $('#reflection-input').value.trim() };
  $('#save-status').textContent = persist() ? '已保存在此浏览器' : '浏览器未允许保存，请自行复制备份';
});
window.addEventListener('hashchange', route);
route();
