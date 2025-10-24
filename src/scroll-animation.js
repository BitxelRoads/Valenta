document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden-bottom');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear-from-bottom');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Adjust as needed. 0.1 means 10% of the element must be visible.
    });

    hiddenElements.forEach(el => {
        observer.observe(el);
    });
});

