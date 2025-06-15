(function onClickHamberger() {
  const hambergerEl = document.querySelector('.hamburger');
  const navLinksEl = document.querySelector('.nav-links');

  if (!hambergerEl || !navLinksEl) {
    return null;
  }

  hambergerEl.addEventListener('click', () => {
    navLinksEl.classList.toggle('expanded');
  });
})();
