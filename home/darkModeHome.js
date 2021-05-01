const html = document.querySelector('html');
const switchDarkMode = document.getElementById('modeSwitch');
const logoSquadHeader = document.getElementById('logoSquadHeader');

function switchMode() {
  html.classList.toggle('dark-mode')

  if (html.classList.contains('dark-mode')) {
    logoSquadHeader.src = "/images/squad06-logo-white.svg";
    switchDarkMode.src = "/images/light-mode-white.svg";
    const darkModeHome = true
    sessionStorage.setItem('darkModeHome', darkModeHome)
  } else {
    logoSquadHeader.src = "/images/squad06-logo.svg";
    switchDarkMode.src = "/images/dark-mode-black.svg";
    const darkModeHome = false
    sessionStorage.setItem('darkModeHome', darkModeHome)
  }
}

function getDarkMode() {
  let darkModeResult = sessionStorage.getItem('darkModeResult')
  if (darkModeResult) {
    if (html.classList.contains('dark-mode')) {
      return
    }
    else {
      switchMode()
      sessionStorage.removeItem('darkModeHome')
      sessionStorage.removeItem('darkModeResult')
    }
  }
}

getDarkMode()