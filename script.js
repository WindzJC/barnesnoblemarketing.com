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
    cover: "https://m.media-amazon.com/images/I/61je2PUcx5L._SY466_.jpg",
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
    cover: "https://m.media-amazon.com/images/I/71gnhVIdeCL._SY466_.jpg",
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
    cover: "https://covers.openlibrary.org/b/isbn/9798272006370-L.jpg",
    synopsis: "A high-stakes investigation with decisive pacing and a bold mission at the center.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1639374663-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1973833204-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/-/es/Amos-Gifted-Mr-Wilbur-Shapiro/dp/1973833204" }
    ]
  },
  {
    id: "9798893412123",
    title: "The Second World War as Experienced by a British Schoolboy",
    author: "Dr. Douglas M. Gebbie",
    genre: "History",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/9798893412123-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/-/zh_TW/Douglas-M-Gebbie/dp/B0DJTZ6JJG" }
    ]
  },
  {
    id: "9798887290683",
    title: "The Adventures of Morag and Willow",
    author: "Dr. Douglas M. Gebbie",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/9798887290683-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Adventures-Morag-Willow-Douglas-Gebbie/dp/B0C1MKQ5GS" }
    ]
  },
  {
    id: "9798890278111",
    title: "More Adventures of Morag and Willow",
    author: "Dr. Douglas M. Gebbie",
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/9798890278111-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1957208384-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1973675757-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    genre: "Fiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/1639373756-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1546215107-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1647536634-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1546268103-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1684862434-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1962142221-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1546273360-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    genre: "Fantasy",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/1665592303-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1475956932-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    genre: "Children's",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/1982215054-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    genre: "Poetry",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/1664233458-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1477118748-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    cover: "https://covers.openlibrary.org/b/isbn/1728380200-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    genre: "Fiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/1742845401-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
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
    genre: "Fiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/1736763857-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Cant-Around-Corners-Josie-Townsend/dp/1736763857" }
    ]
  },
  {
    id: "0968497608",
    title: "Broken Wings",
    author: "Nattanya Andersen",
    genre: "Memoir",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/0968497608-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Broken-Wings-Flight-Attendants-Journey/dp/0968497608" }
    ]
  },
  {
    id: "0968497659",
    title: "The Post Traumatic Stress Disorder Fallacy",
    author: "Nattanya Andersen",
    genre: "Nonfiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/0968497659-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Post-Traumatic-Stress-Disorder-Fallacy/dp/0968497659" }
    ]
  },
  {
    id: "0968497675",
    title: "Serving Evil",
    author: "Nattanya Andersen",
    genre: "Nonfiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/0968497675-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Serving-Evil-PTSD-ADHD-Fallacy/dp/0968497675" }
    ]
  },
  {
    id: "9798998658228",
    title: "It's All Connected",
    author: "Boots / Zakrajsek",
    genre: "Business",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/9798998658228-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Its-All-Connected-Interactive-Leadership/dp/B0F7NZGY96" }
    ]
  },
  {
    id: "1984559974",
    title: "Five Things I've Learned About Working in Nursing",
    author: "Ana Lydia Peeks",
    genre: "Nonfiction",
    tags: [],
    featured: false,
    promoted: false,
    cover: "https://covers.openlibrary.org/b/isbn/1984559974-L.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: [
      { label: "Buy on Amazon", url: "https://www.amazon.com/Things-Learned-About-Working-Nursing/dp/1984559974" }
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
      render();
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
        <img src="${book.cover}" alt="${book.title} cover" loading="lazy" />
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

function renderBooks(){
  const list = filteredBooks();
  el.bookGrid.innerHTML = "";
  el.resultsCount.textContent = `${list.length} result${list.length === 1 ? "" : "s"}`;

  if (!list.length){
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
        <img src="${book.cover}" alt="${book.title} cover" loading="lazy" />
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
}

function openBookModal(book){
  el.modalCover.src = book.cover;
  el.modalCover.alt = `${book.title} cover`;
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

function render(){
  renderTags();
  renderBooks();
}

function wire(){
  renderGenres();
  renderFeatured();
  render();

  el.searchInput.addEventListener("input", () => {
    state.search = el.searchInput.value.trim().toLowerCase();
    renderBooks();
  });

  el.genreSelect.addEventListener("change", () => {
    state.genre = el.genreSelect.value;
    renderBooks();
  });

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
