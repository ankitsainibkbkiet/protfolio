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


function toggleSidebar() {
    const sidebar = document.getElementById('mobileSidebar');
    sidebar.classList.toggle('active');
}

document.querySelector('.mobile-menu-button').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});



window.addEventListener('resize', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    if (window.innerWidth <= 768) {  // Example condition for mobile view
        menuButton.style.display = 'block';
    } else {
        menuButton.style.display = 'none';
    }
});

