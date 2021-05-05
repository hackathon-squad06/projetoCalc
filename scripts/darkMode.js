const html = document.querySelector('html');
const switchDarkMode = document.getElementById('modeSwitch');
const logoSquadHeader = document.getElementById('logoSquadHeader');

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
    html.classList.add('dark-mode');
    switchDarkMode.src = "/images/light-mode-white.svg";
}

switchDarkMode.addEventListener("click", function () {
    const html = document.querySelector('html');
    html.classList.toggle('dark-mode');

    let theme = "light";
    switchDarkMode.src = "/images/dark-mode-white.svg";
    if (html.classList.contains('dark-mode')) {
        theme = "dark";

        switchDarkMode.src = "/images/light-mode-white.svg";
    }
    localStorage.setItem("theme", theme);
});