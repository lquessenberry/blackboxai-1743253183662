document.addEventListener('DOMContentLoaded', function() {
    console.log('Kayenta clone loaded');

    // Mobile menu toggle functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mainNav = document.getElementById('main-nav');

    mobileMenuButton.addEventListener('click', function() {
        mainNav.classList.toggle('hidden');
    });
});