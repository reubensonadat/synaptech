// FAQ toggle functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                faqItem.classList.toggle('active');
            });
        });
        
        // WhatsApp form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            const whatsappNumber = "+233548135853"; // Your WhatsApp number
            const whatsappMessage = `Hello Synap Tech!%0A%0AName: ${firstName} ${lastName}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}%0AMessage: ${message}`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
            
            window.open(whatsappURL, '_blank');
        }); 

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            document.getElementById('successMessage').style.display = 'block';
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 5000);
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