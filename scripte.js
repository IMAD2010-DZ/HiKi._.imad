// Select navigation links and sections
const navLinks = document.querySelectorAll('.links a');
const sections = document.querySelectorAll('.content-section');

// Add click event to each link
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent page reload

        // Remove 'active' class from all links and sections
        navLinks.forEach(nav => nav.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add 'active' class to the clicked link and the corresponding section
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
        link.classList.add('active');
    });
});
