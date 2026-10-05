const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if(saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme)
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute( 'arial-label', theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

applyTheme(getPreferredTheme());

themeToggle.addEventListener('click', () => {
    const current = htmlElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if( !localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});