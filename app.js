/* 除法的認識：分物與除式 — classroom game (static, GitHub Pages ready)
   這是獨立遊戲，請不要發布到 wkyee-class/p2-multiply-divide。 */
const QUESTIONS = [
  {
    total: 6, cols: 3, rows: 2, kind: "candy", kindName: "糖果", unit: "粒",
    groupWord: "碟", shareType: "equal", divisor: 2, quotient: 3, remainder: 0, twoDigit: false,
    shortTitle: "平均分成 2 碟",
    hint: "6 粒糖果，平均分成 2 碟。請用環線圈出每一碟，再寫橫式和直式。剛好分盡。",
    sentence: {
      parts: [{ text: "每碟有" }, { blank: "a" }, { text: "粒。" }],
      answers: { a: 3 }
    }
  },
  {
    total: 7, cols: 3, rows: 3, kind: "candy", kindName: "糖果", unit: "粒",
    groupWord: "碟", shareType: "equal", divisor: 2, quotient: 3, remainder: 1, twoDigit: false,
    shortTitle: "平均分成 2 碟",
    hint: "7 粒糖果，平均分成 2 碟。請圈出每一碟；分唔盡嘅不用圈。然後寫橫式和直式（要寫餘數）。",
    sentence: {
      parts: [{ text: "每碟有" }, { blank: "a" }, { text: "粒，餘下" }, { blank: "b" }, { text: "粒。" }],
      answers: { a: 3, b: 1 }
    }
  },
  {
    total: 15, cols: 3, rows: 5, kind: "egg", kindName: "蛋", unit: "隻",
    groupWord: "份", shareType: "equal", divisor: 5, quotient: 3, remainder: 0, twoDigit: true,
    shortTitle: "平均分成 5 份",
    hint: "15 隻蛋，平均分成 5 份。請圈出每一份，再寫橫式和直式。直式要把商對齊個位。",
    sentence: {
      parts: [{ text: "每份有" }, { blank: "a" }, { text: "隻。" }],
      answers: { a: 3 }
    }
  },
  {
    total: 13, cols: 3, rows: 5, kind: "battery", kindName: "電池", unit: "枚",
    groupWord: "份", shareType: "measured", divisor: 3, quotient: 4, remainder: 1, twoDigit: true,
    shortTitle: "每 3 枚一份",
    hint: "13 枚電池，每 3 枚一份。請每 3 枚圈成一份；餘下的不用圈。再寫橫式和直式（要寫餘數，商要對齊個位）。",
    sentence: {
      parts: [{ text: "共可分成" }, { blank: "a" }, { text: "份，餘下" }, { blank: "b" }, { text: "枚。" }],
      answers: { a: 4, b: 1 }
    }
  },
  {
    total: 12, cols: 4, rows: 3, kind: "flower", kindName: "小花", unit: "朵",
    groupWord: "瓶", shareType: "equal", divisor: 3, quotient: 4, remainder: 0, twoDigit: true,
    shortTitle: "平均分成 3 瓶",
    hint: "12 朵小花，平均分成 3 瓶。請圈出每一瓶，再寫橫式和直式。直式要把商對齊個位。",
    sentence: {
      parts: [{ text: "每瓶有" }, { blank: "a" }, { text: "朵。" }],
      answers: { a: 4 }
    }
  },
  {
    total: 17, cols: 3, rows: 6, kind: "berry", kindName: "草莓", unit: "顆",
    groupWord: "碟", shareType: "equal", divisor: 5, quotient: 3, remainder: 2, twoDigit: true,
    shortTitle: "平均分成 5 碟",
    hint: "17 顆草莓，平均分成 5 碟。請圈出每一碟；餘下的不用圈。再寫橫式和直式（要寫餘數，商要對齊個位）。",
    sentence: {
      parts: [{ text: "每碟有" }, { blank: "a" }, { text: "顆，餘下" }, { blank: "b" }, { text: "顆。" }],
      answers: { a: 3, b: 2 }
    }
  },
  {
    total: 16, cols: 4, rows: 4, kind: "car", kindName: "玩具車", unit: "架",
    groupWord: "盒", shareType: "measured", divisor: 4, quotient: 4, remainder: 0, twoDigit: true,
    shortTitle: "每 4 架一盒",
    hint: "16 架玩具車，每 4 架一盒。請每 4 架圈成一盒，再寫橫式和直式。直式要把商對齊個位。",
    sentence: {
      parts: [{ text: "共可分成" }, { blank: "a" }, { text: "盒。" }],
      answers: { a: 4 }
    }
  },
  {
    total: 23, cols: 5, rows: 5, kind: "pen", kindName: "顏色筆", unit: "枝",
    groupWord: "份", shareType: "measured", divisor: 5, quotient: 4, remainder: 3, twoDigit: true,
    shortTitle: "每 5 枝一份",
    hint: "23 枝顏色筆，每 5 枝一份。請每 5 枝圈成一份；餘下的不用圈。再寫橫式和直式（要寫餘數，商要對齊個位）。",
    sentence: {
      parts: [{ text: "共可分成" }, { blank: "a" }, { text: "份，餘下" }, { blank: "b" }, { text: "枝。" }],
      answers: { a: 4, b: 3 }
    }
  }
];

const LAST_Q = QUESTIONS.length - 1;
const LOOP_COLORS = ["#e11d48", "#2563eb", "#059669", "#a855f7", "#d97706", "#0f766e"];
const CLASS_SIZE = 40;
const TEACHER_PIN = "2468";
const CHANNEL_PREFIX = "kayee-p2div-v1-";
const PUB_KEY = "demo";
const SUB_KEY = "demo";
const STORE_KEY = "p2-division-sharing-v1";
const ONLINE_STALE_MS = 90000;
const PUBLIC_SITE_URL = "https://wkyee-class.github.io/p2-division-recognition/";
const CLASS_CODE_PARAM = "c";

const SVGS = {
  candy: `<svg viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="118" rx="28" ry="6" fill="rgba(58,36,21,0.16)"/>
    <path d="M18 52 L40 64 L40 88 L18 100 L10 76 Z" fill="#7c3aed"/>
    <path d="M102 52 L80 64 L80 88 L102 100 L110 76 Z" fill="#7c3aed"/>
    <ellipse cx="60" cy="76" rx="28" ry="24" fill="#fb7185"/>
    <ellipse cx="60" cy="76" rx="16" ry="14" fill="#fda4af"/>
    <path d="M48 68c8 5 16 5 24 0" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>
  </svg>`,
  egg: `<svg viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="118" rx="26" ry="6" fill="rgba(58,36,21,0.16)"/>
    <ellipse cx="60" cy="70" rx="28" ry="38" fill="#fff6e0" stroke="#e8d3b8" stroke-width="3"/>
    <ellipse cx="50" cy="58" rx="8" ry="12" fill="#fff" opacity=".75"/>
  </svg>`,
  battery: `<svg viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="118" rx="22" ry="6" fill="rgba(58,36,21,0.16)"/>
    <rect x="48" y="16" width="24" height="12" rx="4" fill="#c4a574"/>
    <rect x="36" y="26" width="48" height="84" rx="10" fill="#f5c518"/>
    <rect x="36" y="26" width="48" height="26" rx="10" fill="#4b5563"/>
    <rect x="36" y="44" width="48" height="8" fill="#4b5563"/>
    <path d="M54 34h12M60 28v12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>
    <rect x="48" y="66" width="24" height="8" rx="2" fill="rgba(58,36,21,.22)"/>
  </svg>`,
  flower: `<svg viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="118" rx="22" ry="6" fill="rgba(58,36,21,0.16)"/>
    <path d="M60 70 L60 116" stroke="#2f9e44" stroke-width="5" stroke-linecap="round"/>
    <circle cx="42" cy="56" r="16" fill="#fb7185"/>
    <circle cx="78" cy="56" r="16" fill="#fb7185"/>
    <circle cx="46" cy="34" r="16" fill="#f9a8d4"/>
    <circle cx="74" cy="34" r="16" fill="#f9a8d4"/>
    <circle cx="60" cy="26" r="16" fill="#f472b6"/>
    <circle cx="60" cy="48" r="12" fill="#facc15"/>
  </svg>`,
  berry: `<svg viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="118" rx="24" ry="6" fill="rgba(58,36,21,0.16)"/>
    <path d="M60 30C90 36 102 62 60 112C18 62 30 36 60 30Z" fill="#e11d48"/>
    <path d="M40 34C50 18 70 18 80 34C70 40 50 40 40 34Z" fill="#16a34a"/>
    <ellipse cx="48" cy="58" rx="3" ry="4" fill="#facc15" transform="rotate(-20 48 58)"/>
    <ellipse cx="70" cy="54" rx="3" ry="4" fill="#facc15" transform="rotate(18 70 54)"/>
    <ellipse cx="58" cy="74" rx="3" ry="4" fill="#facc15"/>
    <ellipse cx="46" cy="84" rx="3" ry="4" fill="#facc15" transform="rotate(-10 46 84)"/>
    <ellipse cx="72" cy="82" rx="3" ry="4" fill="#facc15" transform="rotate(12 72 82)"/>
  </svg>`,
  car: `<svg viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="118" rx="32" ry="6" fill="rgba(58,36,21,0.16)"/>
    <path d="M26 78 L36 54 Q40 44 52 44 H76 Q90 44 94 56 L104 78 Z" fill="#2563eb"/>
    <path d="M42 56 H52 L56 46 H72 L80 56 Z" fill="#bfdbfe"/>
    <rect x="20" y="76" width="82" height="18" rx="6" fill="#1d4ed8"/>
    <circle cx="40" cy="96" r="10" fill="#1f2937"/>
    <circle cx="40" cy="96" r="4" fill="#d1d5db"/>
    <circle cx="86" cy="96" r="10" fill="#1f2937"/>
    <circle cx="86" cy="96" r="4" fill="#d1d5db"/>
  </svg>`,
  pen: `<svg viewBox="0 0 120 130" aria-hidden="true">
    <ellipse cx="60" cy="118" rx="16" ry="6" fill="rgba(58,36,21,0.16)"/>
    <path d="M48 16h24l6 80H42z" fill="#8b5cf6"/>
    <path d="M48 16h24l-2 14H50z" fill="#5b21b6"/>
    <path d="M42 96h36L60 116z" fill="#e7c39a"/>
    <path d="M54 108h12L60 116z" fill="#333"/>
    <rect x="50" y="40" width="20" height="8" rx="2" fill="#c4b5fd"/>
  </svg>`
};

const $ = (id) => document.getElementById(id);

function emptyAnswers() {
  return {
    horizontal: { dividend: "", divisor: "", quotient: "", remainder: "" },
    longdiv: { divisor: "", qT: "", qU: "", dT: "", dU: "", pT: "", pU: "", rT: "", rU: "" },
    sentence: { a: "", b: "" }
  };
}
function cloneAnswers(src) {
  const e = emptyAnswers();
  if (!src) return e;
  e.horizontal = Object.assign({}, e.horizontal, src.horizontal || {});
  e.longdiv = Object.assign({}, e.longdiv, src.longdiv || {});
  e.sentence = Object.assign({}, e.sentence, src.sentence || {});
  return e;
}

