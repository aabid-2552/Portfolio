document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Typed.js animation in Hero Section ---
    if(document.querySelector(".typed-text")) {
        new Typed(".typed-text", {
            strings: ["Aabid"],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            cursorChar: '_'
        });
    }

    // --- 2. Navbar Scroll Effect ---
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // --- 3. Active Link on Scroll ---
        highlightNavLink();
    });

    // --- 3. Active Link on Scroll Function ---
    const sections = document.querySelectorAll("section[id]");
    
    function highlightNavLink() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Adjust for header height
            const sectionId = current.getAttribute("id");
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active-link");
                } else {
                    navLink.classList.remove("active-link");
                }
            }
        });
    }
    
    // Initial call to set active link on load
    highlightNavLink();
    
    // --- 4. Simple Form Submit Handling (Prevent Reload) ---
    const form = document.querySelector('.contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Thanks! This is a demo. To make it work, integrate a backend service like EmailJS.");
            form.reset();
        });
    }
});