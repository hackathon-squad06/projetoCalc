botao = document.querySelector("#btnScroll")
botao.addEventListener("click", scrollUp)

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function btnScroll() {
    if (window.scrollY === 0) {
        document.querySelector("#btnScroll").style.display = "none";
    } else {
        document.querySelector("#btnScroll").style.display = "block";
    }
}

window.addEventListener("scroll", btnScroll)