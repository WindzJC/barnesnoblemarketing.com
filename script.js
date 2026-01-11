/* Book Marketing Showcase */

const BOOKS = [
  {
    id: "B0C5FMV2DX",
    title: "The Kovalenko Secret",
    author: "Philip L. Rettew",
    genre: "Suspense",
    tags: ["Bestseller"],
    featured: true,
    promoted: true,
    cover: "./covers/B0C5FMV2DX.jpg",
    synopsis: "Colonel Viktor A. Kovalenko discovers a nuclear bomb missing from a Russian base and follows a dangerous trail to New York. The case pulls him into an international web of secrets during the aftermath of 9/11.",
    pressQuotes: [
      "A compelling and richly detailed story of cultures, politics, and high-stakes intrigue."
    ],
    trailer: "https://youtu.be/YJNUH5L8cFc",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.in/Kovalenko-Secret-Philip-L-Rettew/dp/B0C5FMV2DX" },
      { label: "Press release", url: "https://www.prleap.com/pr/290728/south-burlington-vt-author-publishes-suspense-novel?utm_source=chatgpt.com" }
    ]
  },
  {
    id: "B07MNZ4NZG",
    title: "Positive Psychology Coaching",
    author: "Dr. Susanne Knowles",
    genre: "Nonfiction",
    tags: ["New"],
    featured: true,
    promoted: true,
    cover: "./covers/B07MNZ4NZG.jpg",
    synopsis: "A practical guide to modern coaching methods, helping readers find solutions, set goals, and build sustainable progress.",
    pressQuotes: [
      "Clear, warm guidance that makes coaching feel actionable and human."
    ],
    trailer: "https://youtu.be/yfPIYXm5JDw",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Positive-Psychology-Coaching-Introducing-Solutions-ebook/dp/B07MNZ4NZG?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9._w2JkYpRBfMTn6a9phHZleeVECuqVUY-KOWhwHgaYc9FHIayoAvkuyUm8j2QTXJo.ewByjQOQogP-e1H_EWix-3MamzHg1XynzzafPZIRhno&dib_tag=AUTHOR" }
    ]
  },
  {
    id: "B0FYHXSMXD",
    title: "KING'S BUREAU OF INVESTIGATION: Homeland Security Force",
    author: "Geoffrey O'Farrell",
    genre: "Thriller",
    tags: ["New"],
    featured: true,
    promoted: true,
    cover: "./covers/B0FYHXSMXD.jpg",
    synopsis: "A British spy thriller of terrorism and psychological warfare, where loyalty and truth blur and every move can cost lives.",
    pressQuotes: [],
    trailer: "https://youtu.be/58PgTjwxWY0",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Kings-Bureau-Investigation-Homeland-Security/dp/B0FYHXSMXD" }
    ]
  },
  {
    id: "1639374663",
    title: "English Grammar: Learning at Lightning Speed",
    author: "Okon Attah",
    genre: "Education",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1639374663.jpg",
    synopsis: "A focused, introductory grammar guide that trims the fluff and highlights what's most useful, built as a springboard for deeper study so you can learn faster.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/English-Grammar-Learning-Lightning-Speed/dp/1639374663" }
    ]
  },
  {
    id: "1973833204",
    title: "Amos The Gifted",
    author: "Wilbur Shapiro",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1973833204.jpg",
    synopsis: "Abandoned by his father and raised by a fiercely determined mother, Amos grows up in a New Hampshire farming community and pushes toward the calling he believes he was born for.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/-/es/Amos-Gifted-Mr-Wilbur-Shapiro/dp/1973833204" }
    ]
  },
  {
    id: "9798893412123",
    title: "The Second World War as Experienced by a British Schoolboy",
    author: "Douglas M. Gebbie",
    genre: "History",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/9798893412123.jpg",
    synopsis: "A WWII memoir seen through a schoolboy's eyes, following Douglas and his family in Yorkshire as rationing, shortages, and air raids reshape everyday life.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/-/zh_TW/Douglas-M-Gebbie/dp/B0DJTZ6JJG" }
    ]
  },
  {
    id: "9798887290683",
    title: "The Adventures of Morag and Willow",
    author: "Douglas M. Gebbie",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/9798887290683.jpg",
    synopsis: "Two dogs with very different pasts share their stories, observe human quirks, and stumble into adventures that quietly teach big lessons about life and friendship.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Adventures-Morag-Willow-Douglas-Gebbie/dp/B0C1MKQ5GS" }
    ]
  },
  {
    id: "9798890278111",
    title: "More Adventures of Morag and Willow",
    author: "Douglas M. Gebbie",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/9798890278111.jpg",
    synopsis: "Morag and Willow return for more talking-dog mischief and heartfelt lessons, deepening their bond as they navigate the oddities of the human world.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.it/More-Adventures-Morag-Willow-English-ebook/dp/B0CVLC4CGP" }
    ]
  },
  {
    id: "1957208384",
    title: "Think About These Things: The Heavenly Mind",
    author: "Tom Kingery",
    genre: "Faith",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1957208384.jpg",
    synopsis: "A reflective Christian guide on the power of thoughts, inviting readers to examine the mind, confront temptation, and pursue a heavenly mindset that shapes everyday living.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Think-about-These-Things-Heavenly/dp/1957208384" }
    ]
  },
  {
    id: "1973675757",
    title: "Supplement Your Faith: A Pathway to Integrity",
    author: "Tom Kingery",
    genre: "Faith",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1973675757.jpg",
    synopsis: "A discipleship-focused walk through spiritual growth after salvation, urging believers to build integrity through sanctifying grace and practical, faith-forward living.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Supplement-Your-Faith-Pathway-Integrity/dp/1973675757" }
    ]
  },
  {
    id: "1639373756",
    title: "She Could Be You",
    author: "Margaret Joeline Brinson",
    genre: "Poetry",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1639373756.jpg",
    synopsis: "A poetry collection that turns everyday emotions into verse, touching on love, injustice, resilience, mortality, and the human hunger for peace and belonging.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/She-Could-Margaret-Joeline-Brinson/dp/1639373756" }
    ]
  },
  {
    id: "1546215107",
    title: "Little A: The Dreamer",
    author: "John Chipley",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1546215107.jpg",
    synopsis: "A children's story about Little A, a curious dreamer whose imagination and real-world challenges push him to learn, grow, and keep hoping.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Little-Dreamer-John-Chipley/dp/1546215107" }
    ]
  },
  {
    id: "1647536634",
    title: "Little A and the Womack",
    author: "John Chipley",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1647536634.jpg",
    synopsis: "Little A faces new tests and lessons as he navigates tough situations and relationships, another chapter in a series built around courage, choices, and growing up.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Little-Womack-John-Chipley/dp/1647536634" }
    ]
  },
  {
    id: "1546268103",
    title: "Little A and Uncle Thomas",
    author: "John Chipley",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1546268103.jpg",
    synopsis: "Little A's world expands through family and guidance, mixing kid-friendly adventure with lessons about character, respect, and doing the right thing.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Little-Uncle-Thomas-John-Chipley/dp/1546268103" }
    ]
  },
  {
    id: "1684862434",
    title: "Little A and Please, Help Me: An African American Boy's Cry",
    author: "John Chipley",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1684862434.jpg",
    synopsis: "A heartfelt story centered on a boy's plea to be seen and protected, balancing pain and hope while spotlighting the realities kids can face.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Little-Please-Help-Me-American/dp/1684862434" }
    ]
  },
  {
    id: "1962142221",
    title: "The Pearl Drop Killer",
    author: "Joshua Quentin Hawk",
    genre: "Mystery & Thriller",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1962142221.jpg",
    synopsis: "A crime thriller where a brutal killer leaves a signature calling card, pulling investigators into a tense chase through clues, suspects, and escalating danger.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Pearl-Drop-Joshua-Quentin-Hawk/dp/1962142221" }
    ]
  },
  {
    id: "1546273360",
    title: "The Lost Outpost",
    author: "Joshua Quentin Hawk",
    genre: "Science Fiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1546273360.jpg",
    synopsis: "In the year 2241, advanced satellites uncover a mysterious outpost on the Moon, triggering a high-stakes mission as the future of Earth hangs in the balance.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Lost-Outpost-JOSHUA-QUENTIN-HAWK/dp/1546273360" }
    ]
  },
  {
    id: "1665592303",
    title: "Vlad: The Dark Prince",
    author: "Colin Martin",
    genre: "Historical Fiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1665592303.jpg",
    synopsis: "A historical narrative that revisits Vlad III's violent era in Wallachia, framing the Dark Prince as a complex figure shaped by war, power, and survival.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Vlad-Dark-Prince-Colin-Martin/dp/1665592303" }
    ]
  },
  {
    id: "1475956932",
    title: "We'll All Die as Marines",
    author: "Jim Bathurst",
    genre: "Memoir",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1475956932.jpg",
    synopsis: "A hard-hitting, personal look at Marine life and the cost of service, built from lived experience, dark humor, and the mindset that keeps people moving forward.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Well-All-Die-Marines-Journey/dp/1475956932" }
    ]
  },
  {
    id: "1982215054",
    title: "Freda and Todd Find Each Other",
    author: "Dr. Clare Z",
    genre: "Romance",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1982215054.jpg",
    synopsis: "A tender, fate-tinged romance about two souls drawn together, blending love, mystery, and the question of whether some connections are meant to return.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Freda-Todd-Find-Each-Other/dp/1982215054" }
    ]
  },
  {
    id: "1664233458",
    title: "Rooted by the Water",
    author: "Shannon Kenley Hinson",
    genre: "Faith",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1664233458.jpg",
    synopsis: "A faith-centered story of being planted, tested, and renewed, using the imagery of water and roots to explore resilience, hope, and spiritual growth.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Rooted-Water-Shannon-Kenley-Hinson/dp/1664233458" }
    ]
  },
  {
    id: "1477118748",
    title: "The Tale of Inkey Pinkey Forest",
    author: "Helen Ridling",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1477118748.jpg",
    synopsis: "A whimsical children's adventure that invites young readers into the Inkey Pinkey Forest, where imagination leads the way and surprises wait in the trees.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Tale-Inkey-Pinkey-Forest/dp/1477118748" }
    ]
  },
  {
    id: "1728380200",
    title: "Chocolate Verselets: Poems",
    author: "Priscilla Mulenga Campbell",
    genre: "Poetry",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1728380200.jpg",
    synopsis: "Bite-sized poems meant to be savored, mixing sweetness and bite as they reflect on love, struggle, memory, and everyday moments.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Chocolate-Verselets-Priscilla-Mulenga-Campbell/dp/1728380200" }
    ]
  },
  {
    id: "1742845401",
    title: "Cockabloodytoo",
    author: "Jay Arbee",
    genre: "Thriller",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1742845401.jpg",
    synopsis: "A fast, cheeky thriller that follows an Australian protagonist into a dangerous tangle of crime and chaos, equal parts grit, humor, and momentum.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/-/zh_TW/Jay-Arbee/dp/1742845401" }
    ]
  },
  {
    id: "1736763857",
    title: "Can't See Around Corners",
    author: "Josie Townsend",
    genre: "Thriller",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1736763857.jpg",
    synopsis: "A suspense-driven novel about how one decision can ripple into the next, keeping tension high as secrets, consequences, and uncertainty close in.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Cant-Around-Corners-Josie-Townsend/dp/1736763857" }
    ]
  },
  {
    id: "0968497608",
    title: "Broken Wings: A Flight Attendant's Journey",
    author: "H. Nattanya Andersen",
    genre: "Memoir",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/0968497608.jpg",
    synopsis: "After surviving an in-flight engine explosion, a senior flight attendant battles PTSD and corporate denial, then pulls back the curtain on hidden health hazards of modern air travel.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Broken-Wings-Flight-Attendants-Journey/dp/0968497608" }
    ]
  },
  {
    id: "0968497659",
    title: "The Post Traumatic Stress Disorder Fallacy",
    author: "H. Nattanya Andersen",
    genre: "Nonfiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/0968497659.jpg",
    synopsis: "A provocative, research-driven memoir and critique that argues PTSD treatment can be harmful, grounded in the author's survival story and her fight to reclaim sanity and agency.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Post-Traumatic-Stress-Disorder-Fallacy/dp/0968497659" }
    ]
  },
  {
    id: "0968497675",
    title: "Serving Evil: The PTSD & ADHD Fallacy (Book 2)",
    author: "H. Nattanya Andersen",
    genre: "Nonfiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/0968497675.jpg",
    synopsis: "Book two of the series, a personal and researched deep dive into PTSD, describing institutional pressure, survival, and the risks of blind trust in systems that claim to help.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Serving-Evil-PTSD-ADHD-Fallacy/dp/0968497675" }
    ]
  },
  {
    id: "9798998658228",
    title: "It's All Connected: An Interactive Leadership and Healing Journey Through the Chakras",
    author: "Jessica Boots / Jenna Zakrajsek",
    genre: "Leadership",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/9798998658228.jpg",
    synopsis: "Part story, part journal, part leadership and wellness guide, an interactive journey through the seven chakras with reflection prompts and practices to help you lead from a more grounded self.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Its-All-Connected-Interactive-Leadership/dp/B0F7NZGY96" }
    ]
  },
  {
    id: "0646846043",
    title: "It's All Connected",
    author: "Missee Nelligan / Marija Hall",
    genre: "Motivation",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/0646846043.jpg",
    synopsis: "A compilation described as three books in one, gathering uplifting, motivational pieces including titles like You Are Your Happiness, Smile For You, and Don't Stop.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Its-All-Connected-Missee-Nelligan/dp/0646846043" }
    ]
  },
  {
    id: "0971100543",
    title: "It's All Connected: A Comprehensive Guide to Global Issues and Sustainable Solutions",
    author: "Benjamin & Gilda Wheeler / Wendy Church",
    genre: "Education",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/0971100543.jpg",
    synopsis: "An educational introduction to major global challenges, linking issues like population, food and water, and energy to practical, sustainability-minded solutions.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Its-All-Connected-Comprehensive-Sustainable/dp/0971100543" }
    ]
  },
  {
    id: "1984559974",
    title: "Five Things I've Learned About Life from Working in a Nursing Home",
    author: "Ana Lydia Peeks",
    genre: "Nonfiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1984559974.jpg",
    synopsis: "A reflective, non-clinical look at aging, structured as five jewels drawn from nursing-home work with metaphors and questions meant to spark personal insight.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Things-Learned-About-Working-Nursing/dp/1984559974" }
    ]
  },
  {
    id: "1796070211",
    title: "Traveling With Words: Off the Familiar Path: the End of a Journey",
    author: "Ana Lydia Peeks",
    genre: "Nonfiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1796070211.jpg",
    synopsis: "A travel-and-reflection narrative that uses places and language as mirrors, capturing what changes when you step off the familiar path.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Traveling-Words-Familiar-Path-Journey/dp/1796070211" }
    ]
  },
  {
    id: "1796027936",
    title: "Kenji and Ice Cream Are on the Move!",
    author: "Ana Lydia Peeks",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "./covers/1796027936.jpg",
    synopsis: "A lively children's tale that follows Kenji and ice cream on the go, celebrating curiosity, movement, and small adventures with big smiles.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Kenji-Ice-Cream-Move-Extraordinary/dp/1796027936" }
    ]
  }
];

