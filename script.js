 // Hamburger menu toggle
        const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');
        
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when clicking nav link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });

        // Script untuk mengatur background saat scroll
        window.addEventListener('scroll', function() {
            const heroSection = document.querySelector('.hero-section');
            const aboutSection = document.querySelector('.about-section');
            const contactSection = document.querySelector('.contact-section');
            const heroBackground = heroSection.querySelector('.wave-background');
            const aboutBackground = aboutSection.querySelector('.wave-background');
            const contactBackground = contactSection.querySelector('.wave-background');
            
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            
            if (scrollPosition > aboutBottom) {
                // Contact section
                heroBackground.style.opacity = '0';
                aboutBackground.style.opacity = '0';
                contactBackground.style.opacity = '1';
            } else if (scrollPosition > heroBottom) {
                // about section
                heroBackground.style.opacity = '0';
                aboutBackground.style.opacity = '1';
                contactBackground.style.opacity = '0';
            } else {
                // Hero section
                heroBackground.style.opacity = '1';
                aboutBackground.style.opacity = '0';
                contactBackground.style.opacity = '0';
            }
        });