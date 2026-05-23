// --- BOOK DATABASE ---
const BOOKS = [
  {
    id: 1,
    title: "Cybernetic Dreams",
    author: "Elara Vance",
    category: "Bilim Kurgu",
    price: 129.90,
    discountPrice: 99.90,
    rating: 4.8,
    cover: "assets/cover_cyber.png",
    publisher: "Kozmos Yayınları",
    pages: 342,
    year: 2025,
    isbn: "978-605-234-12-1",
    badge: "En Çok Satan",
    badgeType: "hot",
    description: "2088 yılında geçen bu sürükleyici romanda, insan bilincinin tamamen dijitalleştiği bir metropolde kaybolan kimliklerin peşine düşeceksiniz. Siber-bedenler ve insan ruhunun sınırları arasında kurulan bu felsefi polisiye, bilim kurgunun yeni başyapıtı olmaya aday.",
    reviews: [
      { user: "Ahmet Y.", rating: 5, comment: "Harika bir kurgu! Son zamanlarda okuduğum en iyi bilim kurgu kitabı." },
      { user: "Zeynep K.", rating: 4, comment: "Karakter gelişimleri biraz daha derin olabilirdi ama dünya inşası muhteşem." }
    ]
  },
  {
    id: 2,
    title: "Whispers of Nature",
    author: "Elara Vance",
    category: "Doğa & Şiir",
    price: 89.90,
    discountPrice: 74.90,
    rating: 4.6,
    cover: "assets/cover_nature.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 184,
    year: 2024,
    isbn: "978-605-112-98-3",
    badge: "%17 İndirim",
    badgeType: "sale",
    description: "Doğanın fısıltılarını, yaprakların dansını ve rüzgarın hikayelerini şiirsel bir dille anlatan modern bir meditasyon rehberi. Şehir hayatının karmaşasından kaçıp kendi içsel doğasını keşfetmek isteyenler için eşsiz bir başucu eseri.",
    reviews: [
      { user: "Mehmet A.", rating: 5, comment: "Çok huzur verici bir kitap. Her akşam yatmadan birkaç sayfa okuyorum." }
    ]
  },
  {
    id: 3,
    title: "The Silent Epoch",
    author: "Elara Vance",
    category: "Felsefe",
    price: 149.90,
    discountPrice: 119.90,
    rating: 4.9,
    cover: "assets/cover_philosophy.png",
    publisher: "Agora Akademi",
    pages: 412,
    year: 2026,
    isbn: "978-605-885-33-0",
    badge: "Editörün Seçimi",
    badgeType: "hot",
    description: "Sessizliğin felsefi gücü üzerine yazılmış çığır açıcı bir çalışma. Konuşmanın değer kaybettiği modern çağda, sessiz kalmanın, düşünmenin ve dinlemenin varoluşsal boyutlarını antik Yunan'dan modern varoluşçuluğa uzanan bir köprüyle ele alıyor.",
    reviews: [
      { user: "Caner D.", rating: 5, comment: "Modern felsefe adına yazılmış en nitelikli eserlerden biri." },
      { user: "Selin B.", rating: 5, comment: "Derinlemesine analizler ve muazzam bir dil kullanımı." }
    ]
  },
  {
    id: 4,
    title: "Shadows in the Mist",
    author: "Ellen Blackwood",
    category: "Gizem & Gerilim",
    price: 119.90,
    discountPrice: 94.90,
    rating: 4.7,
    cover: "assets/cover_mystery.png",
    publisher: "Kara Kutu Yayınları",
    pages: 298,
    year: 2025,
    isbn: "978-605-776-54-5",
    badge: "Haftanın Kitabı",
    badgeType: "hot",
    description: "Sisli bir Londra sabahında, Thames Nehri kenarında bulunan gizemli bir mektup ve ardı ardına gelen şüpheli kayıplar... Dedektif Arthur'un kariyerinin en karanlık dosyasını çözmeye çalışırken kendi geçmişiyle yüzleşmesini anlatan soluk soluğa bir gerilim.",
    reviews: [
      { user: "Gökhan E.", rating: 5, comment: "Kitabı elinizden bırakamıyorsunuz. Sonu tam bir sürprizdi!" }
    ]
  },
  {
    id: 5,
    title: "Designing Tomorrow",
    author: "Sophie Eldridge",
    category: "Tasarım & Teknoloji",
    price: 179.90,
    discountPrice: 139.90,
    rating: 5.0,
    cover: "assets/cover_future.png",
    publisher: "Piksel Akademi",
    pages: 256,
    year: 2026,
    isbn: "978-605-999-10-8",
    badge: "Yeni Başlayanlar İçin",
    badgeType: "sale",
    description: "Yapay zekanın ve geleceğin tasarım dilinin kesişim noktası. Web 3.0, artırılmış gerçeklik arayüzleri ve kullanıcı deneyimi (UX) trendlerinin önümüzdeki 10 yılı nasıl şekillendireceğine dair kapsamlı ve görsel zenginliği yüksek rehber bir eser.",
    reviews: [
      { user: "Deniz G.", rating: 5, comment: "Tasarımcıların mutlaka okuması gereken vizyoner bir çalışma." }
    ]
  },
  {
    id: 6,
    title: "Neon Horizon",
    author: "Elara Vance",
    category: "Bilim Kurgu",
    price: 115.00,
    discountPrice: 115.00,
    rating: 4.2,
    cover: "assets/cover_cyber.png",
    publisher: "Kozmos Yayınları",
    pages: 310,
    year: 2024,
    isbn: "978-605-234-12-2",
    badge: "",
    badgeType: "",
    description: "Cybernetic Dreams'in dünyasından yepyeni bir hikaye. Neon ışıklarının arkasında saklanan yeraltı organizasyonlarının, yapay zeka hakları savunucularıyla karşı karşıya geldiği distopik bir başkaldırı serüveni.",
    reviews: []
  },
  {
    id: 7,
    title: "Lost in the Forest",
    author: "Marcus Thorne",
    category: "Doğa & Şiir",
    price: 95.00,
    discountPrice: 79.90,
    rating: 4.5,
    cover: "assets/cover_nature.png",
    publisher: "Yeryüzü Kitaplığı",
    pages: 210,
    year: 2023,
    isbn: "978-605-112-98-4",
    badge: "İndirim",
    badgeType: "sale",
    description: "Ormanın kalbine yapılan ruhsal bir yolculuk. Ağaçların iletişim ağlarından kuşların göç rotalarına, yazarın kendi deneyimleriyle harmanladığı lirik ve bilgilendirici doğa anlatısı.",
    reviews: [
      { user: "Derya U.", rating: 4, comment: "Doğa tasvirleri çok başarılı." }
    ]
  },
  {
    id: 8,
    title: "Ages of Reason",
    author: "Elara Vance",
    category: "Felsefe",
    price: 130.00,
    discountPrice: 104.00,
    rating: 4.4,
    cover: "assets/cover_philosophy.png",
    publisher: "Agora Akademi",
    pages: 350,
    year: 2025,
    isbn: "978-605-885-33-1",
    badge: "%20 İndirim",
    badgeType: "sale",
    description: "Aydınlanma çağından günümüze aklın ve mantığın serüveni. Yapay zeka çağında insan aklının hâlâ en büyük güç olup olmadığını sorgulayan kışkırtıcı tezler bütünü.",
    reviews: []
  },
  {
    id: 9,
    title: "Echoes of Silence",
    author: "Ellen Blackwood",
    category: "Gizem & Gerilim",
    price: 145.00,
    discountPrice: 116.00,
    rating: 4.3,
    cover: "assets/cover_mystery.png",
    publisher: "Kara Kutu Yayınları",
    pages: 320,
    year: 2024,
    isbn: "978-605-776-54-6",
    badge: "Tavsiye",
    badgeType: "hot",
    description: "Terk edilmiş bir kasaba hastanesinde geçen, geçmişte kalmış sırlar ve ürpertici yankılarla örülü bir psikolojik gerilim. Karakterlerin zihinsel sınırlarını zorlayan karanlık labirentler.",
    reviews: [
      { user: "Kaan Y.", rating: 4, comment: "Psikolojik analizleri çok beğendim." }
    ]
  },
  {
    id: 10,
    title: "Visual Harmony",
    author: "Sophie Eldridge",
    category: "Tasarım & Teknoloji",
    price: 199.90,
    discountPrice: 159.90,
    rating: 4.9,
    cover: "assets/cover_future.png",
    publisher: "Piksel Akademi",
    pages: 288,
    year: 2025,
    isbn: "978-605-999-10-9",
    badge: "Çok Satan",
    badgeType: "hot",
    description: "Renk teorisi, tipografi dengesi ve yerleşim disiplini üzerine yazılmış zengin bir kaynak. Modern minimalist tasarımların ardındaki matematiksel ve estetik dengeleri açıklıyor.",
    reviews: [
      { user: "Buse T.", rating: 5, comment: "Kitabın kendi tasarımı bile bir sanat eseri!" }
    ]
  }
];