const app = {
  role: null,
  mode: "home",
  studentNo: null,
  pin: "",
  joinCode: "",
  roomCode: "",
  cloud: null,
  lastMsgAt: 0,
  qIndex: 0,
  loops: [],
  drawing: null,
  drag: null,
  answers: emptyAnswers(),
  active: { area: "sentence", key: "a" },
  checkResult: null,
  checkParts: null,
  submitted: false,
  inspectNo: null,
  inspectQ: 0,
  onlineNamesOpen: false,
  syncLabel: "尚未同步",
  pollTimer: null,
  presenceTimer: null,
  channel: null,
  syncFailCount: 0,
  demoMode: false,
  demoProject: false,
  pendingClassCode: "",
  entryJoinUrl: ""
};

const SYNC_POLL_MS = 2500;
const SYNC_BACKOFF_MAX_MS = 20000;
const HISTORY_COUNT = 100;
const HISTORY_TIMEOUT_MS = 5000;

function emptyCloud(code) {
  return {
    code,
    unlockedQuestion: 0,
    reveal: false,
    broadcast: null,
    studentWork: {},
    online: {},
    updatedAt: Date.now(),
    roundId: "r" + Date.now()
  };
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((el) => el.classList.toggle("active", el.id === id));
  document.body.classList.remove("mode-play", "mode-broadcast", "mode-inspect", "mode-demo", "drawing-lock");
  document.documentElement.classList.remove("drawing-lock");
  if (id !== "screen-demo") {
    app.demoMode = false;
    app.demoProject = false;
    document.body.classList.remove("demo-project");
  }
  if (id === "screen-play") document.body.classList.add("mode-play");
  if (id === "screen-broadcast") document.body.classList.add("mode-broadcast");
  if (id === "screen-inspect") document.body.classList.add("mode-inspect");
  if (id === "screen-demo") {
    app.demoMode = true;
    document.body.classList.add("mode-demo");
    document.body.classList.toggle("demo-project", !!app.demoProject);
  }
}

function currentQ() { return QUESTIONS[app.qIndex]; }
function svgFor(kind) { return (SVGS[kind] || SVGS.candy) + `<div class="halo"></div>`; }
function genRoomCode() { return String(Math.floor(1000 + Math.random() * 9000)); }
function channelName(code) { return CHANNEL_PREFIX + String(code); }
function typeLabel(q) { return q.shareType === "equal" ? "平均分" : "每份數量已知"; }

/* ---------- checking ---------- */
function numOrNull(s) {
  const t = String(s == null ? "" : s).trim();
  if (t === "") return null;
  if (!/^\d+$/.test(t)) return null;
  return Number(t);
}
function isFilledNum(s) { return numOrNull(s) != null; }

function placeNumber(tens, ones, twoDigit) {
  if (!twoDigit) {
    const u = numOrNull(ones);
    return { filled: u != null, value: u, onesFilled: String(ones || "").trim() !== "", tensNonzero: false };
  }
  const t = String(tens || "").trim();
  const u = String(ones || "").trim();
  const tEmpty = t === "";
  const uEmpty = u === "";
  if (tEmpty && uEmpty) return { filled: false, value: null, onesFilled: false, tensNonzero: false };
  if ((t && !/^\d+$/.test(t)) || (u && !/^\d+$/.test(u))) {
    return { filled: true, value: NaN, onesFilled: !uEmpty, tensNonzero: !tEmpty && Number(t) !== 0 };
  }
  const tn = tEmpty ? 0 : Number(t);
  const un = uEmpty ? 0 : Number(u);
  return { filled: true, value: tn * 10 + un, onesFilled: !uEmpty, tensNonzero: !tEmpty && tn !== 0 };
}

function expectedGrouping(q) {
  if (q.shareType === "equal") {
    return { expectedLoops: q.divisor, itemsPerLoop: q.quotient, remainder: q.remainder };
  }
  return { expectedLoops: q.quotient, itemsPerLoop: q.divisor, remainder: q.remainder };
}

function isGroupingCorrect(g, q) {
  if (!g) return false;
  const exp = expectedGrouping(q);
  return !!g.even && g.groups === exp.expectedLoops && g.perGroup === exp.itemsPerLoop && g.ungrouped === exp.remainder;
}

function checkHorizontal(h, q) {
  h = h || {};
  const a = numOrNull(h.dividend);
  const b = numOrNull(h.divisor);
  const c = numOrNull(h.quotient);
  const rRaw = String(h.remainder || "").trim();
  const rEmpty = rRaw === "";
  const r = rEmpty ? 0 : numOrNull(rRaw);
  const remOkToLeave = q.remainder === 0;
  const remFilledOk = remOkToLeave ? (rEmpty || r != null) : (!rEmpty && r != null);
  const filled = a != null && b != null && c != null && remFilledOk && (rEmpty || r != null);
  const ok = filled && a === q.total && b === q.divisor && c === q.quotient && r === q.remainder;
  return { filled, ok };
}

function checkLongdiv(ld, q) {
  ld = ld || {};
  const two = !!q.twoDigit;
  const productVal = q.divisor * q.quotient;
  const div = numOrNull(ld.divisor);
  const dividend = placeNumber(two ? ld.dT : "", ld.dU, two);
  const quot = placeNumber(two ? ld.qT : "", ld.qU, two);
  const prod = placeNumber(two ? ld.pT : "", ld.pU, two);
  const rem = placeNumber(two ? ld.rT : "", ld.rU, two);
  const divFilled = div != null;
  const dividendFilled = two ? (isFilledNum(ld.dT) && isFilledNum(ld.dU)) : (numOrNull(ld.dU) != null);
  const quotFilled = two ? (quot.onesFilled || quot.tensNonzero) : (numOrNull(ld.qU) != null);
  const prodFilled = two ? (isFilledNum(ld.pT) && isFilledNum(ld.pU)) : (numOrNull(ld.pU) != null);
  const remFilled = two ? (rem.onesFilled || rem.tensNonzero) : (numOrNull(ld.rU) != null);
  const filled = divFilled && dividendFilled && quotFilled && prodFilled && remFilled;
  const quotOk = two
    ? (numOrNull(ld.qU) === q.quotient && (String(ld.qT || "").trim() === "" || numOrNull(ld.qT) === 0))
    : (numOrNull(ld.qU) === q.quotient);
  const ok = filled &&
    div === q.divisor &&
    dividend.value === q.total &&
    quotOk &&
    prod.value === productVal &&
    rem.value === q.remainder;
  return { filled, ok };
}

function checkSentence(s, q) {
  s = s || {};
  const ans = (q.sentence && q.sentence.answers) || {};
  const keys = Object.keys(ans);
  let filled = true, ok = true;
  keys.forEach((k) => {
    const v = numOrNull(s[k]);
    if (v == null) { filled = false; ok = false; }
    else if (v !== ans[k]) ok = false;
  });
  return { filled, ok };
}

function evaluateWork(answers, g, q) {
  const groupingOk = isGroupingCorrect(g, q);
  const groupingFilled = !!(g && g.groups > 0);
  const h = checkHorizontal(answers && answers.horizontal, q);
  const l = checkLongdiv(answers && answers.longdiv, q);
  const s = checkSentence(answers && answers.sentence, q);
  const parts = { grouping: groupingOk, horizontal: h.ok, longdiv: l.ok, sentence: s.ok };
  const allFilled = groupingFilled && h.filled && l.filled && s.filled;
  let overall;
  if (!allFilled) overall = "incomplete";
  else if (groupingOk && h.ok && l.ok && s.ok) overall = "correct";
  else overall = "incorrect";
  return { overall, parts };
}

function formatHorizontalAnswer(q) {
  return q.remainder ? `${q.total}÷${q.divisor}=${q.quotient}…${q.remainder}` : `${q.total}÷${q.divisor}=${q.quotient}`;
}
function formatSentenceAnswer(q) {
  return (q.sentence.parts || []).map((p) => p.blank ? String(q.sentence.answers[p.blank]) : p.text).join("");
}
function formatLongdivAnswer(q) {
  const prod = q.divisor * q.quotient;
  if (q.twoDigit) return `商 ${q.quotient}（對齊個位），${q.divisor}）${q.total}，${prod}，餘 ${q.remainder}`;
  return `商 ${q.quotient}，${q.divisor}）${q.total}，${prod}，餘 ${q.remainder}`;
}
function formatExpectedGrouping(q) {
  const exp = expectedGrouping(q);
  if (exp.remainder) return `應圈 ${exp.expectedLoops} 組，每組 ${exp.itemsPerLoop} 個，餘下 ${exp.remainder} 個不圈`;
  return `應圈 ${exp.expectedLoops} 組，每組 ${exp.itemsPerLoop} 個，剛好分盡`;
}
function formatHorizontalWritten(h) {
  if (!h) return "";
  const a = h.dividend || "", b = h.divisor || "", c = h.quotient || "", r = h.remainder || "";
  if (!a && !b && !c && !r) return "";
  let s = `${a}÷${b}=${c}`;
  if (r) s += "…" + r;
  return s;
}
function formatLongdivWritten(ld, q) {
  if (!ld) return "";
  const quot = q.twoDigit ? `${ld.qT || ""}${ld.qU || ""}` : (ld.qU || "");
  const dividend = q.twoDigit ? `${ld.dT || ""}${ld.dU || ""}` : (ld.dU || "");
  const prod = q.twoDigit ? `${ld.pT || ""}${ld.pU || ""}` : (ld.pU || "");
  const rem = q.twoDigit ? `${ld.rT || ""}${ld.rU || ""}` : (ld.rU || "");
  if (!ld.divisor && !dividend && !quot && !prod && !rem) return "";
  return `${ld.divisor || ""}）${dividend}　商${quot}　${prod}　餘${rem}`;
}
function formatSentenceWritten(s, q) {
  if (!s) return "";
  const keys = Object.keys((q.sentence && q.sentence.answers) || {});
  if (keys.every((k) => !s[k])) return "";
  return (q.sentence.parts || []).map((p) => p.blank ? (s[p.blank] || "□") : p.text).join("");
}

/* ---------- local + cloud sync ---------- */
let bc = null;
try { bc = new BroadcastChannel(STORE_KEY); } catch (e) { bc = null; }

function loadStore() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); } catch (e) { return {}; }
}
function saveStore(map) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(map)); } catch (e) {}
}
function saveRoomLocal(state) {
  const map = loadStore();
  map[state.code] = state;
  saveStore(map);
}
function publishLocal(msg) {
  if (bc) { try { bc.postMessage(msg); } catch (e) {} }
}

async function publishCloud(msg) {
  publishLocal(msg);
  const code = (msg.state && msg.state.code) || app.roomCode;
  if (!code) return;
  const ch = encodeURIComponent(channelName(code));
  try {
    await fetch(`https://ps.pndsn.com/publish/${PUB_KEY}/${SUB_KEY}/0/${ch}/0?store=1`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg)
    });
    app.syncLabel = "雲端已同步";
  } catch (e) {
    app.syncLabel = "本機同步（雲端暫時未能連接）";
  }
}

