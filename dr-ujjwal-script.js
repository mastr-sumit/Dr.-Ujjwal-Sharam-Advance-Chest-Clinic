// =====================
// NAVBAR SCROLL EFFECT
// =====================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 4px 20px rgba(21,101,192,0.15)';
  } else {
    nav.style.boxShadow = '0 2px 20px rgba(21,101,192,0.1)';
  }
});

// =====================
// ACTIVE NAV HIGHLIGHT
// =====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#1565c0';
      link.style.fontWeight = '600';
    } else {
      link.style.fontWeight = '500';
    }
  });
});

// =====================
// FAQ ACCORDION
// =====================
function toggleFaq(el) {
  const item = el.parentElement;
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

  // Toggle current
  if (!isOpen) item.classList.add('open');
}

// =====================
// APPOINTMENT FORM
// =====================
document.getElementById('submitBtn').addEventListener('click', function () {
  const name = document.querySelector('input[placeholder="Full name"]').value.trim();
  const phone = document.querySelector('input[placeholder="Mobile number"]').value.trim();

  if (!name || !phone) {
    alert('Please enter your name and phone number to continue.');
    return;
  }

  this.textContent = '✅ Request Sent!';
  this.style.background = '#16a34a';
  this.disabled = true;

  setTimeout(() => {
    alert(`Thank you, ${name}!\n\nWe will contact you at ${phone} to confirm your appointment.\n\nFor urgent queries, call: 09977116880`);
  }, 300);
});

// =====================
// SCROLL REVEAL
// =====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.service-card, .review-card, .badge-item, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
