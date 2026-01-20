//
const shoes = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    price: 2900000,
    brand: "Nike",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
    desc: "Biểu tượng thời trang đường phố, dễ phối đồ với mọi phong cách.",
  },
  {
    id: 2,
    name: "Adidas Ultraboost Light",
    price: 4500000,
    brand: "Adidas",
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb",
    desc: "Công nghệ đệm Boost siêu êm, hoàn hảo cho chạy bộ và đi lại hàng ngày.",
  },
  {
    id: 3,
    name: "Jordan 1 Retro High OG",
    price: 5200000,
    brand: "Jordan",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    desc: "Huyền thoại Jordan với phối màu cổ điển, đậm chất bóng rổ.",
  },
  {
    id: 4,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 5,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 6,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 7,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 8,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 9,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 10,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 11,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 12,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 13,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 14,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 15,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 16,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 17,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 18,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 19,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  },
  {
    id: 20,
    name: "Puma Suede Classic",
    price: 1900000,
    brand: "Puma",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    desc: "Phong cách retro thập niên 80, chất liệu da lộn cao cấp.",
  }
];

// --- LOGIC TRANG CHỦ ---
function renderShoes(list) {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML =
      "<p style='grid-column: 1/-1; text-align:center'>Không tìm thấy sản phẩm nào.</p>";
    return;
  }

  grid.innerHTML = list
    .map(
      (s) => `
    <div class="shoe-card">
      <img src="${s.image}" onclick="location.href='detail.html?id=${s.id}'" alt="${s.name}">
      <h4>${s.name}</h4>
      <p style="color: #2563eb; font-weight: bold;">${s.price.toLocaleString()}đ</p>
      <button class="add-cart-btn" onclick="addToCart(${s.id})">Thêm vào giỏ</button>
    </div>
  `
    )
    .join("");
}

// --- LOGIC TRANG CHI TIẾT (FIX LỖI THIẾU HÀM) ---
function renderDetailPage() {
  const container = document.getElementById("productDetailContainer");
  if (!container) return;

  // Lấy ID từ URL (ví dụ: detail.html?id=1)
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const product = shoes.find((s) => s.id === id);

  if (!product) {
    container.innerHTML = "<h2>Sản phẩm không tồn tại!</h2>";
    return;
  }

  container.innerHTML = `
    <div class="detail-wrapper">
      <div class="detail-img">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="detail-info">
        <h2 class="detail-title">${product.name}</h2>
        <p class="detail-brand">Thương hiệu: <strong>${product.brand}</strong></p>
        <p class="detail-price">${product.price.toLocaleString()}đ</p>
        <p class="detail-desc">${product.desc}</p>
        
        <div class="detail-actions">
           <button class="add-cart-btn" onclick="addToCart(${product.id})">Thêm vào giỏ ngay</button>
           <button class="back-btn" onclick="history.back()">← Quay lại</button>
        </div>
      </div>
    </div>
  `;
}

function addToCart(id) {
  // Kiểm tra xem đã đăng nhập chưa
  const userLogin = localStorage.getItem("userLogin");

  if (!userLogin) {
    alert("Bạn cần đăng nhập để có thể mua hàng!");
    window.location.href = "login.html";
    return;
  }

  // Logic thêm hàng như cũ
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = shoes.find((s) => s.id === id);
  let item = cart.find((i) => i.id === id);

  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
  updateCartBadge();
}
// --- SỰ KIỆN ---
if (document.getElementById("productGrid")) renderShoes(shoes);

// Lọc theo Brand (Thêm hiệu ứng active)
const brandLinks = document.querySelectorAll("[data-brand]");
brandLinks.forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();

    // Xử lý Active Class
    brandLinks.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const brand = btn.dataset.brand;
    document.getElementById("categoryTitle").innerText =
      brand === "Tất cả" ? "Tất cả sản phẩm" : `Giày ${brand}`;

    renderShoes(
      brand === "Tất cả" ? shoes : shoes.filter((s) => s.brand === brand)
    );
  };
});

// Tìm kiếm
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.oninput = () => {
    const key = searchInput.value.toLowerCase();
    renderShoes(shoes.filter((s) => s.name.toLowerCase().includes(key)));
  };
}
// Thay thế hoặc cập nhật hàm addToCart trong script.js
function addToCart(id) {
  // 1. Kiểm tra đăng nhập
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));

  if (!userLogin) {
    alert("Vui lòng đăng nhập để thực hiện mua hàng!");
    window.location.href = "login.html"; // Chuyển hướng sang trang đăng nhập
    return;
  }

  // 2. Nếu đã đăng nhập, thực hiện thêm vào giỏ hàng như cũ
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = shoes.find((s) => s.id === id);
  let item = cart.find((i) => i.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Đã thêm "${product.name}" vào giỏ hàng của ${userLogin.username}!`);
  updateCartBadge();
}
function checkLoginStatus() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const navActions = document.querySelector(".nav-actions");
  
  if (userLogin && navActions) {
    // Tìm link đăng nhập cũ để thay thế
    const loginLink = navActions.querySelector("a[href='login.html']");
    if (loginLink) {
      loginLink.innerHTML = `Hi, ${userLogin.username} | <span id="logoutBtn" style="cursor:pointer; color: #38bdf8;">Thoát</span>`;
      
      // Thêm sự kiện đăng xuất
      document.getElementById("logoutBtn").onclick = () => {
        localStorage.removeItem("userLogin");
        location.reload();
      };
    }
  }
}

// Gọi hàm kiểm tra ngay khi load trang
checkLoginStatus();