// --- APP STATE ---
let state = {
  cart: [], // [{ id, quantity }]
  wishlist: [], // [id, id]
  activeView: "home", // "home" | "shop" | "about" | "contact"
  currentCategory: "Tümü",
  searchQuery: "",
  maxPrice: 250,
  minRating: [],
  sortBy: "relevance",
  theme: "dark",
  activeDetailBookId: null,
  appliedCoupon: "",
  promoDiscount: 0 // percentage, e.g. 20 for 20%
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadCart();
  loadWishlist();
  setupEventListeners();
  setupRouter();
  setupCountdownTimer();
  renderCatalog();
  renderCart();
  updatePriceFilterLimits();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  const savedTheme = localStorage.getItem("tella-theme") || "dark";
  state.theme = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon();
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", state.theme);
  localStorage.setItem("tella-theme", state.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className = state.theme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}

// --- SPA ROUTER ---
function setupRouter() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetView = link.dataset.view;
      if (targetView) switchView(targetView);
    });
  });

  // Handle logo click to home
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("home");
    });
  }

  // Handle footer links to sections
  document.querySelectorAll(".footer-links a[href='#shop-section']").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("shop");
      // Scroll to shop header
      setTimeout(() => {
        const shopEl = document.getElementById("shop-section");
        if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    });
  });
}

