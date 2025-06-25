// navbar.js
function initNavbar() {
    console.log('Initializing navbar...');
    
    // 移动端菜单切换
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    console.log('Menu button found:', !!menuBtn);
    console.log('Mobile menu found:', !!mobileMenu);
    
    if (menuBtn && mobileMenu) {
        console.log('Adding click event listener to menu button');
        
        // Remove any existing event listeners to prevent duplicates
        menuBtn.onclick = null;
        
        // Add click event listener with debugging
        menuBtn.addEventListener('click', function(e) {
            console.log('Menu button clicked!');
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Current mobile menu classes:', mobileMenu.className);
            
            if (mobileMenu.classList.contains('opacity-0')) {
                console.log('Opening mobile menu');
                mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                menuBtn.innerHTML = '<i class="fa fa-times"></i>';
            } else {
                console.log('Closing mobile menu');
                mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            }
            
            console.log('Updated mobile menu classes:', mobileMenu.className);
        });
        
        // Also add touch event for better mobile support
        menuBtn.addEventListener('touchstart', function(e) {
            console.log('Menu button touched!');
            e.preventDefault();
            e.stopPropagation();
        });
        
        // Add touchend event
        menuBtn.addEventListener('touchend', function(e) {
            console.log('Menu button touch ended!');
            e.preventDefault();
            e.stopPropagation();
            
            // Trigger menu toggle
            if (mobileMenu.classList.contains('opacity-0')) {
                mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                menuBtn.innerHTML = '<i class="fa fa-times"></i>';
            } else {
                mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            }
        });
        
        // Fallback: Add inline onclick as backup
        menuBtn.onclick = function(e) {
            console.log('Menu button onclick triggered!');
            e.preventDefault();
            e.stopPropagation();
            
            if (mobileMenu.classList.contains('opacity-0')) {
                mobileMenu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                menuBtn.innerHTML = '<i class="fa fa-times"></i>';
            } else {
                mobileMenu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            }
        };
        
        console.log('Event listeners added successfully');
        
        // Create a global toggle function as a fallback
        window.toggleMobileMenu = function() {
            console.log('Global toggle function called!');
            const btn = document.getElementById('menuBtn');
            const menu = document.getElementById('mobileMenu');
            
            if (btn && menu) {
                if (menu.classList.contains('opacity-0')) {
                    menu.classList.remove('opacity-0', '-translate-y-full', 'pointer-events-none');
                    menu.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
                    btn.innerHTML = '<i class="fa fa-times"></i>';
                } else {
                    menu.classList.add('opacity-0', '-translate-y-full', 'pointer-events-none');
                    menu.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
                    btn.innerHTML = '<i class="fa fa-bars"></i>';
                }
            }
        };
    } else {
        console.error('Menu button or mobile menu not found!');
        if (!menuBtn) console.error('menuBtn element not found');
        if (!mobileMenu) console.error('mobileMenu element not found');
    }
    
    // 导航栏滚动效果
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('py-2', 'shadow-md');
                header.classList.remove('py-3', 'shadow-sm');
            } else {
                header.classList.add('py-3', 'shadow-sm');
                header.classList.remove('py-2', 'shadow-md');
            }
        }
    });
}

// Initialize immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
} else {
    initNavbar();
}