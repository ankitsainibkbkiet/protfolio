document.addEventListener('DOMContentLoaded', () => {
    // Add scroll animation for sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
        section.classList.add('fade-in-init');
    });
});