const TAGS = ["All", "New", "Bestseller", "Promoted"];

const state = {
  search: "",
  genre: "All",
  tag: "All"
};

const byId = (id) => document.getElementById(id);

const el = {
  featuredTrack: byId("featuredTrack"),
  featPrev: byId("featPrev"),
  featNext: byId("featNext"),
  searchInput: byId("searchInput"),
  genreSelect: byId("genreSelect"),
  tagRow: byId("tagRow"),
  bookGrid: byId("bookGrid"),
  resultsCount: byId("resultsCount"),
  booksPrev: byId("booksPrev"),
  booksNext: byId("booksNext"),
  booksSection: byId("books"),
  bookModal: byId("bookModal"),
  modalCover: byId("modalCover"),
  modalTitle: byId("modalTitle"),
  modalMeta: byId("modalMeta"),
  modalSynopsis: byId("modalSynopsis"),
  modalTags: byId("modalTags"),
  modalQuotes: byId("modalQuotes"),
  modalLinks: byId("modalLinks"),
  modalTrailer: byId("modalTrailer"),
  modalTag: byId("modalTag"),
  newsletterForm: byId("newsletterForm"),
  newsletterEmail: byId("newsletterEmail")
};

function unique(arr){
  return [...new Set(arr)];
}

function scrollToBooks(){
  if (el.booksSection){
    el.booksSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getGenres(){
  return ["All", ...unique(BOOKS.map(b => b.genre)).sort((a,b) => a.localeCompare(b))];
}

function matchesSearch(book){
  if (!state.search) return true;
  const hay = `${book.title} ${book.author} ${book.id} ${book.genre}`.toLowerCase();
  return hay.includes(state.search);
}

function matchesTag(book){
  if (state.tag === "All") return true;
  if (state.tag === "Promoted") return book.promoted;
  return (book.tags || []).includes(state.tag);
}

function filteredBooks(){
  return BOOKS.filter(book => {
    if (state.genre !== "All" && book.genre !== state.genre) return false;
    if (!matchesTag(book)) return false;
    if (!matchesSearch(book)) return false;
    return true;
  });
}

function renderGenres(){
  const genres = getGenres();
  el.genreSelect.innerHTML = "";
  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    el.genreSelect.appendChild(option);
  });
}

