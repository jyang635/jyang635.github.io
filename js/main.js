// Main JavaScript file for shared functionality

document.addEventListener('DOMContentLoaded', () => {
    // Load Header and Footer
    loadComponent('header.html', 'header-placeholder', 'navbar-placeholder', initNavbarFeatures);
    loadComponent('footer.html', 'footer-placeholder');
});

/**
 * Loads a HTML component into a placeholder element
 * @param {string} url - The URL of the component to load
 * @param {...string} placeholderIds - One or more IDs of the placeholder elements
 * @param {Function} [callback] - Optional callback to run after loading
 */
function loadComponent(url, ...args) {
    const callback = typeof args[args.length - 1] === 'function' ? args.pop() : null;
    const placeholderIds = args;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            let found = false;
            placeholderIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.innerHTML = data;
                    found = true;
                }
            });
            
            if (found && callback) {
                callback();
            }
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}

function initNavbarFeatures() {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const header = document.getElementById('header');
    
    if (menuBtn && mobileMenu) {
        // Remove old event listeners if any (though usually not needed on fresh load)
        const newMenuBtn = menuBtn.cloneNode(true);
        menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);
        
        newMenuBtn.addEventListener('click', () => {
            if (mobileMenu.classList.contains('opacity-0')) {
                mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                newMenuBtn.innerHTML = '<i class="fa fa-times"></i>';
            } else {
                mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                newMenuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            }
        });
    }
    
    // Navbar scroll effect
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'shadow-md');
                header.classList.remove('py-3', 'shadow-sm');
            } else {
                header.classList.add('py-3', 'shadow-sm');
                header.classList.remove('py-2', 'shadow-md');
            }
        };
        
        window.removeEventListener('scroll', handleScroll); // Clean up potential duplicates
        window.addEventListener('scroll', handleScroll);
        
        // Trigger once on load in case we are already scrolled
        handleScroll();
    }

    // Highlight active link
    highlightActiveLink();
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a, #mobileMenu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('text-primary');
            // If it's a mobile menu link, maybe add a background or different style?
            // For now, text-primary is consistent with hover state.
        }
    });
}
