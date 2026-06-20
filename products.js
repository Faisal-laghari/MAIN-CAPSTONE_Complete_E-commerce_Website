const products = [
  {
    id: 1,
    name: "Premium Smartwatch",
    category: "Electronics",
    price: 299,
    description: "A refined smartwatch with fitness tracking, notifications, and all day battery life. Designed for seamless everyday use.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 189,
    description: "Experience immersive sound with active noise cancellation and premium comfort. Perfect for work, travel, and entertainment.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    name: "Compact Camera",
    category: "Electronics",
    price: 649,
    description: "Capture stunning photos with advanced image quality and intuitive controls. Built for creators who value portability.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    name: "Portable Speaker",
    category: "Electronics",
    price: 119,
    description: "A powerful wireless speaker with rich sound and durable construction. Enjoy your music anywhere.",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 5,
    name: "Cotton T Shirt",
    category: "Clothing",
    price: 35,
    description: "A premium cotton T shirt with a comfortable fit and soft feel. Ideal for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    name: "Classic Hoodie",
    category: "Clothing",
    price: 69,
    description: "Stay comfortable with this heavyweight hoodie crafted from quality fabric. Designed for modern casual style.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 7,
    name: "Denim Jacket",
    category: "Clothing",
    price: 95,
    description: "A timeless denim jacket with premium stitching and versatile styling. Built to complement any wardrobe.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 8,
    name: "Leather Sneakers",
    category: "Clothing",
    price: 129,
    description: "Minimal leather sneakers that blend comfort with a clean design. Suitable for daily wear.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 9,
    name: "Modern Fiction Novel",
    category: "Books",
    price: 22,
    description: "An engaging story with memorable characters and thoughtful storytelling. Perfect for weekend reading.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 10,
    name: "Business Strategy Guide",
    category: "Books",
    price: 28,
    description: "Learn practical frameworks and decision making techniques from industry experts. A valuable resource for professionals.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 11,
    name: "Web Development Handbook",
    category: "Books",
    price: 39,
    description: "A comprehensive guide covering modern web technologies and best practices. Suitable for beginners and experienced developers.",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 12,
    name: "Personal Growth Journal",
    category: "Books",
    price: 18,
    description: "Organize your goals, reflections, and daily routines with this thoughtfully designed journal.",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 13,
    name: "Ceramic Cookware Set",
    category: "Home & Kitchen",
    price: 149,
    description: "Premium ceramic cookware designed for durability and even heat distribution. Elevate your kitchen experience.",
    image: "https://images.unsplash.com/photo-1584990347449-a5d0d08a4e0f?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 14,
    name: "Stainless Kettle",
    category: "Home & Kitchen",
    price: 54,
    description: "A sleek stainless kettle with rapid heating and a modern finish. Built for convenience and style.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 15,
    name: "Espresso Machine",
    category: "Home & Kitchen",
    price: 329,
    description: "Prepare rich espresso and specialty drinks with professional quality results at home.",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 16,
    name: "Table Lamp",
    category: "Home & Kitchen",
    price: 74,
    description: "A contemporary table lamp that creates warm ambient lighting. Designed to complement modern interiors.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 17,
    name: "Yoga Mat",
    category: "Sports",
    price: 42,
    description: "A durable yoga mat with excellent grip and cushioning. Ideal for home workouts and studio sessions.",
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 18,
    name: "Adjustable Dumbbells",
    category: "Sports",
    price: 219,
    description: "Save space while expanding your training options with adjustable weight settings.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 19,
    name: "Football",
    category: "Sports",
    price: 31,
    description: "A high quality football engineered for consistent performance and durability on the field.",
    image: "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 20,
    name: "Tennis Racket",
    category: "Sports",
    price: 139,
    description: "A lightweight tennis racket offering precision, balance, and excellent control during play.",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=900&q=80"
  }
];