function switchView(viewName) {
  state.activeView = viewName;

  // Toggle active view panel
  const panels = document.querySelectorAll(".view-panel");
  panels.forEach(panel => {
    panel.classList.remove("active");
    if (panel.id === `view-${viewName}`) {
      panel.classList.add("active");
    }
  });

  // Toggle active nav link
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.view === viewName) {
      link.classList.add("active");
    }
  });

  // Scroll to top on switch
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- WISHLIST MANAGEMENT ---
function loadWishlist() {
  const saved = localStorage.getItem("tella-wishlist");
  if (saved) {
    try {
      state.wishlist = JSON.parse(saved);
    } catch (e) {
      state.wishlist = [];
    }
  }
}

function saveWishlist() {
  localStorage.setItem("tella-wishlist", JSON.stringify(state.wishlist));
  renderWishlist();
}

function toggleFavorite(bookId) {
  const index = state.wishlist.indexOf(bookId);
  if (index >= 0) {
    state.wishlist.splice(index, 1);
  } else {
    state.wishlist.push(bookId);
  }
  saveWishlist();
  renderCatalog();
  updateHeaderHeartBadge();
}

function updateHeaderHeartBadge() {
  const badge = document.getElementById("wishlist-badge");
  if (badge) {
    badge.innerText = state.wishlist.length;
    badge.style.display = state.wishlist.length > 0 ? "flex" : "none";
  }
}

function openWishlistModal() {
  const dialog = document.getElementById("wishlist-dialog");
  renderWishlist();
  dialog.showModal();
}

function renderWishlist() {
  const list = document.getElementById("wishlist-items-list");
  updateHeaderHeartBadge();
  
  if (state.wishlist.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding: 2rem; color:var(--text-muted);">
        <i class="far fa-heart" style="font-size:2.5rem; margin-bottom:1rem; display:block;"></i>
        <p>Favori listeniz boş.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = state.wishlist.map(bookId => {
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return "";
    const activePrice = book.discountPrice || book.price;
    return `
      <div class="wishlist-item">
        <img src="${book.cover}" alt="${book.title}">
        <div class="wishlist-info">
          <h4>${book.title}</h4>
          <p>${book.author} | <strong>₺${activePrice.toFixed(2)}</strong></p>
        </div>
        <button class="gradient-btn" onclick="addFromWishlistToCart(${book.id})" style="padding:0.4rem 0.8rem; font-size:0.8rem; border-radius:8px;">
          <i class="fas fa-shopping-bag"></i> Ekle
        </button>
        <button class="close-btn" onclick="toggleFavorite(${book.id})" style="width:30px; height:30px; font-size:0.85rem;" title="Listeden Çıkar">
          <i class="fas fa-trash-alt" style="color:var(--danger)"></i>
        </button>
      </div>
    `;
  }).join("");
}

function addFromWishlistToCart(bookId) {
  addToCart(bookId);
  // Optional: remove from wishlist when adding to cart
  toggleFavorite(bookId);
}

// --- CART STATE MANAGERS ---
function loadCart() {
  const savedCart = localStorage.getItem("tella-cart");
  if (savedCart) {
    try {
      state.cart = JSON.parse(savedCart);
    } catch (e) {
      state.cart = [];
    }
  }
}

function saveCart() {
  localStorage.setItem("tella-cart", JSON.stringify(state.cart));
  renderCart();
}

function addToCart(bookId, quantity = 1) {
  const existing = state.cart.find(item => item.id === bookId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    state.cart.push({ id: bookId, quantity });
  }
  saveCart();
  openCartDrawer();
  
  // Custom micro-animation for the cart badge
  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.classList.remove("pop");
    void badge.offsetWidth; // Trigger reflow
    badge.classList.add("pop");
  }
}

function updateQuantity(bookId, delta) {
  const item = state.cart.find(item => item.id === bookId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.id !== bookId);
    }
    saveCart();
  }
}

function removeFromCart(bookId) {
  state.cart = state.cart.filter(item => item.id !== bookId);
  saveCart();
}

// --- DYNAMIC DIALOG UTILS ---
function openDetailsModal(bookId) {
  const dialog = document.getElementById("book-details-dialog");
  const book = BOOKS.find(b => b.id === bookId);
  if (!book) return;

  state.activeDetailBookId = bookId;

  // Book content binding
  document.getElementById("dialog-cover").src = book.cover;
  document.getElementById("dialog-title").innerText = book.title;
  document.getElementById("dialog-author").innerText = book.author;
  document.getElementById("dialog-publisher").innerText = book.publisher;
  document.getElementById("dialog-pages").innerText = book.pages;
  document.getElementById("dialog-year").innerText = book.year;
  document.getElementById("dialog-isbn").innerText = book.isbn;
  document.getElementById("dialog-desc").innerText = book.description;

  const hasDiscount = book.discountPrice && book.discountPrice < book.price;
  const originalFormatted = `₺${book.price.toFixed(2)}`;
  const discountedFormatted = hasDiscount ? `₺${book.discountPrice.toFixed(2)}` : originalFormatted;

  document.getElementById("dialog-original-price").innerText = hasDiscount ? originalFormatted : "";
  document.getElementById("dialog-current-price").innerText = discountedFormatted;
  
  // Rating stars inside details
  let starsHtml = "";
  const fullStars = Math.floor(book.rating);
  const halfStar = book.rating % 1 >= 0.5;
  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      starsHtml += `<i class="fas fa-star"></i>`;
    } else if (i === fullStars + 1 && halfStar) {
      starsHtml += `<i class="fas fa-star-half-alt"></i>`;
    } else {
      starsHtml += `<i class="far fa-star"></i>`;
    }
  }
  document.getElementById("dialog-rating-stars").innerHTML = starsHtml;
  document.getElementById("dialog-rating-val").innerText = `(${book.rating.toFixed(1)})`;

  // Bind Add to Cart CTA
  const dialogActionBtn = document.getElementById("dialog-add-to-cart-btn");
  const newBtn = dialogActionBtn.cloneNode(true);
  dialogActionBtn.parentNode.replaceChild(newBtn, dialogActionBtn);
  newBtn.addEventListener("click", () => {
    addToCart(book.id);
    dialog.close();
  });

  renderReviews(book);
  dialog.showModal();
}

