
(function () {
  const saved = localStorage.getItem("accentColor");
  if (saved) {
    document.documentElement.style.setProperty("--accent-color", saved);
  }
})();

(function () {
  const saved = localStorage.getItem("mainColor");
  if (saved) {
    document.documentElement.style.setProperty("--main-color", saved);
  }
})();

(function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
})();

// Team logo loader - updates navbar logo on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLogo = localStorage.getItem('teamLogo');
  if (savedLogo) {
    // Find logo images in the navbar
    const logoImgs = document.querySelectorAll('.navbar .logo img');
    logoImgs.forEach(img => {
      // Determine the relative path based on current page depth
      const currentPath = window.location.pathname;
      let basePath = '';
      
      if (currentPath.includes('/pages/')) {
        // We're in a subdirectory of pages
        basePath = '../../assets/images/Team Logos/';
      } else {
        // We're at root level (index.html)
        basePath = 'assets/images/Team Logos/';
      }
      
      img.src = basePath + savedLogo;
    });
  }
});