function renderTags(){
  el.tagRow.innerHTML = "";
  TAGS.forEach(tag => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chip${state.tag === tag ? " chip--active" : ""}`;
    btn.textContent = tag;
    btn.addEventListener("click", () => {
      state.tag = tag;
      render(true);
    });
    el.tagRow.appendChild(btn);
  });
}

function renderFeatured(){
  const featured = BOOKS.filter(b => b.featured);
  el.featuredTrack.innerHTML = "";

  featured.forEach(book => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card__media">
        <img src="${book.cover}" alt="${book.title} cover" loading="eager" referrerpolicy="no-referrer" />
      </div>
      <div class="card__meta">${book.genre} • ${book.author}</div>
      <h3>${book.title}</h3>
      <div class="card__actions">
        <button class="btn btn--ghost" type="button" data-open-book="${book.id}">View</button>
        ${book.buyLinks[0] ? `<a class="btn btn--solid" href="${book.buyLinks[0].url}" target="_blank" rel="noreferrer">Buy</a>` : ""}
      </div>
    `;
    el.featuredTrack.appendChild(card);
  });
}

function renderBooks(shouldScroll = false){
  const list = filteredBooks();
  const total = list.length;

  el.bookGrid.innerHTML = "";
  el.resultsCount.textContent = `${total} result${total === 1 ? "" : "s"}`;

  if (!total){
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<p class="muted">No matches. Try a different search or genre.</p>`;
    el.bookGrid.appendChild(empty);
    return;
  }

  list.forEach(book => {
    const card = document.createElement("article");
    card.className = "card";

    const tag = book.promoted ? `<span class="tag tag--promoted">Promoted</span>` : (book.tags?.[0] ? `<span class="tag">${book.tags[0]}</span>` : "");

    card.innerHTML = `
      <div class="card__media">
        <img src="${book.cover}" alt="${book.title} cover" loading="eager" referrerpolicy="no-referrer" />
      </div>
      <div class="card__meta">${book.author} • ${book.genre}</div>
      <h3>${book.title}</h3>
      ${tag}
      <p class="muted">${book.synopsis}</p>
      <div class="card__actions">
        <button class="btn btn--ghost" type="button" data-open-book="${book.id}">View details</button>
        ${book.buyLinks[0] ? `<a class="btn btn--solid" href="${book.buyLinks[0].url}" target="_blank" rel="noreferrer">Buy</a>` : ""}
      </div>
    `;
    el.bookGrid.appendChild(card);
  });

  if (shouldScroll) {
    scrollToBooks();
    el.bookGrid.scrollTo({ left: 0, behavior: "smooth" });
  }
}

function openBookModal(book){
  el.modalCover.src = book.cover;
  el.modalCover.alt = `${book.title} cover`;
  el.modalCover.referrerPolicy = "no-referrer";
  el.modalTag.textContent = book.promoted ? "Promoted" : (book.tags?.[0] || "Featured");
  el.modalTitle.textContent = book.title;
  el.modalMeta.textContent = `${book.author} • ${book.genre} • ${book.id}`;
  el.modalSynopsis.textContent = book.synopsis;

  el.modalTags.innerHTML = "";
  [book.genre, ...(book.tags || [])].forEach(tag => {
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = tag;
    el.modalTags.appendChild(span);
  });

  el.modalQuotes.innerHTML = "";
  (book.pressQuotes || []).forEach(q => {
    const p = document.createElement("p");
    p.textContent = `“${q}”`;
    el.modalQuotes.appendChild(p);
  });

  el.modalLinks.innerHTML = "";
  (book.buyLinks || []).forEach(link => {
    const a = document.createElement("a");
    a.className = "btn btn--solid";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noreferrer";
    a.textContent = link.label;
    el.modalLinks.appendChild(a);
  });

  if (book.trailer){
    el.modalTrailer.href = book.trailer;
    el.modalTrailer.style.display = "inline-flex";
  } else {
    el.modalTrailer.style.display = "none";
  }

  el.bookModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(modal){
  modal.hidden = true;
  document.body.style.overflow = "";
}

function bindModal(modal){
  modal.querySelectorAll("[data-close]").forEach(btn => {
    btn.addEventListener("click", () => closeModal(modal));
  });
}

function render(shouldScroll = false){
  renderTags();
  renderBooks(shouldScroll);
}

function wire(){
  renderGenres();
  renderFeatured();
  render();

  el.searchInput.addEventListener("input", () => {
    state.search = el.searchInput.value.trim().toLowerCase();
    renderBooks(true);
  });

  el.genreSelect.addEventListener("change", () => {
    state.genre = el.genreSelect.value;
    renderBooks(true);
  });

  if (el.booksPrev && el.booksNext){
    const scrollByAmount = () => Math.max(280, Math.floor(el.bookGrid.clientWidth * 0.8));
    el.booksPrev.addEventListener("click", () => {
      el.bookGrid.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
    });
    el.booksNext.addEventListener("click", () => {
      el.bookGrid.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
    });
  }

  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("[data-open-book]");
    if (!button) return;
    const book = BOOKS.find(b => b.id === button.dataset.openBook);
    if (book) openBookModal(book);
  });

  bindModal(el.bookModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape"){
      if (!el.bookModal.hidden) closeModal(el.bookModal);
      // only book modal is active now
    }
  });

  el.newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = el.newsletterEmail.value.trim();
    el.newsletterEmail.value = "";
    if (email){
      alert("Thanks for subscribing. Watch your inbox for updates.");
    }
  });

  el.featPrev.addEventListener("click", () => {
    el.featuredTrack.scrollBy({ left: -320, behavior: "smooth" });
  });
  el.featNext.addEventListener("click", () => {
    el.featuredTrack.scrollBy({ left: 320, behavior: "smooth" });
  });
}

wire();
