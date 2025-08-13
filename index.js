document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for scroll-in animations
    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);

          const heroSection = document.querySelector('.hero-section');
            heroSection.style.visibility = 'visible';
        });

        // Preload fonts untuk memastikan animasi smooth
        document.fonts.ready.then(function() {
            document.body.style.visibility = 'visible';
    });
});