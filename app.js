// Function to update the navigation link's active state
function updateActiveNav() {
    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');
  
    // Iterate over the links to remove 'active' class
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    
    // Add 'active' class to 'Projects' link
    // Assuming 'Projects' link contains the text 'Projects'
    const projectsLink = [...navLinks].find(link => link.textContent === 'Projects');
    if (projectsLink) {
      projectsLink.classList.add('active');
    }
  }
  
  // Invoke the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', updateActiveNav);
  