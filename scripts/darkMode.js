const html = document.querySelector('html');
const switchDarkMode = document.getElementById('modeSwitch');
const logoSquadHeader = document.getElementById('logoSquadHeader');

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  html.classList.add('dark-mode');
  logoSquadHeader.src = "/images/s6-logo-white.png";
  switchDarkMode.src = "/images/light-mode-white.svg";
}

switchDarkMode.addEventListener("click", function () {
  const html = document.querySelector('html');
  html.classList.toggle('dark-mode');

  let theme = "light";
  logoSquadHeader.src = "/images/s6-logo-black.png";
  switchDarkMode.src = "/images/dark-mode-black.svg";
  if (html.classList.contains('dark-mode')) {
    theme = "dark";
    logoSquadHeader.src = "/images/s6-logo-white.png";
    switchDarkMode.src = "/images/light-mode-white.svg";
  }
  localStorage.setItem("theme", theme);
});