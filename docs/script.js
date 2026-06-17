const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function updateButtonIcon(theme) {
    toggleButton.textContent = theme === 'light' ? '☀️' : '🌙';
}

toggleButton.addEventListener('click', () => {
    if (body.dataset.theme === 'light') {
        body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
        updateButtonIcon('dark');
    } else {
        body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
        updateButtonIcon('light');
    }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.dataset.theme = savedTheme;
updateButtonIcon(savedTheme);
