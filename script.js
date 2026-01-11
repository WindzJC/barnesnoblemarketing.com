

const BOOKS = [
  {
    id: "9780001",
    title: "Skyward Atlas",
    author: "M. Reyes",
    price: 499,
    format: "Paperback",
    language: "English",
    category: "Fiction",
    tags: ["Bestseller"],
    available: true,
    popularity: 98,
    releaseDate: "2025-11-02",
    cover: "https://images-us.bookshop.org/ingram/9780062316097.jpg" // replace
  },
  {
    id: "9780002",
    title: "Manila After Dark",
    author: "A. Santos",
    price: 599,
    format: "Hardcover",
    language: "English",
    category: "Mystery & Thriller",
    tags: ["New"],
    available: true,
    popularity: 87,
    releaseDate: "2025-12-15",
    cover: "https://images-us.bookshop.org/ingram/9780593652886.jpg" // replace
  },
  {
    id: "9780003",
    title: "Komiks Classics Vol. 1",
    author: "Various",
    price: 399,
    format: "Paperback",
    language: "Filipino",
    category: "Comics & Graphic Novels",
    tags: ["Staff Pick"],
    available: false,
    popularity: 72,
    releaseDate: "2024-08-20",
    cover: "https://images-us.bookshop.org/ingram/9781302950915.jpg" // replace
  },
  {
    id: "9780004",
    title: "Tiny Habits, Big Results",
    author: "J. Lim",
    price: 450,
    format: "Paperback",
    language: "English",
    category: "Self-Help",
    tags: ["Trending"],
    available: true,
    popularity: 91,
    releaseDate: "2025-09-10",
    cover: "https://images-us.bookshop.org/ingram/9780735211292.jpg" // replace
  },
  {
    id: "9780005",
    title: "Shinkansen Days (Vol. 3)",
    author: "K. Arai",
    price: 520,
    format: "Manga",
    language: "Japanese",
    category: "Manga",
    tags: ["New"],
    available: true,
    popularity: 79,
    releaseDate: "2025-10-01",
    cover: "https://images-us.bookshop.org/ingram/9781974736281.jpg" // replace
  },
  {
    id: "9780006",
    title: "Philippine History: A Compact Guide",
    author: "L. Dela Cruz",
    price: 650,
    format: "Hardcover",
    language: "English",
    category: "History",
    tags: ["Staff Pick"],
    available: true,
    popularity: 84,
    releaseDate: "2023-05-07",
    cover: "https://images-us.bookshop.org/ingram/9780143127741.jpg" // replace
  },
];

// ---------- helpers ----------
const peso = (n) => `₱${Number(n || 0).toLocaleString("en-PH")}`;
const byId = (id) => document.getElementById(id);

