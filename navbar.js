// navbar.js
function initNavbar() {
    // 移动端菜单切换
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
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