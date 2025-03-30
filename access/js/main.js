// Hero Slider
const initHeroSlider = () => {
    const heroSlider = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
};

// Dark Mode Toggle
const initDarkMode = () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-theme') === 'light') {
                htmlElement.setAttribute('data-theme', 'dark');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                htmlElement.setAttribute('data-theme', 'light');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            htmlElement.setAttribute('data-theme', savedTheme);
            if (savedTheme === 'dark') {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }
    }
};

// Mobile Menu Toggle
const initMobileMenu = () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-menu-active');
        });
    }
};

// Scroll to Top Button
const initScrollTop = () => {
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
};

// Filter Tabs
const initFilterTabs = () => {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            // Here you would typically filter the products
            // This is just a placeholder for the actual filtering logic
        });
    });
};

// Product Actions (Wishlist, Cart, Quick View)
const initProductActions = () => {
    const actionButtons = document.querySelectorAll('.action-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const action = button.querySelector('i').classList[1];
            
            switch(action) {
                case 'fa-heart':
                    button.classList.toggle('active');
                    // Add wishlist logic here
                    break;
                case 'fa-shopping-cart':
                    // Add cart logic here
                    break;
                case 'fa-eye':
                    // Add quick view logic here
                    break;
            }
        });
    });
};

// Newsletter Form
const initNewsletter = () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            // Add newsletter subscription logic here
            alert('Cảm ơn bạn đã đăng ký nhận tin!');
            newsletterForm.reset();
        });
    }
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initDarkMode();
    initMobileMenu();
    initScrollTop();
    initFilterTabs();
    initProductActions();
    initNewsletter();
}); 