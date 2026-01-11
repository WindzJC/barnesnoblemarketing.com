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
      { label: "Press release", url: "https://www.prleap.com/pr/290728/south-burlington-vt-author-publishes-suspense-novel" }
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
      { label: "Buy on Amazon", url: "https://www.amazon.com/Positive-Psychology-Coaching-Introducing-Solutions-ebook/dp/B07MNZ4NZG" }
    ]
  },
  {
    id: "okon-attah-grammar",
    title: "English Grammar: Learning At Lightning Speed",
    author: "Okon Attah",
    genre: "Education",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://bookstore.dorrancepublishing.com/cdn/shop/products/AttahO_front_cover__25433.1649850186.1280.1280_160x.jpg?v=1708989158",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "amos-the-gifted",
    title: "Amos The Gifted",
    author: "Wilbur Shapiro",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://m.media-amazon.com/images/I/417J5meR3IL._SY445_SX342_.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "second-world-war-schoolboy",
    title: "The Second World War as Experienced by a British Schoolboy",
    author: "Dr. Douglas M. Gebbie",
    genre: "History",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://bookstore.dorrancepublishing.com/cdn/shop/files/thesecondworldwarasexperience_160x.jpg?v=1725052279",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "morag-and-willow",
    title: "The Adventures Of Morag And Willow",
    author: "Dr. Douglas M. Gebbie",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://bookstore.dorrancepublishing.com/cdn/shop/products/theadventuresofmorageandwillow__36038.1684253117.1280.1280_160x.jpg?v=1709009587",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "more-morag-and-willow",
    title: "More Adventures Of Morag And Willow",
    author: "Dr. Douglas M. Gebbie",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://bookstore.dorrancepublishing.com/cdn/shop/products/moreadventuresofmoragandwillow__86793.1706045278.1280.1280_160x.jpg?v=1709021783",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "she-could-be-you",
    title: "She Could Be You",
    author: "Margaret Joeline Brinson",
    genre: "Fiction",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://bookstore.dorrancepublishing.com/cdn/shop/products/brinson_front__31196.1657127107.1280.1280_160x.jpg?v=1708993116",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "cockabloodytoo",
    title: "Cockabloodytoo",
    author: "Jay Arbee",
    genre: "Fiction",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://books.google.com.sg/books/publisher/content?id=BG0mDQAAQBAJ&img=1&imgtk=AFLRE71pVwfCZXoirNfVFelbYL2NNUKQ-itL5F0nGBTkfIEbO8wHrU5i6LQAgz_8EvAzLJ6AMqrXHM5ldy0OdIOOhLNI_pJbWoPeqi6XXuD_dWLj9tXqxRKMob3rQwI8h8TOrX_rwIdW&printsec=frontcover&zoom=1",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "little-a-dreamer",
    title: "Little A: The Dreamer",
    author: "John Chipley",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://images2.medimops.eu/product/c623ad/M01546215107-large.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "little-a-womack",
    title: "Little A and the Womack",
    author: "John Chipley",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://images2.medimops.eu/product/84efe5/M01647536634-large.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "little-a-uncle-thomas",
    title: "Little A and Uncle Thomas",
    author: "John Chipley",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://images2.medimops.eu/product/4d0688/M0154626809X-large.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "little-a-please-talk",
    title: "Little A, Please, We have to talk! An African American Boy's Cry",
    author: "John Chipley",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://m.media-amazon.com/images/I/91QmGT-Y4KL._SL1500_.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "vlad-dark-prince",
    title: "Vlad: the Dark Prince",
    author: "Colin Martin",
    genre: "Fantasy",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://colinmartinbooks.wordpress.com/wp-content/uploads/2022/08/vtdp_book_cover.jpg?w=640",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "well-all-die-marines",
    title: "We'll All Die as Marines",
    author: "Jim Bathurst",
    genre: "Memoir",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://i0.wp.com/wellalldieasmarines.net/wp-content/uploads/2021/09/Front-page-001-1-1-scaled.jpg?resize=212%2C315&ssl=1",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
  },
  {
    id: "freda-and-todd",
    title: "Freda and Todd Find Each Other",
    author: "Dr. Clare Z",
    genre: "Children's",
    tags: ["Promoted"],
    featured: true,
    promoted: true,
    cover: "https://images2.medimops.eu/product/7b9e66/M01982215054-large.jpg",
    synopsis: "Client title showcased in our portfolio.",
    pressQuotes: [],
    trailer: "",
    buyLinks: []
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
  loginModal: byId("loginModal"),
  loginForm: byId("loginForm"),
  loginNote: byId("loginNote"),
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
  bindModal(el.loginModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape"){
      if (!el.bookModal.hidden) closeModal(el.bookModal);
      if (!el.loginModal.hidden) closeModal(el.loginModal);
    }
  });

  ["loginBtn", "loginBtnAlt", "loginBtnContact"].forEach(id => {
    const btn = byId(id);
    if (!btn) return;
    btn.addEventListener("click", () => {
      el.loginModal.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  el.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    el.loginNote.textContent = "Thanks! We sent you a secure login link.";
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
