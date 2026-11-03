// ============================================================
// 1st Responder News Web Services — theme.js (Design v2)
// Visual-behavior only: no content or images are modified.
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

    // ---------- Interactive Category Filter for Examples ----------
    const filterButtons = document.querySelectorAll('.btn-filter');
    const items = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            items.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('example-item-hidden');
                } else {
                    item.classList.add('example-item-hidden');
                }
            });
        });
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ---------- Navbar shadow state on scroll ----------
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
        window.addEventListener('scroll', updateNavbar, { passive: true });
        updateNavbar();
    }

    // ---------- Scroll-reveal for sections and cards ----------
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        const revealTargets = document.querySelectorAll(
            '.recent-work-section .work-card, .features-section .feature-item, ' +
            '.service-card-modern, .process-step-card, .portfolio-item, .services-cta-banner'
        );
        revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealTargets.forEach(el => observer.observe(el));
    }
});
