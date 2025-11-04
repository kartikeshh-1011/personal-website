// script.js — basic interactivity: menu toggle and year auto-fill

// Mobile menu toggle — toggles nav visibility by adding inline styles
function toggleMenu(menuId) {
  const nav = document.querySelector('#main-nav');
  if (!nav) return;
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.position = 'absolute';
    nav.style.right = '22px';
    nav.style.top = '62px';
    nav.style.background = 'rgba(7,18,38,0.9)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '10px';
  }
}

// Add event listeners to each page toggle button if present
document.querySelectorAll('.menu-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
});

// Auto-fill current year across pages
const yearSpans = [
  document.getElementById('year'),
  document.getElementById('year-edu'),
  document.getElementById('year-skill'),
  document.getElementById('year-personal'),
  document.getElementById('year-contact'),
];
const y = new Date().getFullYear();
yearSpans.forEach(s => { if (s) s.textContent = y; });

// Highlight active nav-link based on location (extra safety if served on a server)
(function highlightActiveNav(){
  const links = document.querySelectorAll('.nav-link');
  const path = location.pathname.split('/').pop() || 'index.html';
  links.forEach(l => {
    const href = l.getAttribute('href');
    if (href && href.endsWith(path)) {
      links.forEach(x => x.classList.remove('active'));
      l.classList.add('active');
    }
  })
})();
