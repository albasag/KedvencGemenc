// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburgerMenu');
    const nav = document.getElementById('headerNav');
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', nav.classList.contains('active'));
    });
    // Optional: close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});