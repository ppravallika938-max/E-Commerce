const products = [
  {
    id: 1,
    title: "Apple iPhone 17 Pro",
    price: 135000,
    rating: "★★★★☆ (1,240)",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQBOp1HsZrK7yeL5muUQnakx66FVPJjKdno2i-rE4JxK2jD6HmCUaIrzb7K1tcXVZTmA30cLnxRHYDlCqFrJwPfbhFdd5b8dAqqcMDOxKWbKIrucBM5SyP7iro8X6xtg6U1hY5U5A&usqp=CAc"
  },
  {
    id: 2,
    title: "Lenovo Laptop",
    price: 70000,
    rating: "★★★★★ (3,810)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXy2PbKvDhqzpMZkLW7xrYfHfIdY9Iglce0YXbs_QYtA&s=10"
  },
  {
    id: 3,
    title: "Wireless Earpods",
    price: 2500,
    rating: "★★★★☆ (890)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa3C-Sg5zwdxcGOyaj5DOhfv4lfJ7byvDnJXGyZ8ha7Q&s=10"
  },
  {
    id: 4,
    title: "Smart Watch - Noise",
    price: 3000,
    rating: "★★★★★ (12,450)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3IXyE_ZX_RPboX0CmfObgL2uQJ0106J6KSEO79s7mA&s=10"
  },
  {
    id: 5,
    title: "Apple iPad Tablet",
    price: 35000,
    rating: "★★★★☆ (2,100)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxfQWlzapIadhCuocksp71-WVLpCdQ32iXuPBiRGkoA&s=10"
  },
  {
    id: 6,
    title: "Gaming Headset",
    price: 2000,
    rating: "★★★★☆ (650)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbtsVfeg5ulmsTbdduOmWLnylz5XECcl4KKYQG95qCMQ&s=10"
  },
  {
    id: 7,
    title: "Alexa Smart Speaker",
    price: 3499,
    rating: "★★★★☆ (550)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElu284kw6ibRhHUu5NOKdRXRThJTubIN288ukMBPZcA&s=10"
  },
  {
    id: 8,
    title: "Smart CCTV Camera",
    price: 55000,
    rating: "★★★★☆ (810)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUL5hQve_ljVsWor1WHKbTVw1SVs3U08p0Wvrz0XiJA&s=10"
  },
    {
    id: 9,
    title: "Refrigerator",
    price: 25000,
    rating: "★★★★☆ (1,230)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W3S6keiCYC7e5TM3cjCaAldTPtMz3Q5Fok-FraZy2Q&s=10"
  },
    {
    id: 10,
    title: "Washing Machine",
    price: 55490,
    rating: "★★★★☆ (1,100)",
    image: "https://media-ik.croma.com/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/314768_0_0XQ0vAwNI.png?updatedAt=1766428541138"
  },
    {
    id: 11,
    title: "Robot Vacuum Cleaner",
    price: 30000,
    rating: "★★★★☆ (3,810)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEExu4kQwe5YdLO1c3k0l2O2Ut3y4qoOAT1AcQbQNhA&s=10"
  },
    {
    id: 12,
    title: "Dish Washing Machine",
    price: 47500,
    rating: "★★★★☆ (2,400)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYbtVW8h4KD37VA2bATqy4NPRMx6fyYBLnBhDRdGinQ&s=10"
  },
    {
    id: 13,
    title: "Microwave Oven",
    price: 5690,
    rating: "★★★★☆ (1,650)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwPjK7PqbnNaAC-IvwG6t-yH_7XjUWdD5f_V_EcRUbw&s=10"
  },
    {
    id: 14,
    title: "Air cooler",
    price: 4800,
    rating: "★★★★☆ (1,200)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXkRswBYYeJ73zZTqJXBBf59QEMKE0IPwA8NnakdYaw&s=10"
  },
    {
    id: 15,
    title: "Grindr",
    price: 9900,
    rating: "★★★★☆ (3,520)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUldsOF7Vg8a4fYbALx_Pvj6CeGdrwGpFBWcotFqQVA&s=10"
  },
    {
    id: 16,
    title: "Air Conditioner",
    price: 27900,
    rating: "★★★★☆ (5,760)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00j9sJhmgTOLyz_lFQNYv-8DrdSM6ouMtAJPELQYNIA&s=10"
  },
    {
    id: 17,
    title: "Half Saree",
    price: 1600,
    rating: "★★★★☆ (1,120)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TVBvPqfJbHLyyKXHVrM22ie4FaqdTvH3q60u1ygFmw&s=10"
  },
    {
    id: 18,
    title: "Silk Saree",
    price: 10000,
    rating: "★★★★☆ (5,340)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7MaDC6XnqkHarCw6A5mAajpiW5BFlSJ2EaeNhznZN8g&s=10"
  },
    {
    id: 19,
    title: "Frocks",
    price: 8000,
    rating: "★★★★☆ (4,500)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--o5xIMLj4BliY9lX8POUXv58rL2LTJdgZLFGUbSw2g&s=10"
  },
    {
    id: 20,
    title: "kurthi",
    price: 5000,
    rating: "★★★★☆ (3,450)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHh02-nApjZTVPRUlCblSMVVJSGXJ68KSQdrnhKbES1g&s=10"
  },
    {
    id: 21,
    title: "Jeans with Tops",
    price: 1200,
    rating: "★★★★☆ (1,280)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkI2LL_TDyDDSAnG7CQ17J7bimFLl8yffZXSGpr3X0g&s=10"
  },
    {
    id: 22,
    title: "Party Wear",
    price: 1300,
    rating: "★★★★☆ (1,670)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgDFgK5XPbueLtpovh92tu6w61MoqSptiJ62XDm9Qgg&s=10"
  },
    {
    id: 23,
    title: "Skrits",
    price: 480,
    rating: "★★★★☆ (2,360)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCx-FwgjUTz5dsqKwV7Oez0g0BjwXQYOetfwdTlMxuw&s=10"
  },
    {
    id: 24,
    title: "Blazer suit",
    price: 1500,
    rating: "★★★★☆ (1,570)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo8Py-G8v5Zf3V09OIMPLTC2VJnOGXUOhBUan9KPKEMg&s=10"
  },
  {
    id: 25,
    title: "Ear Rings",
    price: 1500,
    rating: "★★★★☆ (2,380)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZea7KYfhrADolhPZr6Gm_vYKat-5yLdDyNjc310KY3Q&s=10"
  },
  {
    id: 26,
    title: "Necklace",
    price: 38190,
    rating: "★★★★☆ (1,390)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoH5gbZn0rvcqsxK1HdCL0l1NnKAhXnd5RQIa1OOabPA&s=10"
  },
  {
    id: 27,
    title: "Hair Accessories",
    price: 2500,
    rating: "★★★★☆ (3,400)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1WM6hl_cI6SuzrIPlLr6eOIgDSueyGuvYd6jHIk7UA&s=10"
  },
  {
    id: 28,
    title: "Bracelet",
    price: 1300,
    rating: "★★★★☆ (2,200)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZ2-G27sVCKPSJelPG-SnEWzoxOaVEac1FmjG0vCHFw&s=10"
  },
  {
    id: 29,
    title: "Bangles",
    price: 1700,
    rating: "★★★★☆ (1,570)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp3zUb2ukLoN9qWdSGtzBUc3FcJT1Pg3CRETQlORS1g&s=10"
  },
 {
    id: 30,
    title: "Platinum Ring",
    price: 50970,
    rating: "★★★★☆ (3,590)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-ZZWy7Hc_Au2Xg3H6BMrQIfGSkYozC217NoSy5a8Ww&s=10"
  },
  {
    id: 31,
    title: "Men's Bracelet",
    price: 860,
    rating: "★★★★☆ (2,340)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSta0o_NvGbyL5YSjOUbsFdJvJzU5Q3jh7lWHSlkWKl_w&s=10"
  },
   {
    id: 32,
    title: "Men's Watch",
    price: 1300,
    rating: "★★★★☆ (1,390)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_ojrXxFm9qlZmxlTQcEit7NAX0Hdz0TM296QcsVu3Q&s=10"
  },
   {
    id: 33,
    title: "Shirts",
    price: 1400,
    rating: "★★★★☆ (1,250)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZpPU8gh0o38EgDBe9H_TlFoeri4MIxi9qQCZvjuCdw&s=10"
  },
 {
    id: 34,
    title: "Cargo Pants",
    price: 550,
    rating: "★★★★☆ (1,200)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFVfnhDOpoSt-zS_pUb483LIB5o5WsR04TePdwkZ1VQ&s=10"
  },
 {
    id: 35,
    title: "T-Shirts",
    price: 450,
    rating: "★★★★☆ (2,350)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9GbfB7SkobB3Qqgnlfow0GS8bEbD8oYlPZusAtWUFg&s"
  },
 {
    id: 36,
    title: "Suits",
    price: 5299,
    rating: "★★★★☆ (3,540)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9nBJBQ8dYMd1cnfwVuFdiOIQ_RLac9af0hbqxMPZxA&s=10"
  },

];