function uniq(arr) { return [...new Set(arr)]; }
function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }
function parseIntSafe(v){
  const x = parseInt(String(v || "").replace(/[^0-9]/g, ""), 10);
  return Number.isFinite(x) ? x : null;
}
function escapeHtml(s){
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ---------- state ----------
const PAGE_SIZE = 20;

const state = {
  q: "",
  tag: null,
  category: "All",
  inStockOnly: false,
  format: "all",
  language: "all",
  minPrice: null,
  maxPrice: null,
  sort: "popular",
  page: 1,
  view: "comfort",
};

// ---------- elements ----------
const el = {
  q: byId("q"),
  clearSearch: byId("clearSearch"),
  sort: byId("sort"),
  resultsMeta: byId("resultsMeta"),
  categories: byId("categories"),
  quickChips: byId("quickChips"),
  grid: byId("grid"),
  pageInfo: byId("pageInfo"),
  prevPage: byId("prevPage"),
  nextPage: byId("nextPage"),
  inStockOnly: byId("inStockOnly"),
  language: byId("language"),
  minPrice: byId("minPrice"),
  maxPrice: byId("maxPrice"),
  applyPrice: byId("applyPrice"),
  resetBtn: byId("resetBtn"),
  activeFilters: byId("activeFilters"),
  statTitles: byId("statTitles"),
  statInStock: byId("statInStock"),
  viewCompact: byId("viewCompact"),
  viewComfort: byId("viewComfort"),
  // cart
  cartBtn: byId("cartBtn"),
  cartCount: byId("cartCount"),
  overlay: byId("overlay"),
  cartDrawer: byId("cartDrawer"),
  closeCart: byId("closeCart"),
  cartItems: byId("cartItems"),
  cartSubtotal: byId("cartSubtotal"),
  cartSub: byId("cartSub"),
  clearCart: byId("clearCart"),
  checkoutBtn: byId("checkoutBtn"),
  // mobile filters
  filtersBtn: byId("filtersBtn"),
  filterSheet: byId("filterSheet"),
  filterSheetBody: byId("filterSheetBody"),
  closeFilters: byId("closeFilters"),
};

const QUICK_CHIPS = [
  { key: "All", label: "All" },
  { key: "Bestseller", label: "Bestsellers" },
  { key: "New", label: "New Releases" },
  { key: "Staff Pick", label: "Staff Picks" },
  { key: "Trending", label: "Trending" },
];

// ---------- cart ----------
const CART_KEY = "jc_books_cart_v1";
function loadCart(){
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "{}"); }
  catch { return {}; }
}
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
function cartCount(cart){ return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartSubtotal(cart){
  let sum = 0;
  for (const [id, qty] of Object.entries(cart)){
    const b = BOOKS.find(x => x.id === id);
    if (b) sum += b.price * qty;
  }
  return sum;
}
function addToCart(id, qty=1){
  const cart = loadCart();
  cart[id] = (cart[id] || 0) + qty;
  saveCart(cart);
  syncCartUI();
}
function setQty(id, qty){
  const cart = loadCart();
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart(cart);
  syncCartUI();
}
function clearCartAll(){
  saveCart({});
  syncCartUI();
}

// ---------- filtering / sorting ----------
function filteredBooks(){
  const q = state.q.trim().toLowerCase();

  let out = BOOKS.filter(b => {
    if (state.category !== "All" && b.category !== state.category) return false;
    if (state.inStockOnly && !b.available) return false;
    if (state.format !== "all" && b.format !== state.format) return false;
    if (state.language !== "all" && b.language !== state.language) return false;
    if (state.minPrice != null && b.price < state.minPrice) return false;
    if (state.maxPrice != null && b.price > state.maxPrice) return false;

    if (q){
      const hay = `${b.title} ${b.author} ${b.id} ${b.category} ${(b.tags||[]).join(" ")}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  if (state.tag){
    out = out.filter(b => (b.tags || []).includes(state.tag));
  }

  out.sort((a,b) => {
    switch(state.sort){
      case "newest": return new Date(b.releaseDate) - new Date(a.releaseDate);
      case "priceAsc": return a.price - b.price;
      case "priceDesc": return b.price - a.price;
      case "titleAsc": return a.title.localeCompare(b.title);
      case "popular":
      default: return (b.popularity||0) - (a.popularity||0);
    }
  });

  return out;
}

function categoriesWithCounts(){
  const cats = uniq(BOOKS.map(b => b.category)).sort((a,b) => a.localeCompare(b));
  const counts = Object.fromEntries(cats.map(c => [c, 0]));

  // counts based on current non-category filters + search + tag
  const q = state.q.trim().toLowerCase();
  for (const b of BOOKS){
    if (state.inStockOnly && !b.available) continue;
    if (state.format !== "all" && b.format !== state.format) continue;
    if (state.language !== "all" && b.language !== state.language) continue;
    if (state.minPrice != null && b.price < state.minPrice) continue;
    if (state.maxPrice != null && b.price > state.maxPrice) continue;

    if (state.tag && !(b.tags || []).includes(state.tag)) continue;

    if (q){
      const hay = `${b.title} ${b.author} ${b.id} ${b.category} ${(b.tags||[]).join(" ")}`.toLowerCase();
      if (!hay.includes(q)) continue;
    }
    counts[b.category] = (counts[b.category] || 0) + 1;
  }
  return { cats, counts };
}

// ---------- render ----------
function renderStats(){
  el.statTitles.textContent = String(BOOKS.length);
  el.statInStock.textContent = String(BOOKS.filter(b => b.available).length);
}

function renderQuickChips(){
  el.quickChips.innerHTML = "";
  QUICK_CHIPS.forEach(ch => {
    const btn = document.createElement("button");
    const activeKey = state.tag || "All";
    btn.className = "chip" + ((ch.key === activeKey) ? " chip--active" : "");
    btn.type = "button";
    btn.textContent = ch.label;
    btn.addEventListener("click", () => {
      state.page = 1;
      state.category = "All";
      state.tag = (ch.key === "All") ? null : ch.key;
      sync();
    });
    el.quickChips.appendChild(btn);
  });
}

function renderCategories(){
  const { cats, counts } = categoriesWithCounts();
  el.categories.innerHTML = "";

  const makeBtn = (name, count) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "catbtn" + ((state.category === name) ? " catbtn--active" : "");
    btn.innerHTML = `<span>${escapeHtml(name)}</span><span class="catmeta">${count}</span>`;
    btn.addEventListener("click", () => {
      state.category = name;
      state.page = 1;
      sync();
    });
    li.appendChild(btn);
    return li;
  };

  const allCount = Object.values(counts).reduce((a,b)=>a+b,0);
  el.categories.appendChild(makeBtn("All", allCount));
  cats.forEach(c => el.categories.appendChild(makeBtn(c, counts[c] || 0)));
}

function renderActiveFilters(){
  const badges = [];

  if (state.tag) badges.push({ label: state.tag, clear: () => { state.tag = null; state.page=1; }});
  if (state.category !== "All") badges.push({ label: state.category, clear: () => { state.category="All"; state.page=1; }});
  if (state.inStockOnly) badges.push({ label: "In stock", clear: () => { state.inStockOnly=false; }});
  if (state.format !== "all") badges.push({ label: state.format, clear: () => { state.format="all"; }});
  if (state.language !== "all") badges.push({ label: state.language, clear: () => { state.language="all"; }});
  if (state.minPrice != null || state.maxPrice != null){
    const a = state.minPrice != null ? peso(state.minPrice) : "Any";
    const b = state.maxPrice != null ? peso(state.maxPrice) : "Any";
    badges.push({ label: `Price ${a}–${b}`, clear: () => { state.minPrice=null; state.maxPrice=null; }});
  }
  if (state.q.trim()) badges.push({ label: `Search: “${state.q.trim()}”`, clear: () => { state.q=""; }});

  el.activeFilters.innerHTML = "";
  badges.slice(0, 10).forEach(b => {
    const div = document.createElement("span");
    div.className = "badge";
    div.innerHTML = `<span>${escapeHtml(b.label)}</span><button type="button" aria-label="Remove filter">×</button>`;
    div.querySelector("button").addEventListener("click", () => { b.clear(); sync(); });
    el.activeFilters.appendChild(div);
  });
}

function renderGrid(){
  const list = filteredBooks();

  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  state.page = clamp(state.page, 1, pages);

  const start = (state.page - 1) * PAGE_SIZE;
  const pageItems = list.slice(start, start + PAGE_SIZE);

  el.resultsMeta.textContent = `${total.toLocaleString("en-PH")} result${total===1?"":"s"}`;
  el.pageInfo.textContent = `Page ${state.page} / ${pages}`;

  el.prevPage.disabled = state.page <= 1;
  el.nextPage.disabled = state.page >= pages;

  el.grid.classList.toggle("compact", state.view === "compact");

  el.grid.innerHTML = "";
  if (!pageItems.length){
    const empty = document.createElement("div");
    empty.className = "panel";
    empty.style.padding = "16px";
    empty.innerHTML = `<div style="color:var(--muted)">No matches. Try widening filters.</div>`;
    el.grid.appendChild(empty);
    return;
  }

  for (const b of pageItems){
    const card = document.createElement("article");
    card.className = "card";

    const ribbon = (b.tags && b.tags[0]) ? `<div class="ribbon">${escapeHtml(b.tags[0])}</div>` : "";
    const avail = b.available ? `<span class="smalltag">In stock</span>` : `<span class="smalltag">Out of stock</span>`;

    card.innerHTML = `
      <div class="card__media">
        ${ribbon}
        <img src="${b.cover}" alt="${escapeHtml(b.title)} cover" loading="lazy" />
      </div>
      <div class="card__body">
        <div class="card__title">${escapeHtml(b.title)}</div>
        <div class="card__meta">by ${escapeHtml(b.author)} • ${escapeHtml(b.format)} • ${escapeHtml(b.category)}</div>
        <div class="price">
          <div class="price__v">${peso(b.price)}</div>
          <div class="price__s">${avail}</div>
        </div>
        <div class="card__actions">
          <button class="quick" type="button" ${b.available ? "" : "disabled"}>QUICK ADD</button>
        </div>
      </div>
    `;

    card.querySelector(".quick").addEventListener("click", () => {
      addToCart(b.id, 1);
      openCart();
    });

    el.grid.appendChild(card);
  }
}

// ---------- cart UI ----------
function syncCartUI(){
  const cart = loadCart();
  const count = cartCount(cart);
  el.cartCount.textContent = String(count);

  const ids = Object.keys(cart);
  el.cartSub.textContent = count ? `${count} item${count===1?"":"s"}` : "Empty";

  el.cartItems.innerHTML = "";
  if (!ids.length){
    el.cartItems.innerHTML = `<div style="color:var(--muted); padding:10px 2px">Your cart is empty.</div>`;
  } else {
    ids.forEach(id => {
      const b = BOOKS.find(x => x.id === id);
      if (!b) return;
      const qty = cart[id];

      const row = document.createElement("div");
      row.className = "cartitem";
      row.innerHTML = `
        <img src="${b.cover}" alt="${escapeHtml(b.title)} cover" />
        <div>
          <div class="cartitem__t">${escapeHtml(b.title)}</div>
          <div class="cartitem__m">${escapeHtml(b.author)} • ${peso(b.price)}</div>
        </div>
        <div class="cartitem__r">
          <div class="qty" aria-label="Quantity">
            <button type="button" aria-label="Decrease">−</button>
            <span class="mono">${qty}</span>
            <button type="button" aria-label="Increase">+</button>
          </div>
          <button class="btn btn--ghost btn--sm" type="button">Remove</button>
        </div>
      `;

      const [decBtn, incBtn] = row.querySelectorAll(".qty button");
      const rmBtn = row.querySelector(".cartitem__r .btn");

      decBtn.addEventListener("click", () => setQty(id, qty - 1));
      incBtn.addEventListener("click", () => setQty(id, qty + 1));
      rmBtn.addEventListener("click", () => setQty(id, 0));

      el.cartItems.appendChild(row);
    });
  }

  el.cartSubtotal.textContent = peso(cartSubtotal(cart));
}

// ---------- dialogs ----------
function openCart(){
  el.overlay.hidden = false;
  el.cartDrawer.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeCart(){
  el.overlay.hidden = true;
  el.cartDrawer.hidden = true;
  document.body.style.overflow = "";
}

function openFilters(){
  // Clone sidebar panels into sheet for mobile
  el.filterSheetBody.innerHTML = "";
  document.querySelectorAll(".sidebar .panel").forEach(p => {
    el.filterSheetBody.appendChild(p.cloneNode(true));
  });

  bindMobileFilterControls();

  el.overlay.hidden = false;
  el.filterSheet.hidden = false;
  document.body.style.overflow = "hidden";
}
function closeFilters(){
  el.overlay.hidden = true;
  el.filterSheet.hidden = true;
  document.body.style.overflow = "";
}

function bindMobileFilterControls(){
  const sheet = el.filterSheetBody;

  const inStock = sheet.querySelector("#inStockOnly");
  const lang = sheet.querySelector("#language");
  const minP = sheet.querySelector("#minPrice");
  const maxP = sheet.querySelector("#maxPrice");
  const applyPriceBtn = sheet.querySelector("#applyPrice");
  const resetBtn = sheet.querySelector("#resetBtn");

  if (inStock) inStock.checked = state.inStockOnly;
  if (lang) lang.value = state.language;
  if (minP) minP.value = state.minPrice ?? "";
  if (maxP) maxP.value = state.maxPrice ?? "";

  const segBtns = [...sheet.querySelectorAll(".seg__btn")];
  segBtns.forEach(b => b.classList.toggle("is-on", b.dataset.format === state.format));

  if (inStock) inStock.addEventListener("change", () => { state.inStockOnly = inStock.checked; state.page=1; sync(); });
  if (lang) lang.addEventListener("change", () => { state.language = lang.value; state.page=1; sync(); });
  if (applyPriceBtn) applyPriceBtn.addEventListener("click", () => {
    state.minPrice = parseIntSafe(minP?.value);
    state.maxPrice = parseIntSafe(maxP?.value);
    state.page=1; sync();
  });
  if (resetBtn) resetBtn.addEventListener("click", () => resetAll());

  segBtns.forEach(b => b.addEventListener("click", () => {
    state.format = b.dataset.format || "all";
    state.page=1; sync();
  }));

  [...sheet.querySelectorAll(".cats .catbtn")].forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.querySelector("span")?.textContent?.trim() || "All";
      state.category = name;
      state.page=1; sync();
    });
  });

  [...sheet.querySelectorAll("#quickChips .chip")].forEach(btn => {
    btn.addEventListener("click", () => {
      const map = {
        "Bestsellers":"Bestseller",
        "New Releases":"New",
        "Staff Picks":"Staff Pick",
        "Trending":"Trending",
        "All":"All"
      };
      const key = map[btn.textContent.trim()] || "All";
      state.page=1;
      state.category = "All";
      state.tag = key === "All" ? null : key;
      sync();
    });
  });
}

// ---------- sync ----------
function resetAll(){
  state.q = "";
  state.tag = null;
  state.category = "All";
  state.inStockOnly = false;
  state.format = "all";
  state.language = "all";
  state.minPrice = null;
  state.maxPrice = null;
  state.sort = "popular";
  state.page = 1;

  el.q.value = "";
  el.inStockOnly.checked = false;
  el.language.value = "all";
  el.minPrice.value = "";
  el.maxPrice.value = "";
  el.sort.value = "popular";

  document.querySelectorAll(".seg__btn").forEach(b => b.classList.remove("is-on"));
  document.querySelector('.seg__btn[data-format="all"]')?.classList.add("is-on");

  sync();
}

function sync(){
  el.inStockOnly.checked = state.inStockOnly;
  el.language.value = state.language;
  el.sort.value = state.sort;

  document.querySelectorAll(".seg__btn").forEach(b => {
    b.classList.toggle("is-on", b.dataset.format === state.format);
  });

  renderQuickChips();
  renderCategories();
  renderActiveFilters();
  renderGrid();
  syncCartUI();
}

function wire(){
  renderStats();
  sync();

  el.q.addEventListener("input", () => {
    state.q = el.q.value;
    state.page = 1;
    sync();
  });

  el.clearSearch.addEventListener("click", () => {
    state.q = "";
    el.q.value = "";
    state.page = 1;
    sync();
  });

  el.sort.addEventListener("change", () => {
    state.sort = el.sort.value;
    state.page = 1;
    sync();
  });

  el.prevPage.addEventListener("click", () => { state.page -= 1; sync(); });
  el.nextPage.addEventListener("click", () => { state.page += 1; sync(); });

  el.inStockOnly.addEventListener("change", () => {
    state.inStockOnly = el.inStockOnly.checked;
    state.page = 1;
    sync();
  });

  el.language.addEventListener("change", () => {
    state.language = el.language.value;
    state.page = 1;
    sync();
  });

  document.querySelectorAll(".seg__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.format = btn.dataset.format || "all";
      state.page = 1;
      sync();
    });
  });

  el.applyPrice.addEventListener("click", () => {
    state.minPrice = parseIntSafe(el.minPrice.value);
    state.maxPrice = parseIntSafe(el.maxPrice.value);
    state.page = 1;
    sync();
  });

  el.resetBtn.addEventListener("click", resetAll);

  el.viewCompact.addEventListener("click", () => { state.view = "compact"; sync(); });
  el.viewComfort.addEventListener("click", () => { state.view = "comfort"; sync(); });

  // cart
  el.cartBtn.addEventListener("click", openCart);
  el.closeCart.addEventListener("click", closeCart);

  el.overlay.addEventListener("click", () => {
    closeCart();
    closeFilters();
  });

  el.clearCart.addEventListener("click", clearCartAll);

  el.checkoutBtn.addEventListener("click", () => {
    const cart = loadCart();
    const ids = Object.keys(cart);
    if (!ids.length) return alert("Cart is empty.");

    const lines = ids.map(id => {
      const b = BOOKS.find(x => x.id === id);
      return `${cart[id]}x ${b?.title || id}`;
    }).join("\n");

    alert(`Demo checkout payload:\n\n${lines}\n\nSubtotal: ${peso(cartSubtotal(cart))}\n\nNext step: wire to Shopify/WooCommerce/PayMongo.`);
  });

  // mobile filters
  el.filtersBtn.addEventListener("click", openFilters);
  el.closeFilters.addEventListener("click", closeFilters);

  // escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeFilters();
    }
  });
}

wire();

