// app.js

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

if (toggle) {
  toggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navList?.classList.remove('show');
    }
  });
});

// Basic "Add to cart" feedback
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Added!';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Add to cart';
      btn.disabled = false;
    }, 1400);
  });
});

// Order form pseudo-submit
const orderForm = document.querySelector('.order-form');
const statusEl = document.querySelector('.order-status');

orderForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(orderForm);
  const dish = formData.get('dish');
  const qty = Number(formData.get('qty') || 1);

  statusEl.textContent = 'Submitting order...';
  setTimeout(() => {
    statusEl.textContent = `Order placed: ${qty} × ${dish}. We’ll confirm shortly.`;
  }, 800);
});
