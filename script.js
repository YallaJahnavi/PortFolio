document.addEventListener("DOMContentLoaded", function () {
    const academicItems = document.querySelectorAll(".academic-item");

    academicItems.forEach((item) => {
        setTimeout(() => {
            item.classList.add("show");
        }, item.getAttribute("data-delay"));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const academicBoxes = document.querySelectorAll(".academic-box");

    academicBoxes.forEach((box) => {
        setTimeout(() => {
            box.classList.add("show");
        }, box.getAttribute("data-delay"));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menuBtn.textContent = sidebar.classList.contains('active') ? '×' : '☰';
    });

    // Enhanced smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                sidebar.classList.remove('active');
                menuBtn.textContent = '☰';
                
                // Calculate scroll position with offset
                const offset = 0; // Adjust if needed
                const targetPosition = targetSection.offsetTop - offset;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all section content
    document.querySelectorAll('.section-content').forEach(section => {
        observer.observe(section);
    });

    // Enhanced active link highlighting
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightActiveSection = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                const currentId = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.style.color = link.getAttribute('href') === `#${currentId}` ? '#4a90e2' : '#666';
                });
            }
        });
    };

    // Add scroll event listener with throttling
    let isScrolling;
    window.addEventListener('scroll', () => {
        clearTimeout(isScrolling);
        isScrolling = setTimeout(highlightActiveSection, 50);
    });

    // Initial highlight check
    highlightActiveSection();
});
document.addEventListener("DOMContentLoaded", function () {
    // Services Animation
    const serviceBoxes = document.querySelectorAll(".skills-box");
    serviceBoxes.forEach((box) => {
        setTimeout(() => {
            box.classList.add("show");
        }, box.getAttribute("data-delay"));
    });

    // Internships Animation
    const internshipBoxes = document.querySelectorAll(".internship-box");
    internshipBoxes.forEach((box) => {
        setTimeout(() => {
            box.classList.add("show");
        }, box.getAttribute("data-delay"));
    });

    // Contact Form Submit
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Your message has been sent successfully!");
    });
});

function sendEmail(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:yallajahnavi170@gmail.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
    window.location.href = mailtoLink; // Opens default email client
}
