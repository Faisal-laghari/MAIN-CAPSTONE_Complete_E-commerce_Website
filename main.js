const cartStorageKey = "cart";

function getCart() {
  const savedCart = localStorage.getItem(cartStorageKey);

  if (!savedCart) {
    return [];
  }

  try {
    return JSON.parse(savedCart);
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));

  updateCartCount();
}

function addToCart(id) {
  const cart = getCart();

  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id,
      quantity: 1
    });
  }

  saveCart(cart);
}

function removeFromCart(id) {
  const updatedCart = getCart().filter(item => item.id !== id);

  saveCart(updatedCart);
}

function updateQuantity(id, qty) {
  const cart = getCart();

  const cartItem = cart.find(item => item.id === id);

  if (!cartItem) {
    return;
  }

  if (qty <= 0) {
    removeFromCart(id);
    return;
  }

  cartItem.quantity = qty;

  saveCart(cart);
}

function updateCartCount() {
  const cart = getCart();

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const cartBadges = document.querySelectorAll("#cartCount");

  cartBadges.forEach(badge => {
    badge.textContent = totalItems;
  });
}

function clearCart() {
  localStorage.removeItem(cartStorageKey);

  updateCartCount();
}

window.addEventListener("storage", () => {
  updateCartCount();
});

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  const currentPage = window.location.pathname
    .split("/")
    .pop();

  const navLinks = document.querySelectorAll(".navLink");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html")
    ) {
      link.classList.add("activeLink");
    } else {
      link.classList.remove("activeLink");
    }
  });

  const header = document.querySelector(".siteHeader");

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.45)";
      } else {
        header.style.boxShadow = "";
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }
});