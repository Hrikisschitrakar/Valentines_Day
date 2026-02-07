const days = [
  {
    key:"rose",
    name:"Rose Day",
    dateLabel:"Feb 7",
    month: 2, day: 7,
    icon:"🌹",
    wish:"Happy Rose Day 🌹",
    subtitle:"Click the rose 😉",
    quote:"You’re my favorite kind of flower.",
    gif:"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDY5NXV5ZnJnZmN0cjdxNnZpM2k2eGM4cHlzcXE0ZnZxOG80MDk2ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j0d7S4Nn9wQ7xQVder/giphy.gif",
    message:"A bouquet for you 💐"
  },
  {
    key:"propose",
    name:"Propose Day",
    dateLabel:"Feb 8",
    month: 2, day: 8,
    icon:"💍",
    wish:"Happy Propose Day 💍",
    subtitle:"Click the ring 😉",
    quote:"No big speech—just you and me.",
    gif:"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3dndmsyMzZ6MnZ4bzlqdmtkcGQ2NzQ4OTZvdTFuZjZsbmhjbXFvcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sj93cJMsnoQJkqdgYD/giphy.gif",
    message:"With this hand, I will lift your sorrows. Your cup will never empty, for I will be your wine. With this candle, I will light your way in darkness. With this ring, I ask you to be mine"
  },
  {
    key:"choco",
    name:"Chocolate Day",
    dateLabel:"Feb 9",
    month: 2, day: 9,
    icon:"🍫",
    wish:"Happy Chocolate Day 🍫",
    subtitle:"Click the chocolate 😉",
    quote:"Chocolate fixes everything.",
    gif:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWJ2YmJyMHg1MmhhMmRhNjVjbXh5MmR2MnRubDd5aWRmMTFtamx1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qDOOpVu1UZzSSjK/giphy.gif",
    message:"you know my number, call to get one"
  },
  {
    key:"teddy",
    name:"Teddy Day",
    dateLabel:"Feb 10",
    month: 2, day: 10,
    icon:"🧸",
    wish:"Happy Teddy Day 🧸",
    subtitle:"Click the teddy 😉",
    quote:"This hug has a face.",
    gif:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzJqeWl3Zm13dXprbWl0NTd3djBqMDduMXBnbXg0cHdzenhza2VpMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rJ1DIpz2U9ymZyVAX7/giphy.gif",
    message:"you know where to find the teddy"
  },
  {
    key:"promise",
    name:"Promise Day",
    dateLabel:"Feb 11",
    month: 2, day: 11,
    icon:"🤝",
    wish:"Happy Promise Day 🤝",
    subtitle:"Click the promise 😉",
    quote:"Consistency is romantic.",
    gif:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWJneTUycXgzb2ZmaDljMzBwMGwwY28zbTA4ZDA0NjVuenJ2c2l5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GFtJhEvG3681y/giphy.gif",
    message:"I promise to love you forever and more every next day"
  },
  {
    key:"hug",
    name:"Hug Day",
    dateLabel:"Feb 12",
    month: 2, day: 12,
    icon:"🫂",
    wish:"Happy Hug Day 🫂",
    subtitle:"Click the hug 😉",
    quote:"Come here.",
    gif:"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW13b3BkOTVpa3R6MzBrODNqdmVjc2cyNjdlcnU2Mmhzdjc3YXBscSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GXFDStd2CP1ba/giphy.gif",
    message:"for real hug you know where to come"
  },
  {
    key:"kiss",
    name:"Kiss Day",
    dateLabel:"Feb 13",
    month: 2, day: 13,
    icon:"💋",
    wish:"Happy Kiss Day 💋",
    subtitle:"Click the kiss 😉",
    quote:"A kiss is a sentence.",
    gif:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3c3dGJlbGgwamh6bDByaTR3aTZ5b2N4NHlkZG5tYmV4ZGVqbTlpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xR5cPyPoL5HVXSphqA/giphy.gif",
    message:"can't wait to kiss you like this"
  },
  {
    key:"valentine",
    name:"Valentine’s Day",
    dateLabel:"Feb 14",
    month: 2, day: 14,
    icon:"💘",
    wish:"Happy Valentine’s Day 💘",
    subtitle:"Click the heart 😉",
    quote:"You’re my favorite plan.",
    gif:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3h3dnh3MWo3YjZlZ2lxcjFpcm1nN3ZqYjNzYTltaWU5amw1NnhieSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12afltvVzJIesM/giphy.gif",
    message:"let's go on a date"
  }
];

const nav = document.getElementById("dayNav");
const card = document.getElementById("card");
const todayLine = document.getElementById("todayLine");
const lockHint = document.getElementById("lockHint");

function getTodayMD(){
  const now = new Date();        // uses viewer’s device time
  return { m: now.getMonth() + 1, d: now.getDate() };
}

function getTodayKey(){
  const {m, d} = getTodayMD();
  const match = days.find(x => x.month === m && x.day === d);
  return match ? match.key : null;
}

function renderNav(activeKey, unlockedKey){
  nav.innerHTML = "";
  days.forEach(dayObj => {
    const b = document.createElement("button");
    const isUnlocked = (dayObj.key === unlockedKey);
    b.textContent = `${dayObj.icon} ${dayObj.name}`;

    if(dayObj.key === activeKey) b.classList.add("active");
    if(!isUnlocked) b.classList.add("locked");

    b.onclick = () => {
      if(!isUnlocked){
        lockHint.textContent = `Locked 🔒 Come back on ${dayObj.dateLabel}.`;
        return;
      }
      setDay(dayObj.key, unlockedKey);
    };

    nav.appendChild(b);
  });
}

function renderCard(d){
  card.innerHTML = `
    <h2>${d.wish}</h2>
    <p>${d.subtitle}</p>

    <div class="bigIcon" id="mainIcon">${d.icon}</div>

    <blockquote>${d.quote}</blockquote>

    <div class="revealWrap" id="revealWrap">
      <img class="revealGif" src="${d.gif}" alt="${d.name} gif">
      <div class="revealMsg">${d.message}</div>
    </div>
  `;

  // click icon -> toggle reveal
  const icon = document.getElementById("mainIcon");
  const wrap = document.getElementById("revealWrap");
  icon.addEventListener("click", () => {
    wrap.classList.toggle("show");
  });
}

function setDay(key, unlockedKey){
  const d = days.find(x => x.key === key);
  renderNav(key, unlockedKey);
  renderCard(d);
  todayLine.textContent = `Today’s vibe: ${d.name} (${d.dateLabel})`;
  lockHint.textContent = "";
}

// INIT: only allow the real day
const unlockedKey = getTodayKey();

if(!unlockedKey){
  todayLine.textContent = "This site unlocks Feb 7–14 only 💞";
  lockHint.textContent = "Tip: Set your device date between Feb 7–14 to preview (for testing).";
  // show a nice locked screen
  card.innerHTML = `
    <h2>🔒 Locked</h2>
    <p>Valentine Week pages unlock only on their dates (Feb 7–14).</p>
    <blockquote>If you’re testing, temporarily change your device date.</blockquote>
  `;
  renderNav("", "__none__");
} else {
  setDay(unlockedKey, unlockedKey);
}