function renderReviews(book) {
  const reviewsContainer = document.getElementById("reviews-list");
  if (!book.reviews || book.reviews.length === 0) {
    reviewsContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">Bu kitap için henüz yorum yapılmamış. İlk yorumu siz yapın!</p>`;
    return;
  }

  reviewsContainer.innerHTML = book.reviews.map(rev => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += i <= rev.rating ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
    }
    return `
      <div class="review-item">
        <div class="review-header">
          <span class="review-user">${rev.user}</span>
          <span class="stars">${stars}</span>
        </div>
        <p class="review-text">${rev.comment}</p>
      </div>
    `;
  }).join("");
}

function handleAddReview(e) {
  e.preventDefault();
  const userNameInput = document.getElementById("rev-user");
  const userRatingSelect = document.getElementById("rev-rating");
  const userCommentText = document.getElementById("rev-comment");

  const name = userNameInput.value.trim();
  const comment = userCommentText.value.trim();
  const rating = parseInt(userRatingSelect.value);

  if (!name || !comment) {
    alert("Lütfen isim ve yorum alanlarını doldurun.");
    return;
  }

  const book = BOOKS.find(b => b.id === state.activeDetailBookId);
  if (book) {
    if (!book.reviews) book.reviews = [];
    book.reviews.push({ user: name, rating, comment });
    
    // Recalculate book average rating
    const totalScore = book.reviews.reduce((sum, r) => sum + r.rating, 0);
    book.rating = totalScore / book.reviews.length;
    
    renderReviews(book);
    renderCatalog();

    userNameInput.value = "";
    userCommentText.value = "";
    userRatingSelect.value = "5";
  }
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  // Theme Toggle Button
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  // Scroll Header Effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Search Live Query
  const searchInput = document.getElementById("search-input");
  const suggestionsBox = document.getElementById("search-suggestions");
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      state.searchQuery = val;
      // Switch view automatically to shop if user searches from another page
      if (state.activeView !== "shop" && val.trim().length > 0) {
        switchView("shop");
      }
      renderCatalog();
      renderSuggestions(val);
    });
  }

  // Hide suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrapper")) {
      if (suggestionsBox) suggestionsBox.style.display = "none";
    }
  });

  // Cart Drawer open/close
  const cartBtn = document.getElementById("cart-btn");
  if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
  
  const closeCartBtn = document.getElementById("close-cart-btn");
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
  
  const cartBackdrop = document.getElementById("cart-backdrop");
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCartDrawer);

  // Wishlist open/close
  const heartBtn = document.getElementById("wishlist-btn");
  if (heartBtn) heartBtn.addEventListener("click", openWishlistModal);
  
  const closeWishlistBtn = document.getElementById("close-wishlist-btn");
  if (closeWishlistBtn) {
    closeWishlistBtn.addEventListener("click", () => {
      document.getElementById("wishlist-dialog").close();
    });
  }

  // Surprise Recommender Button
  const surpriseBtn = document.getElementById("surprise-btn");
  if (surpriseBtn) surpriseBtn.addEventListener("click", openSurpriseModal);
  
  const surpriseBtnFooter = document.getElementById("surprise-btn-footer");
  if (surpriseBtnFooter) surpriseBtnFooter.addEventListener("click", openSurpriseModal);

  // Sorting
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Price range slider
  const priceSlider = document.getElementById("price-range");
  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      const val = parseFloat(e.target.value);
      state.maxPrice = val;
      document.getElementById("price-val").innerText = `₺${val.toFixed(2)}`;
      renderCatalog();
    });
  }

  // Star ratings filters
  const ratingCheckboxes = document.querySelectorAll(".rating-filter");
  ratingCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const activeRatings = [];
      ratingCheckboxes.forEach(box => {
        if (box.checked) activeRatings.push(parseFloat(box.value));
      });
      state.minRating = activeRatings;
      renderCatalog();
    });
  });

  // Category tags click
  const categoriesContainer = document.getElementById("category-slider");
  if (categoriesContainer) {
    categoriesContainer.addEventListener("click", (e) => {
      const tab = e.target.closest(".category-tab");
      if (!tab) return;
      
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.currentCategory = tab.dataset.category;
      renderCatalog();
    });
  }

  // Dialog Close Event
  const detailsDialog = document.getElementById("book-details-dialog");
  const closeDetails = document.getElementById("close-details-btn");
  if (closeDetails) {
    closeDetails.addEventListener("click", () => detailsDialog.close());
  }

  // Handle Review submission
  const submitRev = document.getElementById("submit-review-btn");
  if (submitRev) submitRev.addEventListener("click", handleAddReview);

  // Coupon Form submit
  const couponForm = document.getElementById("coupon-form");
  if (couponForm) {
    couponForm.addEventListener("submit", handleCouponApply);
  }

  // Checkout Open Trigger
  const checkoutOpenBtn = document.getElementById("checkout-open-btn");
  if (checkoutOpenBtn) {
    checkoutOpenBtn.addEventListener("click", openCheckoutModal);
  }

  // Close Checkout Modal
  const closeCheckoutBtn = document.getElementById("close-checkout-btn");
  if (closeCheckoutBtn) {
    closeCheckoutBtn.addEventListener("click", () => {
      document.getElementById("checkout-dialog").close();
    });
  }

  // Credit Card Realtime Synchronization
  setupCreditCardListeners();

  // Contact Form Submission Mock
  const contactForm = document.getElementById("contact-main-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mesajınız başarıyla iletildi! En kısa sürede sizinle iletişime geçeceğiz.");
      contactForm.reset();
    });
  }

  // Details Light-dismiss fallbacks for older browsers lacking closedby="any"
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const dialogs = ["book-details-dialog", "surprise-dialog", "wishlist-dialog", "checkout-dialog"];
    dialogs.forEach(id => {
      const diag = document.getElementById(id);
      if (diag) {
        diag.addEventListener("click", (event) => {
          if (event.target !== diag) return;
          const rect = diag.getBoundingClientRect();
          const isInside = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isInside) diag.close();
        });
      }
    });
  }
}

