 // FAQ toggle functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Hamburger menu functionality
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const mobileNav = document.getElementById('mobile-nav');
        const desktopNav = document.getElementById('desktop-nav');
        const desktopBtn = document.querySelector('.desktop-btn');
        
        hamburgerIcon.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
        
        // Hide mobile nav when a link is clicked
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
            });
        });
        
        // Adjust visibility based on screen size
        function adjustNavVisibility() {
            if (window.innerWidth <= 992) {
                desktopNav.style.display = 'none';
                desktopBtn.style.display = 'none';
                hamburgerIcon.style.display = 'block';
            } else {
                desktopNav.style.display = 'flex';
                desktopBtn.style.display = 'inline-flex';
                hamburgerIcon.style.display = 'none';
                mobileNav.classList.remove('active'); // Hide mobile nav if resized to larger screen
            }
        }
        
        // Initial call and on resize
        adjustNavVisibility();
        window.addEventListener('resize', adjustNavVisibility);