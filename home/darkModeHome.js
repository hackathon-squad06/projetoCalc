const html = document.querySelector('html');
const switchDarkMode = document.getElementById('modeSwitch');
const logoSquadHeader = document.getElementById('logoSquadHeader');

// function switchMode() {
//   html.classList.toggle('dark-mode')

//   if (html.classList.contains('dark-mode')) {
//     logoSquadHeader.src = "/images/squad06-logo-white.svg";
//     switchDarkMode.src = "/images/light-mode-white.svg";
//     const darkModeHome = 'true'
//     sessionStorage.setItem('darkModeHome', darkModeHome)
//   } else {
//     logoSquadHeader.src = "/images/squad06-logo.svg";
//     switchDarkMode.src = "/images/dark-mode-black.svg";
//     const darkModeHome = 'false'
//     sessionStorage.setItem('darkModeHome', darkModeHome)
//   }
// }

// function getDarkMode() {
//   let darkModeResultado = sessionStorage.getItem('darkModeResult')
//   if (darkModeResultado) {
//     if (html.classList.contains('dark-mode')) {
//       return
//     }
//     else {
//       switchMode()
//     }
//   }
// }
// getDarkMode()


const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  html.classList.add('dark-mode');
  logoSquadHeader.src = "/images/squad06-logo-white.svg";
  switchDarkMode.src = "/images/light-mode-white.svg";
}

switchDarkMode.addEventListener("click", function () {
  const html = document.querySelector('html');
  html.classList.toggle('dark-mode');

  let theme = "light";
  logoSquadHeader.src = "/images/squad06-logo.svg";
  switchDarkMode.src = "/images/dark-mode-black.svg";
  if (html.classList.contains('dark-mode')) {
    theme = "dark";
    logoSquadHeader.src = "/images/squad06-logo-white.svg";
    switchDarkMode.src = "/images/light-mode-white.svg";
  }
  localStorage.setItem("theme", theme);
});