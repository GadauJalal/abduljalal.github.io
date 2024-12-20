document.addEventListener('DOMContentLoaded', function() {
    // Get all sidebar icons
    const sidebarIcons = document.querySelectorAll('.sidebar-icon');
    
    // Add click event listeners to each icon
    sidebarIcons.forEach((icon) => {
        icon.addEventListener('click', function() {
            // Get the icon class to determine which page to navigate to
            const iconClass = this.querySelector('i').className;
            
            // Navigate based on icon
            if (iconClass.includes('fa-adjust')) {
                toggleTheme();
            }
            else if (iconClass.includes('fa-home')) {
                window.location.href = 'index.html';
            }
            else if (iconClass.includes('fa-user')) {
                window.location.href = 'aboutme.html';
            }
            else if (iconClass.includes('fa-briefcase')) {
                window.location.href = 'myportfolio.html';
            }
            else if (iconClass.includes('fa-newspaper')) {
                window.location.href = 'blog.html';
            }
            else if (iconClass.includes('fa-envelope')) {
                window.location.href = 'contact.html';
            }
        });
    });

    // Theme toggle functionality
    function toggleTheme() {
        const body = document.body;
        const themeIcon = document.querySelector('.fa-adjust');
        
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    // Check and apply saved theme
    function applyTheme() {
        const savedTheme = localStorage.getItem('theme');
        const themeIcon = document.querySelector('.fa-adjust');
        
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // Apply theme on page load
    applyTheme();

    // Add active class to current page's icon
    function setActiveIcon() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const icons = document.querySelectorAll('.sidebar-icon');
        
        icons.forEach(icon => icon.classList.remove('active'));

        switch(currentPage) {
            case 'index.html':
                icons[1].classList.add('active');
                break;
            case 'aboutme.html':
                icons[2].classList.add('active');
                break;
            case 'myportfolio.html':
                icons[3].classList.add('active');
                break;
            case 'blog.html':
                icons[4].classList.add('active');
                break;
            case 'contact.html':
                icons[5].classList.add('active');
                break;
        }
    }

    // Set active icon on page load
    setActiveIcon();
});