async function fetchHistory(code) {
  const ch = encodeURIComponent(channelName(code));
  const url = `https://ps.pndsn.com/v2/history/sub-key/${SUB_KEY}/channel/${ch}?count=${HISTORY_COUNT}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), HISTORY_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) throw new Error("history");
    const data = await res.json();
    return (data && data[0]) || [];
  } finally {
    clearTimeout(timer);
  }
}

function applyMessage(msg, opts) {
  if (!msg || typeof msg !== "object") return;
  const at = Number(msg.at) || 0;
  if (at && at < app.lastMsgAt - 50) return;
  if (at) app.lastMsgAt = Math.max(app.lastMsgAt, at);
  if (msg.type === "state" && msg.state) {
    const incoming = msg.state;
    if (!app.cloud || incoming.updatedAt >= (app.cloud.updatedAt || 0) || incoming.roundId !== app.cloud.roundId) {
      mergeCloud(incoming);
    }
  } else if (msg.type === "work" && msg.work) {
    if (!app.cloud) return;
    const no = String(msg.work.studentNo);
    const prev = app.cloud.studentWork[no];
    if (!prev || (msg.work.updatedAt || 0) >= (prev.updatedAt || 0)) {
      app.cloud.studentWork[no] = msg.work;
    }
  } else if (msg.type === "presence") {
    if (!app.cloud) return;
    const key = msg.role === "teacher" ? "teacher" : "s:" + msg.no;
    app.cloud.online[key] = { no: msg.no, role: msg.role, at: msg.at || Date.now() };
  }
  if (!opts || !opts.silent) afterCloudChange();
}

function pickNewerWorks(a, b) {
  const out = Object.assign({}, a || {});
  Object.keys(b || {}).forEach((k) => {
    if (!out[k] || ((b[k].updatedAt || 0) >= (out[k].updatedAt || 0))) out[k] = b[k];
  });
  return out;
}
function pickNewerOnline(a, b) {
  const out = Object.assign({}, a || {});
  Object.keys(b || {}).forEach((k) => {
    if (!out[k] || ((b[k].at || 0) >= (out[k].at || 0))) out[k] = b[k];
  });
  return out;
}
function mergeCloud(incoming) {
  if (!incoming) return;
  const prev = app.cloud;
  const prevRound = prev && prev.roundId;
  const wasProvisional = !!(prev && prev.provisional);
  if (incoming.provisional && prev && !prev.provisional) return;
  if (prev && (incoming.roundId === prev.roundId || wasProvisional)) {
    incoming.studentWork = pickNewerWorks(prev.studentWork, incoming.studentWork);
    incoming.online = pickNewerOnline(prev.online, incoming.online);
  }
  app.cloud = incoming;
  if (!incoming.provisional) delete app.cloud.provisional;
  if (prevRound && incoming.roundId !== prevRound && !wasProvisional && app.mode === "class" && app.role === "student") {
    startQuestion(incoming.unlockedQuestion || 0);
  }
}

function afterCloudChange() {
  if (app.role === "teacher") {
    if ($("screen-console").classList.contains("active")) renderConsole();
    if ($("screen-inspect").classList.contains("active")) renderInspect();
    if ($("screen-room").classList.contains("active")) updateRoomStatus();
    updateTeacherSync();
  }
  if (app.role === "student" && app.mode === "class") applyTeacherDirectives();
}

function applyTeacherDirectives() {
  if (!app.cloud) return;
  const bcst = app.cloud.broadcast;
  if (bcst) {
    if (!$("screen-broadcast").classList.contains("active")) showScreen("screen-broadcast");
    renderBroadcast();
    return;
  }
  if ($("screen-broadcast").classList.contains("active")) {
    showScreen("screen-play");
    startQuestion(app.qIndex, true);
  }
  const unlocked = app.cloud.unlockedQuestion || 0;
  if (app.qIndex !== unlocked && $("screen-play").classList.contains("active")) {
    saveCurrentWork();
    startQuestion(unlocked, true);
  }
  updateNextButton();
  updateStudentSyncBar();
}

function pruneOnline(state) {
  const now = Date.now();
  const online = {};
  Object.keys(state.online || {}).forEach((k) => {
    const info = state.online[k];
    if (info && now - (info.at || 0) < ONLINE_STALE_MS) online[k] = info;
  });
  state.online = online;
}

function teacherPublishState() {
  if (!app.cloud) return;
  app.cloud.updatedAt = Date.now();
  pruneOnline(app.cloud);
  saveRoomLocal(app.cloud);
  publishCloud({ type: "state", at: app.cloud.updatedAt, state: app.cloud });
  updateTeacherSync();
}

function studentPublishWork(lastEvent) {
  if (app.demoMode) return;
  if (app.mode !== "class" || !app.studentNo || !app.cloud) return;
  const work = buildStudentWork(lastEvent);
  app.cloud.studentWork[String(app.studentNo)] = work;
  saveRoomLocal(app.cloud);
  publishCloud({ type: "work", at: work.updatedAt, work });
}

function sendPresence() {
  if (!app.roomCode) return;
  const msg = {
    type: "presence",
    at: Date.now(),
    role: app.role,
    no: app.role === "student" ? app.studentNo : "teacher"
  };
  if (app.cloud) {
    const key = app.role === "teacher" ? "teacher" : "s:" + app.studentNo;
    app.cloud.online[key] = { no: msg.no, role: app.role, at: msg.at };
    saveRoomLocal(app.cloud);
  }
  // Teacher re-publishes the full classroom state every presence tick
  // so the official state is not evicted from PubNub demo history.
  if (app.role === "teacher" && app.cloud && !app.cloud.provisional) {
    teacherPublishState();
    return;
  }
  publishCloud(msg);
}

function startSync() {
  stopSync();
  if (bc) {
    bc.onmessage = (ev) => applyMessage(ev.data);
  }
  window.addEventListener("storage", onStorage);
  window.addEventListener("online", onNetworkOnline);
  app.syncFailCount = 0;
  app.presenceTimer = setInterval(sendPresence, 15000);
  sendPresence();
  pollHistory();
  schedulePoll();
}

function schedulePoll() {
  if (app.pollTimer) clearTimeout(app.pollTimer);
  const fails = app.syncFailCount || 0;
  const delay = !fails ? SYNC_POLL_MS : Math.min(SYNC_BACKOFF_MAX_MS, SYNC_POLL_MS * Math.pow(2, fails));
  app.pollTimer = setTimeout(async () => {
    await pollHistory();
    if (app.roomCode) schedulePoll();
  }, delay);
}

function stopSync() {
  if (app.pollTimer) clearTimeout(app.pollTimer);
  if (app.presenceTimer) clearInterval(app.presenceTimer);
  app.pollTimer = app.presenceTimer = null;
  window.removeEventListener("storage", onStorage);
  window.removeEventListener("online", onNetworkOnline);
}

function onNetworkOnline() {
  if (!app.roomCode) return;
  app.syncFailCount = 0;
  if (app.syncLabel !== "雲端已同步") app.syncLabel = "正在連接課堂…";
  pollHistory();
  schedulePoll();
  if (app.role === "student" && app.mode === "class") updateStudentSyncBar();
  if (app.role === "teacher") updateTeacherSync();
}

function onStorage(ev) {
  if (ev.key !== STORE_KEY || !app.roomCode) return;
  const map = loadStore();
  if (map[app.roomCode]) {
    mergeCloud(map[app.roomCode]);
    afterCloudChange();
  }
}

async function pollHistory() {
  if (!app.roomCode) return;
  try {
    const list = await fetchHistory(app.roomCode);
    list.forEach((msg) => applyMessage(msg, { silent: true }));
    app.syncFailCount = 0;
    app.syncLabel = "雲端已同步";
    afterCloudChange();
  } catch (e) {
    app.syncFailCount = (app.syncFailCount || 0) + 1;
    const map = loadStore();
    if (map[app.roomCode] && !(app.cloud && app.cloud.provisional)) {
      mergeCloud(map[app.roomCode]);
    }
    if (app.syncLabel !== "雲端已同步") app.syncLabel = "正在連接課堂…";
    afterCloudChange();
  }
}

function normalizeClassCode(code) {
  const raw = String(code || "").replace(/\D/g, "");
  if (!/^\d{4}$/.test(raw)) return { ok: false, error: "請輸入四位課堂編號。" };
  return { ok: true, code: raw };
}

function localRoomState(code) {
  try { return loadStore()[code] || null; } catch (e) { return null; }
}

function stateFromHistory(list) {
  let found = null;
  (list || []).forEach((msg) => {
    if (msg && msg.type === "state" && msg.state) found = msg.state;
    else if (msg && found) applyInto(found, msg);
  });
  return found;
}

function adoptRoom(code, state, asTeacher) {
  const use = state || Object.assign(emptyCloud(code), { provisional: true, updatedAt: 0 });
  app.roomCode = code;
  app.cloud = use;
  app.lastMsgAt = (use && !use.provisional && use.updatedAt) || 0;
  startSync();
  if (asTeacher && app.cloud && !app.cloud.provisional) teacherPublishState();
}

// Teacher rejoin still tries history (to recover student work), but never
// refuses a valid 4-digit code if history is empty or the fetch fails.
async function joinExistingRoom(code, asTeacher) {
  const parsed = normalizeClassCode(code);
  if (!parsed.ok) return parsed;
  const raw = parsed.code;
  let found = localRoomState(raw);
  try {
    const fromCloud = stateFromHistory(await fetchHistory(raw));
    if (fromCloud) found = fromCloud;
  } catch (e) {}
  adoptRoom(raw, found, asTeacher);
  return { ok: true };
}

function applyInto(state, msg) {
  if (msg.type === "work" && msg.work) state.studentWork[String(msg.work.studentNo)] = msg.work;
  if (msg.type === "presence") {
    const key = msg.role === "teacher" ? "teacher" : "s:" + msg.no;
    state.online[key] = { no: msg.no, role: msg.role, at: msg.at || Date.now() };
  }
}

/* ---------- landing / student number / join ---------- */
function goHome() {
  stopSync();
  app.role = null;
  app.mode = "home";
  app.studentNo = null;
  app.roomCode = "";
  app.cloud = null;
  app.pin = "";
  app.joinCode = "";
  app.pendingClassCode = "";
  app.demoMode = false;
  app.demoProject = false;
  app.syncFailCount = 0;
  try { document.documentElement.classList.remove("prejoin"); } catch (e) {}
  showScreen("screen-landing");
}

function publicJoinUrl(code) {
  // Always encode the public GitHub Pages URL so a projected QR works in class.
  // Never use localhost / 127.0.0.1, even during local preview.
  const base = PUBLIC_SITE_URL.endsWith("/") ? PUBLIC_SITE_URL : PUBLIC_SITE_URL + "/";
  return base + "?" + CLASS_CODE_PARAM + "=" + encodeURIComponent(String(code));
}

function readClassCodeFromUrl() {
  try {
    const raw = new URLSearchParams(location.search).get(CLASS_CODE_PARAM) || "";
    const parsed = normalizeClassCode(raw);
    return parsed.ok ? parsed.code : "";
  } catch (e) {
    return "";
  }
}

function clearClassCodeFromUrl() {
  try {
    const url = new URL(location.href);
    if (!url.searchParams.has(CLASS_CODE_PARAM)) return;
    url.searchParams.delete(CLASS_CODE_PARAM);
    const qs = url.searchParams.toString();
    history.replaceState({}, "", url.pathname + (qs ? "?" + qs : "") + url.hash);
  } catch (e) {}
}

function openNumberGrid() {
  renderNumGrid();
  const sub = $("numbers-sub");
  if (sub) {
    sub.textContent = app.pendingClassCode
      ? "已備好課堂，揀學號就可以加入（不用再輸入編號）"
      : "請點選自己的學號（不用輸入姓名或班別）";
  }
  showScreen("screen-numbers");
}

function leaveNumberGrid() {
  if (app.pendingClassCode) {
    app.pendingClassCode = "";
    clearClassCodeFromUrl();
  }
  goHome();
}

function renderNumGrid() {
  const root = $("num-grid");
  root.innerHTML = "";
  for (let n = 1; n <= CLASS_SIZE; n++) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "num-btn";
    b.textContent = String(n);
    b.addEventListener("click", () => chooseNumber(n));
    root.append(b);
  }
}

function chooseNumber(n) {
  app.studentNo = n;
  app.role = "student";
  if (app.pendingClassCode) {
    app.joinCode = app.pendingClassCode;
    studentJoinWithCode(app.pendingClassCode);
    return;
  }
  app.joinCode = "";
  $("join-student-label").textContent = "學號 " + n;
  $("join-code-display").textContent = "____";
  $("join-error").textContent = "";
  showScreen("screen-join");
}

function renderPad(rootId, getValue, setValue, maxLen) {
  const root = $(rootId);
  root.innerHTML = "";
  ["1","2","3","4","5","6","7","8","9","清除","0","刪除"].forEach((k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = k;
    b.addEventListener("click", () => {
      let v = getValue();
      if (k === "清除") v = "";
      else if (k === "刪除") v = v.slice(0, -1);
      else if (v.length < maxLen) v += k;
      setValue(v);
    });
    root.append(b);
  });
}

function setJoinCode(v) {
  app.joinCode = v.slice(0, 4);
  $("join-code-display").textContent = app.joinCode || "____";
  $("join-error").textContent = "";
}
function setPin(v) {
  app.pin = v.slice(0, 4);
  $("pin-display").textContent = app.pin ? "•".repeat(app.pin.length) : "••••";
  $("pin-error").textContent = "";
}

function studentJoinClass() {
  $("join-error").textContent = "";
  studentJoinWithCode(app.joinCode, $("join-error"));
}

function studentJoinWithCode(code, errorEl) {
  const parsed = normalizeClassCode(code);
  if (!parsed.ok) {
    if (errorEl) errorEl.textContent = parsed.error;
    return false;
  }
  // Never block entry on cloud history. Start with local or empty state and
  // sync in the background (any Wi-Fi / any iPad).
  const found = localRoomState(parsed.code);
  app.mode = "class";
  app.syncLabel = "正在連接課堂…";
  adoptRoom(parsed.code, found, false);
  enterPlay(app.cloud.unlockedQuestion || 0);
  return true;
}

function studentSolo() {
  app.mode = "solo";
  app.roomCode = "";
  app.cloud = null;
  stopSync();
  enterPlay(0);
}

function enterPlay(index) {
  showScreen("screen-play");
  $("who").textContent = "學號 " + app.studentNo + (app.mode === "solo" ? "　單機練習" : "");
  startQuestion(index);
  updateStudentSyncBar();
}

function updateStudentSyncBar() {
  const bar = $("student-sync-bar");
  if (app.mode === "solo") {
    bar.innerHTML = `<div class="sync-pill">單機練習：網絡不穩亦可完成題目</div>`;
    return;
  }
  const code = app.roomCode || "----";
  bar.innerHTML = "";
  const a = document.createElement("div");
  a.className = "sync-pill";
  a.textContent = "課堂：" + code;
  const b = document.createElement("div");
  b.className = "sync-pill " + (app.syncLabel.indexOf("已同步") >= 0 ? "on" : "off");
  b.textContent = app.syncLabel;
  bar.append(a, b);
}

/* ---------- game ---------- */
function startQuestion(index, skipReport) {
  const q = Math.max(0, Math.min(LAST_Q, index));
  const saved = restoreWork(q);
  app.qIndex = q;
  if (!saved) {
    app.loops = [];
    app.drawing = null;
    app.drag = null;
    app.answers = emptyAnswers();
    app.active = { area: "sentence", key: "a" };
    app.checkResult = null;
    app.checkParts = null;
    app.submitted = false;
  }
  $("feedback").className = "feedback";
  $("feedback").textContent = "";
  $("wait-next").classList.add("hidden");
  $("play-main").classList.remove("hidden");
  renderQuestion();
  updateNextButton();
  if (!skipReport) report("question");
}

function restoreWork(qIndex) {
  if (app.mode !== "class" || !app.cloud || !app.studentNo) return false;
  const work = app.cloud.studentWork[String(app.studentNo)];
  const rec = work && work.questions && work.questions[String(qIndex)];
  if (!rec) return false;
  app.loops = [];
  app.pendingLoops = rec.loops || [];
  app.answers = cloneAnswers(rec.answers);
  app.checkResult = rec.checkResult || null;
  app.checkParts = rec.parts || null;
  app.submitted = !!rec.submitted;
  app.active = { area: "sentence", key: "a" };
  return true;
}

function renderQuestion() {
  const q = currentQ();
  $("progress").textContent = `第 ${app.qIndex + 1} 題／共 ${QUESTIONS.length} 題`;
  $("q-title").textContent = `${q.kindName}：${q.shortTitle}`;
  $("q-type").textContent = "種類：" + typeLabel(q);
  $("hint").textContent = q.hint;
  $("longdiv-hint").textContent = q.twoDigit ? "請填寫直式。商要對齊個位。" : "請填寫直式。";
  const items = $("items");
  items.style.gridTemplateColumns = `repeat(${q.cols}, minmax(0, 1fr))`;
  items.style.gridTemplateRows = `repeat(${q.rows}, minmax(0, 1fr))`;
  items.innerHTML = "";
  for (let i = 0; i < q.total; i++) {
    const el = document.createElement("div");
    el.className = "item";
    el.dataset.index = i;
    el.innerHTML = svgFor(q.kind);
    items.append(el);
  }
  renderPlayAnswers();
  renderKeys();
  updateCheckButton();
  requestAnimationFrame(() => {
    const overlay = $("overlay");
    syncOverlayBox(overlay);
    if (app.pendingLoops) {
      app.loops = denormalizeLoops(app.pendingLoops, overlay);
      app.pendingLoops = null;
    }
    renderLoops();
    showStudentFeedback();
    updateStudentSyncBar();
  });
}

function updateNextButton() {
  const btn = $("btn-next");
  if (app.mode === "solo") {
    btn.disabled = false;
    btn.textContent = app.qIndex < LAST_Q ? "下一題" : "完成";
    $("wait-next").classList.add("hidden");
    return;
  }
  const unlocked = (app.cloud && app.cloud.unlockedQuestion) || 0;
  if (app.qIndex < LAST_Q && unlocked > app.qIndex) {
    btn.disabled = false;
    btn.textContent = "下一題";
    $("wait-next").classList.add("hidden");
  } else if (app.qIndex >= LAST_Q) {
    btn.disabled = false;
    btn.textContent = "完成";
    $("wait-next").classList.add("hidden");
  } else {
    btn.disabled = true;
    btn.textContent = "請等老師進入下一題";
  }
}

function makeBlank(area, key, value, active, interactive) {
  const b = document.createElement("div");
  b.className = "blank" + (interactive && active && active.area === area && active.key === key ? " active" : "");
  b.dataset.area = area;
  b.dataset.key = key;
  b.textContent = value || "";
  if (interactive) {
    b.addEventListener("click", () => {
      app.active = { area, key };
      refreshAnswers();
    });
  }
  return b;
}

function renderSentence(root, data, q, active, interactive) {
  root.innerHTML = "";
  root.classList.remove("ok", "bad");
  (q.sentence.parts || []).forEach((p) => {
    if (p.blank) root.append(makeBlank("sentence", p.blank, data && data[p.blank], active, interactive));
    else {
      const s = document.createElement("span");
      s.textContent = p.text;
      root.append(s);
    }
  });
}

function renderHorizontal(root, data, active, interactive) {
  root.innerHTML = "";
  root.classList.remove("ok", "bad");
  const h = data || {};
  const op = (t, cls) => { const d = document.createElement("div"); d.className = cls; d.textContent = t; return d; };
  root.append(
    makeBlank("horizontal", "dividend", h.dividend, active, interactive),
    op("÷", "op"),
    makeBlank("horizontal", "divisor", h.divisor, active, interactive),
    op("=", "eqspan"),
    makeBlank("horizontal", "quotient", h.quotient, active, interactive),
    op("…", "ellipsis"),
    makeBlank("horizontal", "remainder", h.remainder, active, interactive)
  );
}

function renderLongdiv(root, data, q, active, interactive) {
  root.innerHTML = "";
  root.classList.remove("ok", "bad");
  if (q.twoDigit) {
    const pill = document.createElement("div");
    pill.className = "longdiv-hint-pill";
    pill.textContent = "對齊個位";
    root.append(pill);
  }
  const grid = document.createElement("div");
  grid.className = "longdiv-grid" + (q.twoDigit ? "" : " one-digit");
  const ld = data || {};
  const empty = () => document.createElement("div");
  const head = (t) => { const d = document.createElement("div"); d.className = "head"; d.textContent = t; return d; };
  const rule = (sub) => { const d = document.createElement("div"); d.className = sub ? "rule-sub" : "rule"; return d; };
  const paren = () => { const d = document.createElement("div"); d.className = "paren"; d.textContent = ")"; return d; };
  const b = (key) => makeBlank("longdiv", key, ld[key], active, interactive);
  if (q.twoDigit) {
    grid.append(empty(), empty(), head("十位"), head("個位"));
    grid.append(empty(), empty(), b("qT"), b("qU"));
    grid.append(rule(false));
    grid.append(b("divisor"), paren(), b("dT"), b("dU"));
    grid.append(empty(), empty(), b("pT"), b("pU"));
    grid.append(rule(true));
    grid.append(empty(), empty(), b("rT"), b("rU"));
  } else {
    grid.append(empty(), empty(), head("個位"));
    grid.append(empty(), empty(), b("qU"));
    grid.append(rule(false));
    grid.append(b("divisor"), paren(), b("dU"));
    grid.append(empty(), empty(), b("pU"));
    grid.append(rule(true));
    grid.append(empty(), empty(), b("rU"));
  }
  root.append(grid);
}

function renderPlayAnswers() {
  const q = currentQ();
  renderSentence($("sentence-bar"), app.answers.sentence, q, app.active, true);
  renderHorizontal($("horizontal"), app.answers.horizontal, app.active, true);
  renderLongdiv($("longdiv"), app.answers.longdiv, q, app.active, true);
  if (app.mode === "solo" && app.checkResult) {
    paintAnswerGrades(app.answers, groupSummary(), q);
  }
}

function playBlankOrder(q) {
  const list = [];
  (q.sentence.parts || []).forEach((p) => { if (p.blank) list.push({ area: "sentence", key: p.blank }); });
  ["dividend", "divisor", "quotient", "remainder"].forEach((k) => list.push({ area: "horizontal", key: k }));
  if (q.twoDigit) {
    ["qT", "qU", "divisor", "dT", "dU", "pT", "pU", "rT", "rU"].forEach((k) => list.push({ area: "longdiv", key: k }));
  } else {
    ["qU", "divisor", "dU", "pU", "rU"].forEach((k) => list.push({ area: "longdiv", key: k }));
  }
  return list;
}

function renderKeys(rootId) {
  const root = $(rootId || boardIds().keys);
  if (!root) return;
  if (root.dataset.ready) return;
  ["1","2","3","4","5","6","7","8","9","0","刪除","清空此格"].forEach((k) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = k;
    if (k === "刪除") b.addEventListener("click", backspace);
    else if (k === "清空此格") b.addEventListener("click", () => {
      setActiveField("");
      refreshAnswers();
      report("typing");
    });
    else b.addEventListener("click", () => typeInto(k));
    root.append(b);
  });
  root.dataset.ready = "1";
}

function refreshAnswers() {
  if (app.demoMode) renderDemoAnswers();
  else renderPlayAnswers();
}

function renderDemoAnswers() {
  const q = currentQ();
  renderSentence($("demo-sentence"), app.answers.sentence, q, app.active, true);
  renderHorizontal($("demo-horizontal"), app.answers.horizontal, app.active, true);
  renderLongdiv($("demo-longdiv"), app.answers.longdiv, q, app.active, true);
}

function fieldMax(active) { return active.area === "longdiv" ? 1 : 2; }
function getActiveField() {
  const { area, key } = app.active;
  if (area === "horizontal") return app.answers.horizontal[key] || "";
  if (area === "longdiv") return app.answers.longdiv[key] || "";
  if (area === "sentence") return app.answers.sentence[key] || "";
  return "";
}
function setActiveField(val) {
  const { area, key } = app.active;
  if (area === "horizontal") app.answers.horizontal[key] = val;
  else if (area === "longdiv") app.answers.longdiv[key] = val;
  else if (area === "sentence") app.answers.sentence[key] = val;
}

function typeInto(ch) {
  if (!isBoardScreenActive()) return;
  if (!/^[0-9]$/.test(ch)) return;
  const cur = getActiveField();
  const max = fieldMax(app.active);
  if (cur.length >= max && cur !== "0") return;
  const next = cur === "0" ? ch : cur + ch;
  if (next.length > max) return;
  setActiveField(next);
  refreshAnswers();
  report("typing");
}
function backspace() {
  if (!isBoardScreenActive()) return;
  setActiveField(getActiveField().slice(0, -1));
  refreshAnswers();
  report("typing");
}
function focusNextBlank() {
  const list = playBlankOrder(currentQ());
  const i = list.findIndex((f) => f.area === app.active.area && f.key === app.active.key);
  app.active = list[(i + 1 + list.length) % list.length];
  refreshAnswers();
}

function syncOverlayBox(overlay) {
  const board = overlay.parentElement;
  const w = overlay.clientWidth || (board && board.clientWidth) || 1;
  const h = overlay.clientHeight || (board && board.clientHeight) || 1;
  overlay.setAttribute("viewBox", `0 0 ${w} ${h}`);
  return { w, h };
}

function loopPath(loop) {
  return `M ${loop.cx - loop.rx} ${loop.cy} a ${loop.rx} ${loop.ry} 0 1 0 ${loop.rx * 2} 0 a ${loop.rx} ${loop.ry} 0 1 0 ${-loop.rx * 2} 0`;
}

function normalizeLoops(loops, overlay) {
  const w = overlay.viewBox.baseVal.width || overlay.clientWidth || 1;
  const h = overlay.viewBox.baseVal.height || overlay.clientHeight || 1;
  return loops.map((l) => ({
    id: l.id, nx: l.cx / w, ny: l.cy / h, nrx: l.rx / w, nry: l.ry / h, color: l.color
  }));
}
function denormalizeLoops(nloops, overlay) {
  const w = overlay.viewBox.baseVal.width || overlay.clientWidth || 1;
  const h = overlay.viewBox.baseVal.height || overlay.clientHeight || 1;
  return (nloops || []).map((l) => ({
    id: l.id,
    cx: l.nx != null ? l.nx * w : l.cx,
    cy: l.ny != null ? l.ny * h : l.cy,
    rx: l.nrx != null ? l.nrx * w : l.rx,
    ry: l.nry != null ? l.nry * h : l.ry,
    color: l.color
  }));
}

function paintLoops(overlay, loops, drawing) {
  const all = loops.slice();
  if (drawing) all.push(drawing);
  overlay.innerHTML = all.map((loop) =>
    `<path d="${loopPath(loop)}" fill="${loop.color}" fill-opacity="0.10" stroke="${loop.color}" stroke-width="6"></path>`
  ).join("");
}

function boardIds() {
  if (app.demoMode) {
    return {
      board: "demo-board",
      items: "demo-items",
      overlay: "demo-overlay",
      tools: "demo-loop-tools",
      group: "demo-group-live",
      sentence: "demo-sentence",
      horizontal: "demo-horizontal",
      longdiv: "demo-longdiv",
      keys: "demo-numkeys"
    };
  }
  return {
    board: "board",
    items: "items",
    overlay: "overlay",
    tools: "loop-tools",
    group: "group-live",
    sentence: "sentence-bar",
    horizontal: "horizontal",
    longdiv: "longdiv",
    keys: "numkeys"
  };
}

function isBoardScreenActive() {
  return $("screen-play").classList.contains("active") ||
    ($("screen-demo") && $("screen-demo").classList.contains("active"));
}

function renderLoops() {
  const ids = boardIds();
  const overlay = $(ids.overlay);
  if (!overlay) return;
  syncOverlayBox(overlay);
  paintLoops(overlay, app.loops, app.drawing);
  renderLoopTools();
  colorItems(ids.items, ids.overlay, app.loops);
  updateGroupLive();
}

function renderLoopTools() {
  const ids = boardIds();
  const overlay = $(ids.overlay);
  const board = $(ids.board);
  const toolsRoot = $(ids.tools);
  if (!overlay || !board || !toolsRoot) return;
  toolsRoot.innerHTML = "";
  const rect = overlay.getBoundingClientRect();
  const boardRect = board.getBoundingClientRect();
  const vbW = overlay.viewBox.baseVal.width || rect.width;
  const vbH = overlay.viewBox.baseVal.height || rect.height;
  app.loops.forEach((loop) => {
    const tools = document.createElement("div");
    tools.className = "loop-tools";
    tools.style.left = `${loop.cx * (rect.width / vbW) + (rect.left - boardRect.left)}px`;
    tools.style.top = `${(loop.cy - loop.ry) * (rect.height / vbH) + (rect.top - boardRect.top)}px`;
    const del = document.createElement("button");
    del.textContent = "刪除圈";
    del.style.background = loop.color;
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      app.loops = app.loops.filter((l) => l.id !== loop.id);
      renderLoops();
      report("grouping");
    });
    tools.append(del);
    toolsRoot.append(tools);
  });
}

function itemCenters(itemsId, overlayId) {
  const overlay = $(overlayId);
  const rect = overlay.getBoundingClientRect();
  const vbW = overlay.viewBox.baseVal.width || rect.width || 1;
  const vbH = overlay.viewBox.baseVal.height || rect.height || 1;
  return [...document.querySelectorAll("#" + itemsId + " .item")].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      el,
      x: ((r.left + r.width / 2) - rect.left) * (vbW / rect.width),
      y: ((r.top + r.height / 2) - rect.top) * (vbH / rect.height)
    };
  });
}

function insideLoop(px, py, loop) {
  const dx = (px - loop.cx) / Math.max(loop.rx, 1);
  const dy = (py - loop.cy) / Math.max(loop.ry, 1);
  return dx * dx + dy * dy <= 1;
}

function colorItems(itemsId, overlayId, loops) {
  itemCenters(itemsId, overlayId).forEach(({ el, x, y }) => {
    const hit = [...loops].reverse().find((loop) => insideLoop(x, y, loop));
    el.classList.toggle("in-loop", !!hit);
    const halo = el.querySelector(".halo");
    if (halo) halo.style.background = hit ? hit.color : "transparent";
  });
}

function groupSummary(itemsId, overlayId, loops, qIndex) {
  const q = QUESTIONS[qIndex == null ? app.qIndex : qIndex];
  const loopsUse = loops || app.loops;
  const centers = itemCenters(itemsId || "items", overlayId || "overlay");
  const counts = loopsUse.map((loop) => centers.filter(({ x, y }) => insideLoop(x, y, loop)).length);
  const positive = counts.filter((n) => n > 0);
  const grouped = positive.reduce((a, b) => a + b, 0);
  const uniqueLoops = positive.length;
  const even = uniqueLoops > 0 && positive.every((n) => n === positive[0]);
  const perGroup = even ? positive[0] : null;
  const ungrouped = q.total - grouped;
  return {
    groups: uniqueLoops,
    perGroup,
    even,
    grouped,
    ungrouped,
    total: q.total
  };
}

function groupingGuide(q) {
  if (q.shareType === "equal") {
    if (q.remainder) return `請圈出 ${q.divisor} ${q.groupWord}，每${q.groupWord}數量相同。餘下的不用圈。`;
    return `請圈出 ${q.divisor} ${q.groupWord}，每${q.groupWord}數量相同，把全部都圈入。`;
  }
  if (q.remainder) return `請每 ${q.divisor} ${q.unit}圈成一${q.groupWord}。餘下的不用圈。`;
  return `請每 ${q.divisor} ${q.unit}圈成一${q.groupWord}，把全部都圈入。`;
}

function updateGroupLive() {
  const ids = boardIds();
  const g = groupSummary(ids.items, ids.overlay, app.loops, app.qIndex);
  const el = $(ids.group);
  if (!el) return;
  const q = currentQ();
  if (!g.groups) el.textContent = "尚未圈組。" + groupingGuide(q);
  else if (!g.even) el.textContent = `而家圈咗 ${g.groups} 組，但每組數量唔相同。請調成每組一樣多。`;
  else if (g.ungrouped > 0) el.textContent = `而家圈咗 ${g.groups} 組，每組 ${g.perGroup} 個，已圈 ${g.grouped}／${g.total} 個，餘下 ${g.ungrouped} 個未圈。`;
  else el.textContent = `而家圈咗 ${g.groups} 組，每組 ${g.perGroup} 個，已圈全部 ${g.total} 個。`;
}

function groupText(g) {
  if (!g || !g.groups) return "尚未圈組";
  if (!g.even) return `圈咗 ${g.groups} 組，每組數量唔同`;
  if (g.ungrouped) return `${g.groups} 組、每組 ${g.perGroup} 個，餘下 ${g.ungrouped} 個未圈`;
  return `${g.groups} 組、每組 ${g.perGroup} 個（已圈 ${g.grouped}／${g.total}）`;
}

function svgPoint(evt, overlay) {
  const pt = overlay.createSVGPoint();
  pt.x = evt.clientX; pt.y = evt.clientY;
  return pt.matrixTransform(overlay.getScreenCTM().inverse());
}

function hitLoop(p) {
  for (let i = app.loops.length - 1; i >= 0; i--) {
    if (insideLoop(p.x, p.y, app.loops[i])) return app.loops[i];
  }
  return null;
}

function onDown(evt) {
  if (!isBoardScreenActive()) return;
  if (evt.target.closest(".loop-tools") || evt.target.closest("#loop-tools") || evt.target.closest("#demo-loop-tools")) return;
  evt.preventDefault();
  document.documentElement.classList.add("drawing-lock");
  document.body.classList.add("drawing-lock");
  const overlay = $(boardIds().overlay);
  const p = svgPoint(evt, overlay);
  const loop = hitLoop(p);
  if (loop) app.drag = { id: loop.id, start: p, ox: loop.cx, oy: loop.cy };
  else {
    const color = LOOP_COLORS[app.loops.length % LOOP_COLORS.length];
    app.drawing = { id: "draft", cx: p.x, cy: p.y, rx: 1, ry: 1, color, start: p };
  }
  renderLoops();
}
function onMove(evt) {
  if (!app.drawing && !app.drag) return;
  evt.preventDefault();
  const overlay = $(boardIds().overlay);
  if (!overlay) return;
  const p = svgPoint(evt, overlay);
  if (app.drawing) {
    const s = app.drawing.start;
    app.drawing.cx = (s.x + p.x) / 2;
    app.drawing.cy = (s.y + p.y) / 2;
    app.drawing.rx = Math.max(16, Math.abs(p.x - s.x) / 2);
    app.drawing.ry = Math.max(16, Math.abs(p.y - s.y) / 2);
  } else if (app.drag) {
    const loop = app.loops.find((l) => l.id === app.drag.id);
    if (!loop) return;
    loop.cx = app.drag.ox + (p.x - app.drag.start.x);
    loop.cy = app.drag.oy + (p.y - app.drag.start.y);
  }
  renderLoops();
}
function onUp() {
  const was = app.drawing || app.drag;
  if (app.drawing) {
    if (app.drawing.rx > 28 && app.drawing.ry > 22) {
      app.loops.push({
        id: "L" + Date.now() + Math.random().toString(16).slice(2),
        cx: app.drawing.cx, cy: app.drawing.cy,
        rx: app.drawing.rx, ry: app.drawing.ry,
        color: app.drawing.color
      });
    }
    app.drawing = null;
    if (was) report("grouping");
  }
  app.drag = null;
  document.documentElement.classList.remove("drawing-lock");
  document.body.classList.remove("drawing-lock");
  if (was) renderLoops();
}

function onTouchMove(e) {
  if (app.drawing || app.drag) e.preventDefault();
}

function updateCheckButton() {
  const btn = $("btn-check");
  if (!btn) return;
  btn.textContent = app.mode === "solo" ? "檢查答案" : "提交";
}

function paintAnswerGrades(answers, g, q) {
  const ev = evaluateWork(answers, g, q);
  const set = (id, ok) => {
    const el = $(id);
    if (!el) return;
    el.classList.remove("ok", "bad");
    el.classList.add(ok ? "ok" : "bad");
  };
  set("sentence-bar", ev.parts.sentence);
  set("horizontal", ev.parts.horizontal);
  set("longdiv", ev.parts.longdiv);
}

function clearGradePaint() {
  ["sentence-bar", "horizontal", "longdiv"].forEach((id) => {
    const el = $(id);
    if (el) el.classList.remove("ok", "bad");
  });
}

function showStudentFeedback() {
  const feedback = $("feedback");
  clearGradePaint();
  if (app.mode === "solo") {
    if (app.checkResult) {
      const g = groupSummary();
      applyFeedback(feedback, app.checkResult, app.checkParts, g, currentQ());
      paintAnswerGrades(app.answers, g, currentQ());
    }
    return;
  }
  feedback.className = "feedback";
  feedback.textContent = app.submitted ? "已提交，請等候老師。若要修改，改完再按一次提交。" : "";
}

function checkAnswers() {
  const g = groupSummary();
  const ev = evaluateWork(app.answers, g, currentQ());
  app.checkResult = ev.overall;
  app.checkParts = ev.parts;
  if (app.mode === "solo") {
    paintAnswerGrades(app.answers, g, currentQ());
    applyFeedback($("feedback"), ev.overall, ev.parts, g, currentQ());
    report("checked");
    return;
  }
  app.submitted = true;
  const feedback = $("feedback");
  feedback.className = "feedback";
  feedback.textContent = "已提交，請等候老師。若要修改，改完再按一次提交。";
  clearGradePaint();
  report("submitted");
}

function applyFeedback(el, result, parts, g, q) {
  parts = parts || {};
  if (result === "correct") {
    el.className = "feedback ok";
    el.textContent = "正確！" + formatHorizontalAnswer(q);
  } else if (result === "incorrect") {
    el.className = "feedback bad";
    const wrong = [];
    if (!parts.grouping) wrong.push("分組");
    if (!parts.sentence) wrong.push("填空");
    if (!parts.horizontal) wrong.push("橫式");
    if (!parts.longdiv) wrong.push("直式");
    el.textContent = "仲未完全正確。請再檢查：" + (wrong.join("、") || "答案") + "。";
  } else if (result === "incomplete") {
    el.className = "feedback bad";
    el.textContent = "請先完成分組、填空、橫式和直式。";
  } else {
    el.className = "feedback";
    el.textContent = "";
  }
}

function applyInspectFeedback(el, rec, g, q) {
  const parts = rec && rec.parts;
  const result = rec && rec.checkResult;
  if (result === "correct") {
    el.className = "feedback ok";
    el.textContent = "答對。";
  } else if (result === "incorrect") {
    el.className = "feedback bad";
    const wrong = [];
    if (parts && !parts.grouping) wrong.push("分組");
    if (parts && !parts.sentence) wrong.push("填空");
    if (parts && !parts.horizontal) wrong.push("橫式");
    if (parts && !parts.longdiv) wrong.push("直式");
    el.textContent = "答錯。需再看：" + (wrong.join("、") || "作品");
  } else if (result === "incomplete") {
    el.className = "feedback bad";
    el.textContent = "未完成。請先完成分組、填空、橫式和直式。";
  } else {
    el.className = "feedback";
    el.textContent = rec ? "尚未評定。" : "這位同學尚未作答這一題。";
  }
}

function saveCurrentWork() {
  if (app.mode !== "class") return;
  studentPublishWork("autosave");
}

function buildStudentWork(lastEvent) {
  const prev = (app.cloud && app.cloud.studentWork[String(app.studentNo)]) || {
    studentNo: app.studentNo, questions: {}
  };
  const overlay = $("overlay");
  const rec = {
    loops: overlay ? normalizeLoops(app.loops, overlay) : [],
    answers: cloneAnswers(app.answers),
    groupSummary: groupSummary(),
    checkResult: app.checkResult,
    parts: app.checkParts,
    submitted: !!app.submitted,
    updatedAt: Date.now()
  };
  prev.questions = prev.questions || {};
  prev.questions[String(app.qIndex)] = rec;
  prev.studentNo = app.studentNo;
  prev.currentQuestion = app.qIndex;
  prev.phase = $("screen-done").classList.contains("active") ? "done" : "playing";
  prev.lastEvent = lastEvent;
  prev.updatedAt = rec.updatedAt;
  return prev;
}

let reportTimer = null;
function report(lastEvent) {
  if (app.demoMode) return;
  if (!app.studentNo) return;
  if (app.mode === "class" && app.submitted && (lastEvent === "typing" || lastEvent === "grouping")) {
    app.submitted = false;
    const feedback = $("feedback");
    if (feedback) {
      feedback.className = "feedback";
      feedback.textContent = "更改後請再按提交。";
    }
    clearGradePaint();
  }
  if (app.mode !== "class") return;
  if (lastEvent === "typing") {
    clearTimeout(reportTimer);
    reportTimer = setTimeout(() => studentPublishWork("typing"), 400);
    return;
  }
  clearTimeout(reportTimer);
  studentPublishWork(lastEvent);
}

function goNextOrDone() {
  if (app.mode === "class") {
    const unlocked = (app.cloud && app.cloud.unlockedQuestion) || 0;
    if (app.qIndex < LAST_Q && unlocked > app.qIndex) {
      report("next");
      startQuestion(app.qIndex + 1);
      return;
    }
    if (app.qIndex >= LAST_Q) {
      report("done");
      $("done-text").textContent = "你已經完成老師安排嘅題目。請等候老師指示。";
      showScreen("screen-done");
      return;
    }
    return;
  }
  if (app.qIndex < LAST_Q) startQuestion(app.qIndex + 1);
  else {
    $("done-text").textContent = "你已經完成八道題練習。可以返回主頁再試，或等網絡恢復後加入課堂。";
    showScreen("screen-done");
  }
}

/* ---------- teacher ---------- */
function goTeacherPin() {
  app.role = "teacher";
  app.pin = "";
  $("pin-display").textContent = "••••";
  $("pin-error").textContent = "";
  showScreen("screen-pin");
}

function submitPin() {
  if (app.pin !== TEACHER_PIN) {
    $("pin-error").textContent = "密碼不正確。";
    app.pin = "";
    $("pin-display").textContent = "••••";
    return;
  }
  app.roomCode = genRoomCode();
  app.cloud = emptyCloud(app.roomCode);
  $("room-code-display").textContent = app.roomCode;
  $("room-status").textContent = "已建立新課堂。可把編號投影給學生，或再按「新編號」。";
  $("teacher-rejoin-code").value = "";
  saveRoomLocal(app.cloud);
  startSync();
  teacherPublishState();
  showEntryScreen();
}

function regenRoom() {
  app.roomCode = genRoomCode();
  app.cloud = emptyCloud(app.roomCode);
  $("room-code-display").textContent = app.roomCode;
  $("room-status").textContent = "已換新編號。舊編號嘅課堂資料仍然保留，可用下面重開。";
  saveRoomLocal(app.cloud);
  teacherPublishState();
  if ($("screen-entry") && $("screen-entry").classList.contains("active")) showEntryScreen();
}

async function rejoinRoom() {
  const code = $("teacher-rejoin-code").value.trim();
  const res = await joinExistingRoom(code, true);
  if (!res.ok) {
    $("room-status").textContent = res.error;
    $("room-status").style.color = "var(--bad)";
    return;
  }
  $("room-status").style.color = "";
  $("room-code-display").textContent = app.roomCode;
  $("room-status").textContent = "已重新開啟課堂 " + app.roomCode + "。";
  showEntryScreen();
}

function updateRoomStatus() {
  if (!app.cloud) return;
  const n = onlineStudents().length;
  $("room-code-display").textContent = app.cloud.code;
  $("room-status").textContent = "課堂已準備。而家在線學生：" + n + " 人。";
}

function showEntryScreen() {
  if (!app.roomCode) return;
  showScreen("screen-entry");
  renderEntryScreen();
}

function renderEntryScreen() {
  const code = app.roomCode;
  const url = publicJoinUrl(code);
  app.entryJoinUrl = url;
  if ($("entry-code-display")) $("entry-code-display").textContent = code;
  if ($("entry-url-display")) $("entry-url-display").textContent = url;
  drawEntryQr(url);
}

function drawEntryQr(url) {
  const canvas = $("entry-qr-canvas");
  const fallback = $("entry-qr-fallback");
  if (!canvas) return;
  canvas.dataset.qrUrl = url;
  const revealFallback = function () {
    canvas.classList.add("hidden");
    if (fallback) fallback.classList.remove("hidden");
  };
  try {
    if (typeof qrcode !== "function") throw new Error("no-qr-lib");
    const qr = qrcode(0, "Q");
    qr.addData(url);
    qr.make();
    const count = qr.getModuleCount();
    const margin = 2;
    const scale = Math.max(8, Math.floor(800 / (count + margin * 2)));
    const size = (count + margin * 2) * scale;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("no-2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = "#3a2415";
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (qr.isDark(r, c)) {
          ctx.fillRect((c + margin) * scale, (r + margin) * scale, scale, scale);
        }
      }
    }
    canvas.classList.remove("hidden");
    if (fallback) fallback.classList.add("hidden");
  } catch (e) {
    revealFallback();
  }
}

function enterConsole() {
  if (!app.cloud) return;
  showScreen("screen-console");
  renderConsole();
}

function onlineStudents() {
  if (!app.cloud) return [];
  const now = Date.now();
  const list = [];
  Object.keys(app.cloud.online || {}).forEach((k) => {
    const info = app.cloud.online[k];
    if (!info || info.role === "teacher") return;
    if (now - (info.at || 0) >= ONLINE_STALE_MS) return;
    list.push(Number(info.no));
  });
  return list.sort((a, b) => a - b);
}

function updateTeacherSync() {
  const pill = $("teacher-sync-pill");
  if (pill) {
    pill.textContent = app.syncLabel;
    pill.className = "sync-pill " + (app.syncLabel.indexOf("已同步") >= 0 ? "on" : "off");
  }
}

function resultLabel(r, submitted) {
  const grade = r === "correct" ? "答對" : r === "incorrect" ? "答錯" : r === "incomplete" ? "未完成" : "未評定";
  if (submitted) return "已提交・" + grade;
  if (r) return "作答中・" + grade;
  return "尚未提交";
}

function renderConsole() {
  if (!app.cloud) return;
  pruneOnline(app.cloud);
  $("teacher-code-pill").textContent = app.cloud.code;
  const online = onlineStudents();
  $("teacher-online-pill").textContent = "在線：" + online.length;
  $("teacher-q-badge").textContent = "而家全班：第 " + (app.cloud.unlockedQuestion + 1) + " 題";
  $("btn-next-q").disabled = app.cloud.unlockedQuestion >= LAST_Q;
  $("btn-prev-q").disabled = app.cloud.unlockedQuestion <= 0;
  $("btn-reveal").textContent = app.cloud.reveal ? "隱藏答案" : "顯示答案";
  updateTeacherSync();

  const names = $("teacher-online-names");
  if (app.onlineNamesOpen) {
    names.classList.remove("hidden");
    names.textContent = online.length ? ("在線學號：" + online.join("、")) : "暫時未有學生在線。";
  } else names.classList.add("hidden");

  let joined = 0, correctNow = 0, wrongNow = 0;
  const q = app.cloud.unlockedQuestion;
  const list = $("teacher-list");
  list.innerHTML = "";
  for (let n = 1; n <= CLASS_SIZE; n++) {
    const work = app.cloud.studentWork[String(n)];
    const isOnline = online.indexOf(n) >= 0;
    const rec = work && work.questions && work.questions[String(work.currentQuestion != null ? work.currentQuestion : q)];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "student-card";
    if (isOnline) card.classList.add("online");
    if (rec && rec.checkResult === "correct") { card.classList.add("ok"); correctNow++; }
    else if (rec && rec.checkResult === "incorrect") { card.classList.add("bad"); wrongNow++; }
    if (!work) card.classList.add("empty");
    else joined++;
    const h = document.createElement("h3");
    h.textContent = "學號 " + n + (isOnline ? " · 在線" : "");
    const p1 = document.createElement("p");
    if (!work) p1.textContent = "尚未進入";
    else {
      const qq = (work.currentQuestion || 0) + 1;
      const horiz = rec && rec.answers ? formatHorizontalWritten(rec.answers.horizontal) : "";
      p1.textContent = `做到第 ${qq} 題　${groupText(rec && rec.groupSummary)}　${resultLabel(rec && rec.checkResult, rec && rec.submitted)}` + (horiz ? "　" + horiz : "");
    }
    card.append(h, p1);
    card.addEventListener("click", () => openInspect(n));
    list.append(card);
  }
  $("teacher-summary").textContent =
    `已進入 ${joined} 人　在線 ${online.length} 人　目前題答對 ${correctNow}　答錯 ${wrongNow}`;
}

function openInspect(n) {
  app.inspectNo = n;
  const work = app.cloud && app.cloud.studentWork[String(n)];
  app.inspectQ = work && work.currentQuestion != null ? work.currentQuestion : (app.cloud.unlockedQuestion || 0);
  showScreen("screen-inspect");
  renderInspect();
}

function getInspectRec() {
  const work = app.cloud && app.cloud.studentWork[String(app.inspectNo)];
  const rec = work && work.questions && work.questions[String(app.inspectQ)];
  return { work, rec };
}

function renderStaticScene(prefix, qIndex, rec, opts) {
  const q = QUESTIONS[qIndex];
  const items = $(prefix + "-items");
  const overlay = $(prefix + "-overlay");
  items.style.gridTemplateColumns = `repeat(${q.cols}, minmax(0, 1fr))`;
  items.style.gridTemplateRows = `repeat(${q.rows}, minmax(0, 1fr))`;
  items.innerHTML = "";
  for (let i = 0; i < q.total; i++) {
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = svgFor(q.kind);
    items.append(el);
  }
  const answers = cloneAnswers(rec && rec.answers);
  renderSentence($(prefix + "-sentence"), answers.sentence, q, null, false);
  renderHorizontal($(prefix + "-horizontal"), answers.horizontal, null, false);
  renderLongdiv($(prefix + "-longdiv"), answers.longdiv, q, null, false);
  requestAnimationFrame(() => {
    syncOverlayBox(overlay);
    const loops = denormalizeLoops((rec && rec.loops) || [], overlay);
    paintLoops(overlay, loops, null);
    colorItems(prefix + "-items", prefix + "-overlay", loops);
    const g = rec && rec.groupSummary ? rec.groupSummary : groupSummary(prefix + "-items", prefix + "-overlay", loops, qIndex);
    $(prefix + "-group").textContent = groupText(g);
    const reveal = !!(opts && opts.reveal);
    const showGrade = !!(opts && opts.showGrade);
    const ans = $(prefix + "-answer");
    ans.innerHTML = "";
    ans.className = "feedback";
    if (showGrade) {
      applyInspectFeedback(ans, rec, g, q);
      const ev = evaluateWork(answers, g, q);
      const set = (id, ok) => {
        const el = $(id);
        if (!el) return;
        el.classList.remove("ok", "bad");
        if (rec && rec.checkResult) el.classList.add(ok ? "ok" : "bad");
      };
      set(prefix + "-sentence", ev.parts.sentence);
      set(prefix + "-horizontal", ev.parts.horizontal);
      set(prefix + "-longdiv", ev.parts.longdiv);
    } else {
      [prefix + "-sentence", prefix + "-horizontal", prefix + "-longdiv"].forEach((id) => {
        const el = $(id);
        if (el) el.classList.remove("ok", "bad");
      });
    }
    if (showGrade && reveal) {
      const box = document.createElement("div");
      box.className = "answer-box";
      box.textContent = "參考答案：" + formatExpectedGrouping(q) + "　" + formatSentenceAnswer(q) + "　橫式 " + formatHorizontalAnswer(q) + "　直式 " + formatLongdivAnswer(q);
      ans.append(box);
    }
  });
}

function renderInspect() {
  const { rec } = getInspectRec();
  $("inspect-sub").textContent = "學號 " + app.inspectNo + "　第 " + (app.inspectQ + 1) + " 題";
  $("inspect-title").textContent = QUESTIONS[app.inspectQ].kindName + "：" + QUESTIONS[app.inspectQ].shortTitle;
  let tabs = $("inspect-tabs");
  if (!tabs) {
    tabs = document.createElement("div");
    tabs.id = "inspect-tabs";
    tabs.className = "btn-row q-tabs";
    $("inspect-sub").after(tabs);
  }
  tabs.innerHTML = "";
  for (let i = 0; i < QUESTIONS.length; i++) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "btn " + (i === app.inspectQ ? "btn-primary" : "btn-ghost");
    b.textContent = "第 " + (i + 1) + " 題";
    b.addEventListener("click", () => { app.inspectQ = i; renderInspect(); });
    tabs.append(b);
  }
  const broadcasting = app.cloud && app.cloud.broadcast && Number(app.cloud.broadcast.studentNo) === Number(app.inspectNo) && app.cloud.broadcast.questionIndex === app.inspectQ;
  $("btn-broadcast").classList.toggle("hidden", !!broadcasting);
  $("btn-cancel-broadcast").classList.toggle("hidden", !broadcasting);
  $("btn-inspect-reveal").textContent = app.cloud && app.cloud.reveal ? "隱藏答案" : "顯示答案";
  renderStaticScene("inspect", app.inspectQ, rec, { showGrade: true, reveal: !!(app.cloud && app.cloud.reveal) });
}

function renderBroadcast() {
  if (!app.cloud || !app.cloud.broadcast) return;
  const b = app.cloud.broadcast;
  $("broadcast-sub").textContent = "課堂 " + app.roomCode;
  $("broadcast-badge").textContent = "正在討論：學號 " + b.studentNo + "　第 " + (b.questionIndex + 1) + " 題";
  const work = app.cloud.studentWork[String(b.studentNo)];
  const rec = work && work.questions && work.questions[String(b.questionIndex)];
  // 廣播只出示學生作品供討論，不向全班公布對錯或參考答案
  renderStaticScene("broadcast", b.questionIndex, rec || b, { showGrade: false, reveal: false });
}

function teacherBroadcast() {
  const { rec } = getInspectRec();
  app.cloud.broadcast = {
    studentNo: app.inspectNo,
    questionIndex: app.inspectQ,
    loops: rec ? rec.loops : [],
    answers: rec ? rec.answers : emptyAnswers(),
    groupSummary: rec ? rec.groupSummary : null,
    checkResult: rec ? rec.checkResult : null
  };
  teacherPublishState();
  renderInspect();
}
function teacherCancelBroadcast() {
  app.cloud.broadcast = null;
  teacherPublishState();
  renderInspect();
}
function toggleReveal() {
  app.cloud.reveal = !app.cloud.reveal;
  teacherPublishState();
  if ($("screen-inspect").classList.contains("active")) renderInspect();
  else renderConsole();
}
function teacherSetQuestion(delta) {
  const next = app.cloud.unlockedQuestion + delta;
  if (next < 0 || next > LAST_Q) return;
  app.cloud.unlockedQuestion = next;
  app.cloud.broadcast = null;
  teacherPublishState();
  renderConsole();
}
function teacherNewRound() {
  if (!confirm("確定開新一輪？本輪學生作答會被清除，課堂編號維持不變。")) return;
  const code = app.cloud.code;
  const online = app.cloud.online;
  app.cloud = emptyCloud(code);
  app.cloud.online = online;
  teacherPublishState();
  renderConsole();
}

function enterTeacherDemo() {
  if (!app.cloud) return;
  app.qIndex = app.cloud.unlockedQuestion || 0;
  app.loops = [];
  app.drawing = null;
  app.drag = null;
  app.answers = emptyAnswers();
  app.active = { area: "sentence", key: "a" };
  app.checkResult = null;
  app.checkParts = null;
  app.submitted = false;
  app.demoProject = false;
  showScreen("screen-demo");
  syncDemoProjectButton();
  renderTeacherDemo();
}

function renderTeacherDemo() {
  const q = currentQ();
  $("demo-q-badge").textContent = "第 " + (app.qIndex + 1) + " 題";
  $("demo-title").textContent = q.kindName + "：" + q.shortTitle;
  $("demo-type").textContent = "種類：" + typeLabel(q);
  $("demo-hint").textContent = q.hint;
  $("demo-longdiv-hint").textContent = q.twoDigit ? "請填寫直式。商要對齊個位。" : "請填寫直式。";
  $("demo-feedback").className = "feedback";
  $("demo-feedback").textContent = "可畫環線及寫橫式、直式。此示範不會傳送到學生畫面。";
  const items = $("demo-items");
  items.style.gridTemplateColumns = `repeat(${q.cols}, minmax(0, 1fr))`;
  items.style.gridTemplateRows = `repeat(${q.rows}, minmax(0, 1fr))`;
  items.innerHTML = "";
  for (let i = 0; i < q.total; i++) {
    const el = document.createElement("div");
    el.className = "item";
    el.dataset.index = i;
    el.innerHTML = svgFor(q.kind);
    items.append(el);
  }
  renderDemoAnswers();
  renderKeys("demo-numkeys");
  requestAnimationFrame(() => renderLoops());
}

function clearTeacherDemo() {
  app.loops = [];
  app.drawing = null;
  app.drag = null;
  app.answers = emptyAnswers();
  app.active = { area: "sentence", key: "a" };
  renderTeacherDemo();
}

function leaveTeacherDemo() {
  app.loops = [];
  app.drawing = null;
  app.drag = null;
  app.answers = emptyAnswers();
  app.demoMode = false;
  app.demoProject = false;
  document.body.classList.remove("demo-project");
  enterConsole();
}

function syncDemoProjectButton() {
  const btn = $("btn-demo-project");
  if (!btn) return;
  btn.textContent = app.demoProject ? "結束投影" : "投影示範";
  btn.setAttribute("aria-pressed", app.demoProject ? "true" : "false");
}

function toggleDemoProject() {
  app.demoProject = !app.demoProject;
  document.body.classList.toggle("demo-project", app.demoProject);
  syncDemoProjectButton();
  requestAnimationFrame(() => renderLoops());
}

function exportData() {
  if (!app.cloud) return;
  const rows = [["學號","題號","題目","種類","已提交","分組結果","分組說明","橫式","直式","填空","整體結果","更新時間"]];
  for (let n = 1; n <= CLASS_SIZE; n++) {
    const work = app.cloud.studentWork[String(n)];
    if (!work) continue;
    for (let qi = 0; qi < QUESTIONS.length; qi++) {
      const rec = work.questions && work.questions[String(qi)];
      if (!rec) continue;
      const q = QUESTIONS[qi];
      const g = rec.groupSummary || {};
      const ans = rec.answers || emptyAnswers();
      const t = rec.updatedAt ? new Date(rec.updatedAt).toLocaleString("zh-HK", { hour12: false, timeZone: "Asia/Hong_Kong" }) : "";
      const groupingOk = rec.parts && rec.parts.grouping ? "正確" : (g.groups ? "不正確" : "未圈組");
      rows.push([
        n, qi + 1, q.kindName + "：" + q.shortTitle, typeLabel(q),
        rec.submitted ? "是" : "否",
        groupingOk,
        groupText(g),
        formatHorizontalWritten(ans.horizontal),
        formatLongdivWritten(ans.longdiv, q),
        formatSentenceWritten(ans.sentence, q),
        resultLabel(rec.checkResult, rec.submitted),
        t
      ]);
    }
  }
  const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "分物與除式-課堂" + app.cloud.code + ".csv";
  a.click();
  URL.revokeObjectURL(a.href);

  const jsonBlob = new Blob([JSON.stringify(app.cloud, null, 2)], { type: "application/json" });
  const b = document.createElement("a");
  b.href = URL.createObjectURL(jsonBlob);
  b.download = "分物與除式-課堂" + app.cloud.code + ".json";
  b.click();
  URL.revokeObjectURL(b.href);
}

/* ---------- wire events ---------- */
function bind() {
  $("btn-student").addEventListener("click", openNumberGrid);
  $("btn-teacher").addEventListener("click", goTeacherPin);
  $("btn-numbers-back").addEventListener("click", leaveNumberGrid);
  $("btn-join-back").addEventListener("click", () => showScreen("screen-numbers"));
  $("btn-join-go").addEventListener("click", studentJoinClass);
  $("btn-join-skip").addEventListener("click", studentSolo);
  $("btn-check").addEventListener("click", checkAnswers);
  $("btn-clear-loops").addEventListener("click", () => { app.loops = []; renderLoops(); report("grouping"); });
  $("btn-clear-eq").addEventListener("click", () => {
    app.answers = emptyAnswers();
    app.checkResult = null;
    app.checkParts = null;
    $("feedback").className = "feedback";
    $("feedback").textContent = "";
    renderPlayAnswers();
    report("typing");
  });
  $("btn-next").addEventListener("click", goNextOrDone);
  $("btn-done-home").addEventListener("click", goHome);
  $("btn-pin-go").addEventListener("click", submitPin);
  $("btn-pin-back").addEventListener("click", goHome);
  $("btn-room-regen").addEventListener("click", regenRoom);
  $("btn-room-entry").addEventListener("click", showEntryScreen);
  $("btn-room-enter").addEventListener("click", enterConsole);
  $("btn-room-rejoin").addEventListener("click", rejoinRoom);
  $("btn-room-home").addEventListener("click", goHome);
  $("btn-entry-console").addEventListener("click", enterConsole);
  $("btn-entry-regen").addEventListener("click", regenRoom);
  $("btn-entry-setup").addEventListener("click", () => {
    if (!app.cloud) return;
    $("room-code-display").textContent = app.roomCode;
    showScreen("screen-room");
    updateRoomStatus();
  });
  $("btn-show-entry").addEventListener("click", showEntryScreen);
  $("btn-export").addEventListener("click", exportData);
  $("btn-console-home").addEventListener("click", goHome);
  $("teacher-online-pill").addEventListener("click", () => {
    app.onlineNamesOpen = !app.onlineNamesOpen;
    renderConsole();
  });
  $("btn-next-q").addEventListener("click", () => teacherSetQuestion(1));
  $("btn-prev-q").addEventListener("click", () => teacherSetQuestion(-1));
  $("btn-reveal").addEventListener("click", toggleReveal);
  $("btn-new-round").addEventListener("click", teacherNewRound);
  $("btn-demo").addEventListener("click", enterTeacherDemo);
  $("btn-demo-project").addEventListener("click", toggleDemoProject);
  $("btn-demo-clear").addEventListener("click", clearTeacherDemo);
  $("btn-demo-back").addEventListener("click", leaveTeacherDemo);
  $("btn-broadcast").addEventListener("click", teacherBroadcast);
  $("btn-cancel-broadcast").addEventListener("click", teacherCancelBroadcast);
  $("btn-inspect-reveal").addEventListener("click", toggleReveal);
  $("btn-inspect-back").addEventListener("click", enterConsole);

  renderPad("join-keys", () => app.joinCode, setJoinCode, 4);
  renderPad("pin-keys", () => app.pin, setPin, 4);

  const board = $("board");
  board.addEventListener("pointerdown", onDown);
  $("demo-board").addEventListener("pointerdown", onDown);
  window.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);
  window.addEventListener("pointercancel", onUp);
  window.addEventListener("touchmove", onTouchMove, { passive: false });
  window.addEventListener("resize", () => {
    if (isBoardScreenActive()) renderLoops();
    if ($("screen-entry") && $("screen-entry").classList.contains("active")) renderEntryScreen();
  });

  window.addEventListener("keydown", (e) => {
    if ($("screen-join").classList.contains("active")) {
      if (e.key >= "0" && e.key <= "9") setJoinCode(app.joinCode + e.key);
      else if (e.key === "Backspace") setJoinCode(app.joinCode.slice(0, -1));
      else if (e.key === "Enter") studentJoinClass();
      return;
    }
    if ($("screen-pin").classList.contains("active")) {
      if (e.key >= "0" && e.key <= "9") setPin(app.pin + e.key);
      else if (e.key === "Backspace") setPin(app.pin.slice(0, -1));
      else if (e.key === "Enter") submitPin();
      return;
    }
    if (!isBoardScreenActive()) return;
    if (e.key >= "0" && e.key <= "9") { typeInto(e.key); e.preventDefault(); }
    else if (e.key === "Backspace") { backspace(); e.preventDefault(); }
    else if (e.key === "Enter" || e.key === "Tab" || e.key === "ArrowRight") {
      focusNextBlank();
      e.preventDefault();
    }
  });
}

bind();
const prefilledCode = readClassCodeFromUrl();
if (prefilledCode) {
  app.pendingClassCode = prefilledCode;
  document.documentElement.classList.add("prejoin");
  openNumberGrid();
} else if (location.hash === "#teacher") {
  goTeacherPin();
}
