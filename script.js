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

function toggleMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const menuItems = document.getElementById("menu-items");
  
    // Toggle visibility and active class
    menuItems.classList.toggle("menu-shown");
    menuItems.classList.toggle("menu-hidden");
    menuIcon.classList.toggle("active");
  }
  
  // Close the menu after clicking on a link
  document.querySelectorAll("#menu-items a").forEach(link => {
    link.addEventListener("click", () => {
      // Close the menu
      document.getElementById("menu-items").classList.add("menu-hidden");
      document.getElementById("menu-items").classList.remove("menu-shown");
      document.getElementById("menu-icon").classList.remove("active");
    });
  });
  
