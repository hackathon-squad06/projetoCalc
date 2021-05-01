const html = document.querySelector('html');
const switchDarkMode = document.getElementById('modeSwitch');
const logoSquadHeader = document.getElementById('logoSquadHeader');

function switchMode() {
  html.classList.toggle('dark-mode')

  if (html.classList.contains('dark-mode')) {
    logoSquadHeader.src = "/images/squad06-logo-white.svg";
    switchDarkMode.src = "/images/light-mode-white.svg";
  } else {
    logoSquadHeader.src = "/images/squad06-logo.svg";
    switchDarkMode.src = "/images/dark-mode-black.svg";
  }
}

switchMode()
