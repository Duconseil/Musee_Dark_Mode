// const toggleButton = document.getElementById('toggleMode');
const toggleButton = document.querySelector('#toggleMode');
const main = document.querySelector('#main-header');

toggleButton.addEventListener('click', () => {
    const body = document.body;

    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'Mode clair';
    } else {
        body.classList.add("dark");
        // body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'Mode sombre';
    }
});