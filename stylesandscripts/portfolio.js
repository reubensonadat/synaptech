// Filter functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                portfolioCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
        
        // Modal functionality
        const modal = document.getElementById('projectModal');
        const modalClose = document.querySelector('.modal-close');
        const viewProjectBtns = document.querySelectorAll('.view-project');
        
        // Project data
        const projects = {
            project1: {
                title: 'Restaurant Website',
                category: 'Website Development',
                description: 'A modern website for a local restaurant with online menu and reservation system. The website features a responsive design that works perfectly on all devices, making it easy for customers to browse the menu and make reservations from anywhere.',
                image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                date: 'March 2023',
                client: 'Taste of Africa Restaurant',
                technologies: 'HTML, CSS, JavaScript',
                website: 'www.tasteofafrica.com',
                tags: ['HTML/CSS', 'JavaScript', 'Responsive']
            },
            project2: {
                title: 'E-commerce Store',
                category: 'E-commerce Development',
                description: 'A complete online shopping solution with payment integration and inventory management. The platform includes user accounts, shopping cart functionality, and a secure checkout process.',
                image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                date: 'January 2023',
                client: 'Fashion Forward',
                technologies: 'Shopify, Liquid, JavaScript',
                website: 'www.fashionforward.com',
                tags: ['E-commerce', 'Payment Integration', 'Inventory']
            },
            project3: {
                title: 'Business Website',
                category: 'Corporate Website',
                description: 'Professional website for a consulting firm with service pages and contact forms. The site is designed to generate leads and establish the company as an industry leader.',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                date: 'February 2023',
                client: 'Business Solutions Inc.',
                technologies: 'WordPress, PHP, MySQL',
                website: 'www.businesssolutions.com',
                tags: ['Corporate', 'Professional', 'Lead Generation']
            },
            project4: {
                title: 'Fitness App',
                category: 'Mobile Application',
                description: 'A mobile application for fitness enthusiasts with workout tracking and social features. The app allows users to track their workouts, set goals, and connect with friends.',
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                date: 'April 2023',
                client: 'FitLife',
                technologies: 'React Native, Firebase',
                website: 'Available on App Store and Google Play',
                tags: ['Mobile', 'React Native', 'Health']
            },
            project5: {
                title: 'Travel App UI',
                category: 'UI/UX Design',
                description: 'User interface design for a travel booking application with modern and intuitive elements. The design focuses on creating a seamless user experience for booking flights and hotels.',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                date: 'May 2023',
                client: 'Wanderlust',
                technologies: 'Figma, Adobe XD',
                website: 'Design Concept',
                tags: ['UI/UX', 'Figma', 'Travel']
            },
            project6: {
                title: 'Fashion Store',
                category: 'E-commerce Development',
                description: 'Elegant online fashion store with product catalog and shopping cart functionality. The website features a clean, modern design that highlights the products.',
                image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                date: 'June 2023',
                client: 'Chic Boutique',
                technologies: 'Shopify, Liquid, JavaScript',
                website: 'www.chicboutique.com',
                tags: ['E-commerce', 'Fashion', 'Shopify']
            }
        };
        
        viewProjectBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = btn.getAttribute('data-project');
                const project = projects[projectId];
                
                if (project) {
                    // Populate modal with project data
                    document.querySelector('.modal-image img').src = project.image;
                    document.querySelector('.modal-title').textContent = project.title;
                    document.querySelector('.modal-subtitle').textContent = project.category;
                    document.querySelector('.modal-description').textContent = project.description;
                    
                    // Update details
                    const detailItems = document.querySelectorAll('.detail-content p');
                    detailItems[0].textContent = project.date;
                    detailItems[1].textContent = project.client;
                    detailItems[2].textContent = project.technologies;
                    detailItems[3].innerHTML = `<a href="#">${project.website}</a>`;
                    
                    // Update tags
                    const tagsContainer = document.querySelector('.modal-tags');
                    tagsContainer.innerHTML = '';
                    project.tags.forEach(tag => {
                        const tagElement = document.createElement('span');
                        tagElement.className = 'tag';
                        tagElement.textContent = tag;
                        tagsContainer.appendChild(tagElement);
                    });
                    
                    // Show modal
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close modal
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
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