let cartItemCount = 0;

function renderProducts(productList) {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = '';

  if (productList.length === 0) {
    grid.innerHTML = '<p class="no-products" style="grid-column: 1/-1; text-align: center; font-size: 18px; padding: 40px;">No products found.</p>';
    return;
  }

  productList.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-info">
        <div class="product-title">${product.title}</div>
        <div class="product-rating">${product.rating}</div>
        <div class="product-price">₹${product.price.toLocaleString('en-IN')}</div>
      </div>
      <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    grid.appendChild(card);
  });
}

function addToCart(productId) {
  cartItemCount++;
  const cartBadge = document.getElementById('cartCount');
  if (cartBadge) {
    cartBadge.innerText = cartItemCount;
  }
}

function searchProducts() {
  showSection('home'); 
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter(product => 
    product.title.toLowerCase().includes(query)
  );

  renderProducts(filtered);
}

function showSection(section) {
  const home = document.getElementById('homeSection');
  const about = document.getElementById('aboutSection');

  if (section === 'about') {
    home.classList.add('hidden');
    about.classList.remove('hidden');
  } else {
    about.classList.add('hidden');
    home.classList.remove('hidden');
  }
}

const navData = {
  "All Categories": "Explore all top categories including Electronics, Fashion, Home Appliances, and Books.",
  "Today's Deals": "Save big today! Get up to 50% discount on top electronic brands.",
  "Customer Service": "Need help with orders or refunds? Our support team is available 24/7.",
  "Registry": "Create or manage your wedding, baby, or gift registries here.",
  "Gift Cards": "Send instant digital gift cards to friends and family for any occasion.",
  "Sell": "Start selling your products on SkyCart and reach millions of customers today!"
};

function openNavModal(title) {
  const modal = document.getElementById('navModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  modalTitle.innerText = title;
  modalBody.innerText = navData[title] || "Information not available right now.";
  modal.style.display = 'block';
}

function closeNavModal() {
  document.getElementById('navModal').style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('navModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});
