// index.js or a separate JavaScript file
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

// Initialize theme based on user preference or system setting
document.addEventListener('DOMContentLoaded', () => {
    const userPreferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || userPreferredTheme);
    
    // Save theme preference in local storage
    document.documentElement.addEventListener('data-theme-change', () => {
        localStorage.setItem('theme', document.documentElement.getAttribute('data-theme'));
    });
});