// --- RENDER DYNAMIC CATALOG GRID ---
function renderCatalog() {
  const grid = document.getElementById("books-grid");
  const countLabel = document.getElementById("book-count");
  if (!grid) return;
  
  // Filter Books
  let filtered = BOOKS.filter(book => {
    // 1. Category Filter
    if (state.currentCategory !== "Tümü" && book.category !== state.currentCategory) return false;
    
    // 2. Search Query Filter
    if (state.searchQuery) {
      const query = state.searchQuery.toLowerCase();
      const matchTitle = book.title.toLowerCase().includes(query);
      const matchAuthor = book.author.toLowerCase().includes(query);
      if (!matchTitle && !matchAuthor) return false;
    }
    
    // 3. Price Filter
    const activePrice = book.discountPrice || book.price;
    if (activePrice > state.maxPrice) return false;
    
    // 4. Rating Filter
    if (state.minRating.length > 0) {
      const roundedRating = Math.floor(book.rating);
      const matchesAny = state.minRating.some(min => roundedRating >= min);
      if (!matchesAny) return false;
    }
    
    return true;
  });

  // Sort Books
  filtered.sort((a, b) => {
    const priceA = a.discountPrice || a.price;
    const priceB = b.discountPrice || b.price;
    
    if (state.sortBy === "price-asc") {
      return priceA - priceB;
    } else if (state.sortBy === "price-desc") {
      return priceB - priceA;
    } else if (state.sortBy === "rating-desc") {
      return b.rating - a.rating;
    }
    return a.id - b.id; // relevance default
  });

  if (countLabel) countLabel.innerText = `${filtered.length} Kitap Bulundu`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>Aradığınız kriterlere uygun kitap bulunamadı.</h3>
        <p>Lütfen filtrelerinizi kontrol edin veya farklı aramalar deneyin.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(book => {
    const hasDiscount = book.discountPrice && book.discountPrice < book.price;
    const originalFormatted = `₺${book.price.toFixed(2)}`;
    const discountedFormatted = hasDiscount ? `₺${book.discountPrice.toFixed(2)}` : originalFormatted;
    
    let starsHtml = "";
    const fullStars = Math.floor(book.rating);
    const halfStar = book.rating % 1 >= 0.5;
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        starsHtml += `<i class="fas fa-star"></i>`;
      } else if (i === fullStars + 1 && halfStar) {
        starsHtml += `<i class="fas fa-star-half-alt"></i>`;
      } else {
        starsHtml += `<i class="far fa-star"></i>`;
      }
    }

    const badgeHtml = book.badge 
      ? `<div class="book-badge ${book.badgeType || ''}">${book.badge}</div>` 
      : '';

    const isFav = state.wishlist.includes(book.id);
    const heartClass = isFav ? "wishlist-heart-btn active" : "wishlist-heart-btn";

    return `
      <article class="book-card glass-panel" data-id="${book.id}">
        ${badgeHtml}
        <button class="${heartClass}" onclick="toggleFavorite(${book.id})" title="Favorilere Ekle">
          <i class="fas fa-heart"></i>
        </button>
        <div class="book-cover-container">
          <img class="book-cover" src="${book.cover}" alt="${book.title}" loading="lazy">
          <div class="card-actions-overlay">
            <button class="overlay-btn view-detail-btn" onclick="openDetailsModal(${book.id})" title="Detayları İncele">
              <i class="fas fa-eye"></i>
            </button>
            <button class="overlay-btn card-add-btn" onclick="addToCart(${book.id})" title="Sepete Ekle">
              <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
        <h3 class="book-title" onclick="openDetailsModal(${book.id})" style="cursor: pointer;">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <div class="book-rating">
          <span class="stars">${starsHtml}</span>
          <span>(${book.rating.toFixed(1)})</span>
        </div>
        <div class="book-price-wrapper">
          <div class="prices">
            ${hasDiscount ? `<span class="original-price">${originalFormatted}</span>` : ''}
            <span class="current-price">${discountedFormatted}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart(${book.id})" title="Sepete Ekle">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

// --- RENDER DYNAMIC CART ---
function renderCart() {
  const cartList = document.getElementById("cart-items");
  const subtotalRow = document.getElementById("cart-subtotal");
  const discountRow = document.getElementById("cart-discount-row");
  const discountVal = document.getElementById("cart-discount-val");
  const shippingRow = document.getElementById("cart-shipping");
  const totalRow = document.getElementById("cart-total");
  const badge = document.getElementById("cart-badge");
  const shippingBar = document.getElementById("shipping-bar");
  const shippingText = document.getElementById("shipping-text");
  
  const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? "flex" : "none";
  }

  if (state.cart.length === 0) {
    if (cartList) {
      cartList.innerHTML = `
        <div class="empty-cart-state">
          <i class="fas fa-shopping-basket"></i>
          <p>Sepetiniz boş.</p>
          <p style="font-size: 0.8rem; margin-top: 0.5rem;">Sıradışı kurguları keşfetmeye hemen başlayın!</p>
        </div>
      `;
    }
    if (subtotalRow) subtotalRow.innerText = "₺0.00";
    if (discountRow) discountRow.style.display = "none";
    if (shippingRow) shippingRow.innerText = "₺0.00";
    if (totalRow) totalRow.innerText = "₺0.00";
    if (shippingBar) shippingBar.style.width = "0%";
    if (shippingText) shippingText.innerHTML = `Kargo Ücretsiz limiti: <strong>₺300.00</strong>`;
    
    const checkoutBtn = document.getElementById("checkout-open-btn");
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const checkoutBtn = document.getElementById("checkout-open-btn");
  if (checkoutBtn) checkoutBtn.disabled = false;

  // Calculate Subtotal
  let subtotal = 0;
  
  if (cartList) {
    cartList.innerHTML = state.cart.map(item => {
      const book = BOOKS.find(b => b.id === item.id);
      if (!book) return "";
      
      const activePrice = book.discountPrice || book.price;
      const itemTotal = activePrice * item.quantity;
      subtotal += itemTotal;
      
      return `
        <div class="cart-item">
          <img class="cart-item-img" src="${book.cover}" alt="${book.title}">
          <div class="cart-item-details">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQuantity(${book.id}, -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateQuantity(${book.id}, 1)">+</button>
            </div>
          </div>
          <div class="cart-item-price-del">
            <span class="cart-item-price">₺${itemTotal.toFixed(2)}</span>
            <button class="cart-item-delete" onclick="removeFromCart(${book.id})"><i class="fas fa-trash-alt"></i></button>
          </div>
        </div>
      `;
    }).join("");
  } else {
    // If cart list isn't rendered but math needs updating
    state.cart.forEach(item => {
      const book = BOOKS.find(b => b.id === item.id);
      if (book) subtotal += (book.discountPrice || book.price) * item.quantity;
    });
  }

  // Calculate Promo Discount
  let discountAmount = 0;
  if (state.promoDiscount > 0) {
    discountAmount = subtotal * (state.promoDiscount / 100);
    if (discountRow) {
      discountRow.style.display = "flex";
      discountVal.innerText = `-₺${discountAmount.toFixed(2)}`;
    }
  } else {
    if (discountRow) discountRow.style.display = "none";
  }

  const discountedSubtotal = subtotal - discountAmount;

  // Calculate Shipping (Free above ₺300)
  const shippingLimit = 300.00;
  const shippingCost = discountedSubtotal >= shippingLimit ? 0.00 : 29.90;
  const total = discountedSubtotal + shippingCost;

  if (subtotalRow) subtotalRow.innerText = `₺${subtotal.toFixed(2)}`;
  if (shippingRow) shippingRow.innerText = shippingCost === 0.00 ? "Ücretsiz" : `₺${shippingCost.toFixed(2)}`;
  if (totalRow) totalRow.innerText = `₺${total.toFixed(2)}`;

  // Shipping progress indicator
  if (shippingBar && shippingText) {
    if (discountedSubtotal >= shippingLimit) {
      shippingBar.style.width = "100%";
      shippingText.innerHTML = `<span style="color: var(--success);"><i class="fas fa-check-circle"></i> Tebrikler! Kargonuz bedava!</span>`;
    } else {
      const needed = shippingLimit - discountedSubtotal;
      const percent = (discountedSubtotal / shippingLimit) * 100;
      shippingBar.style.width = `${percent}%`;
      shippingText.innerHTML = `Kargo bedava için <strong>₺${needed.toFixed(2)}</strong> daha ürün ekleyin.`;
    }
  }
}

// --- PROMO COUPONS HANDLER ---
function handleCouponApply(e) {
  e.preventDefault();
  const input = document.getElementById("coupon-input");
  const code = input.value.trim().toUpperCase();
  
  if (code === "TELLA20") {
    state.appliedCoupon = "TELLA20";
    state.promoDiscount = 20; // 20% discount
    alert("Kupon başarıyla uygulandı! %20 indirim kazandınız.");
    saveCart();
  } else if (code === "BEDAVAKARGO") {
    state.appliedCoupon = "BEDAVAKARGO";
    // We can simulate free kargo by overriding limit
    alert("Kargo Bedava kuponu uygulandı!");
    // Set active state discount rules or apply flat kargo reduction
    state.promoDiscount = 0;
    saveCart();
  } else {
    alert("Geçersiz veya süresi dolmuş kupon kodu.");
  }
}

// --- AUTOCOMPLETE SUGGESTIONS ---
function renderSuggestions(query) {
  const suggestionsBox = document.getElementById("search-suggestions");
  if (!suggestionsBox) return;
  
  if (!query || query.trim().length < 2) {
    suggestionsBox.style.display = "none";
    return;
  }

  const cleanQuery = query.toLowerCase().trim();
  const matched = BOOKS.filter(book => 
    book.title.toLowerCase().includes(cleanQuery) || 
    book.author.toLowerCase().includes(cleanQuery)
  ).slice(0, 5);

  if (matched.length === 0) {
    suggestionsBox.style.display = "none";
    return;
  }

  suggestionsBox.innerHTML = matched.map(book => {
    const activePrice = book.discountPrice || book.price;
    return `
      <div class="suggestion-item" onclick="selectSuggestion(${book.id})">
        <img class="suggestion-img" src="${book.cover}" alt="${book.title}">
        <div class="suggestion-info">
          <h4>${book.title}</h4>
          <p>${book.author} | ₺${activePrice.toFixed(2)}</p>
        </div>
      </div>
    `;
  }).join("");
  suggestionsBox.style.display = "block";
}

function selectSuggestion(bookId) {
  const suggestionsBox = document.getElementById("search-suggestions");
  if (suggestionsBox) suggestionsBox.style.display = "none";
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  state.searchQuery = "";
  renderCatalog();
  openDetailsModal(bookId);
}

// --- SURPRISE ROUTLETTE WHEEL ---
function openSurpriseModal() {
  const dialog = document.getElementById("surprise-dialog");
  const stack = document.getElementById("roulette-stack");
  const detailsNode = document.getElementById("surprise-details");
  if (!dialog) return;

  stack.innerHTML = `
    <img class="stack-img" src="assets/cover_cyber.png" alt="Cover 1">
  `;
  
  detailsNode.style.display = "none";
  detailsNode.innerHTML = "";
  dialog.showModal();

  stack.classList.remove("spin-roulette");
  void stack.offsetWidth; // force reflow
  stack.classList.add("spin-roulette");

  const covers = [
    "assets/cover_cyber.png",
    "assets/cover_nature.png",
    "assets/cover_philosophy.png",
    "assets/cover_mystery.png",
    "assets/cover_future.png"
  ];
  
  let cycleInterval = setInterval(() => {
    const randomCover = covers[Math.floor(Math.random() * covers.length)];
    const img = stack.querySelector(".stack-img");
    if (img) img.src = randomCover;
  }, 120);

  setTimeout(() => {
    clearInterval(cycleInterval);
    stack.classList.remove("spin-roulette");

    const randomBook = BOOKS[Math.floor(Math.random() * BOOKS.length)];
    const img = stack.querySelector(".stack-img");
    if (img) img.src = randomBook.cover;

    const activePrice = randomBook.discountPrice || randomBook.price;
    
    detailsNode.innerHTML = `
      <h3 style="font-size: 1.3rem; margin-top: 1rem; font-weight:800;">${randomBook.title}</h3>
      <p style="color: var(--text-secondary); margin-bottom: 0.8rem; font-weight: 500;">${randomBook.author}</p>
      <p style="font-size: 0.85rem; color: var(--text-muted); max-height:80px; overflow-y:auto; margin-bottom:1.2rem;">${randomBook.description}</p>
      <div style="display:flex; align-items:center; justify-content:space-between; width:100%; border-top:1px solid var(--border-color); padding-top:1rem;">
        <span style="font-size: 1.4rem; font-weight: 800; color: var(--accent-secondary);">₺${activePrice.toFixed(2)}</span>
        <button class="gradient-btn" onclick="addSurpriseBook(${randomBook.id})" style="padding: 0.6rem 1.2rem; font-size:0.85rem;">
          <i class="fas fa-shopping-bag"></i> Sepete Ekle
        </button>
      </div>
    `;
    
    detailsNode.style.display = "flex";
    detailsNode.style.flexDirection = "column";
    detailsNode.style.alignItems = "center";
  }, 2500);
}

function addSurpriseBook(bookId) {
  addToCart(bookId);
  document.getElementById("surprise-dialog").close();
}

// --- CHECKOUT FLOW & CREDIT CARD SYNCRONIZATION ---
function openCheckoutModal() {
  closeCartDrawer();
  const dialog = document.getElementById("checkout-dialog");
  
  // Update order subtotal/totals in checkout modal
  let subtotal = 0;
  state.cart.forEach(item => {
    const book = BOOKS.find(b => b.id === item.id);
    if (book) subtotal += (book.discountPrice || book.price) * item.quantity;
  });
  
  let discountAmount = subtotal * (state.promoDiscount / 100);
  const discountedSubtotal = subtotal - discountAmount;
  const shippingLimit = 300.00;
  // If BEDAVAKARGO or subtotal exceeds limit
  const shippingCost = (state.appliedCoupon === "BEDAVAKARGO" || discountedSubtotal >= shippingLimit) ? 0.00 : 29.90;
  const grandTotal = discountedSubtotal + shippingCost;
  
  document.getElementById("checkout-summary-total").innerText = `₺${grandTotal.toFixed(2)}`;
  
  // Reset card front values
  document.getElementById("card-number-display").innerText = "•••• •••• •••• ••••";
  document.getElementById("card-holder-display").innerText = "AD SOYAD";
  document.getElementById("card-expiry-display").innerText = "AA/YY";
  document.getElementById("card-cvv-display").innerText = "•••";
  
  // Reset form
  const form = document.getElementById("checkout-form");
  if (form) form.reset();
  
  dialog.showModal();
}

function setupCreditCardListeners() {
  const cardInner = document.getElementById("credit-card-inner");
  const numberInput = document.getElementById("card-number");
  const nameInput = document.getElementById("card-name");
  const expiryInput = document.getElementById("card-expiry");
  const cvvInput = document.getElementById("card-cvv");

  if (!numberInput) return;

  // Real-time Number Sync & Formatting (xxxx xxxx xxxx xxxx)
  numberInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, ""); // digits only
    // format with spaces
    let formatted = val.match(/.{1,4}/g);
    if (formatted) {
      e.target.value = formatted.join(" ");
    } else {
      e.target.value = "";
    }
    
    const displayVal = e.target.value || "•••• •••• •••• ••••";
    document.getElementById("card-number-display").innerText = displayVal;
    
    // Auto toggle credit card icons if VISA / Mastercard starts
    const logoNode = document.getElementById("card-brand-logo");
    if (val.startsWith("4")) {
      logoNode.className = "fab fa-cc-visa";
    } else if (val.startsWith("5")) {
      logoNode.className = "fab fa-cc-mastercard";
    } else {
      logoNode.className = "fas fa-credit-card";
    }
  });

  // Name Sync
  nameInput.addEventListener("input", (e) => {
    const displayVal = e.target.value.toUpperCase() || "AD SOYAD";
    document.getElementById("card-holder-display").innerText = displayVal;
  });

  // Expiry Sync & Formatting (MM/YY)
  expiryInput.addEventListener("input", (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 2) {
      e.target.value = val.substring(0, 2) + "/" + val.substring(2, 4);
    } else {
      e.target.value = val;
    }
    const displayVal = e.target.value || "AA/YY";
    document.getElementById("card-expiry-display").innerText = displayVal;
  });

  // CVV Sync & Mockup Flip
  cvvInput.addEventListener("input", (e) => {
    const val = e.target.value.replace(/\D/g, "");
    e.target.value = val; // limit to digits
    const displayVal = val || "•••";
    document.getElementById("card-cvv-display").innerText = displayVal;
  });

  cvvInput.addEventListener("focus", () => {
    cardInner.classList.add("is-flipped");
  });

  cvvInput.addEventListener("blur", () => {
    cardInner.classList.remove("is-flipped");
  });

  // Handle Checkout submission
  const checkoutForm = document.getElementById("checkout-form");
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Simulate payment API call
    alert("Ödemeniz başarıyla doğrulandı! Siparişiniz onaylandı ve kargo hazırlık sürecine alındı. Sipariş numaranız: TL-" + Math.floor(100000 + Math.random() * 900000));
    
    // Clear State & Cart Drawer
    state.cart = [];
    state.appliedCoupon = "";
    state.promoDiscount = 0;
    saveCart();
    
    // Close Modals
    document.getElementById("checkout-dialog").close();
  });
}

// --- SPOTLIGHT LIVE SPOTLIGHT TIMER ---
function setupCountdownTimer() {
  const hoursVal = document.getElementById("spotlight-hours");
  const minsVal = document.getElementById("spotlight-minutes");
  const secsVal = document.getElementById("spotlight-seconds");
  if (!hoursVal) return;

  function update() {
    const now = new Date();
    // Calculate seconds left until midnight tonight
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const diffMs = midnight - now;

    if (diffMs <= 0) {
      hoursVal.innerText = "24";
      minsVal.innerText = "00";
      secsVal.innerText = "00";
      return;
    }

    const totalSecs = Math.floor(diffMs / 1000);
    const hours = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;

    hoursVal.innerText = String(hours).padStart(2, "0");
    minsVal.innerText = String(mins).padStart(2, "0");
    secsVal.innerText = String(secs).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// --- DYNAMIC SLIDER BOUNDS ---
function updatePriceFilterLimits() {
  const prices = BOOKS.map(b => b.discountPrice || b.price);
  const max = Math.ceil(Math.max(...prices));
  const slider = document.getElementById("price-range");
  if (slider) {
    slider.max = max;
    slider.value = max;
    state.maxPrice = max;
    document.getElementById("price-val").innerText = `₺${max.toFixed(2)}`;
  }
}

// --- DRAWER OPEN/CLOSE ACTIONS ---
function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const backdrop = document.getElementById("cart-backdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Global hooks for dynamic actions
window.addSurpriseBook = addSurpriseBook;
window.openDetailsModal = openDetailsModal;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.toggleFavorite = toggleFavorite;
window.openWishlistModal = openWishlistModal;
window.addFromWishlistToCart = addFromWishlistToCart;
