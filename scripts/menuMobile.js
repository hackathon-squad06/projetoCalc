onload = function () {
    document.querySelector(".menuMobile").addEventListener("click", function () {
        if (document.querySelector(".menu").style.display == "flex") {
            document.querySelector(".menu").style.display = "none";
        }
        else {
            document.querySelector(".menu").style.display = "flex";
        }
    });
};

var modal = document.getElementsByClassName("menuMobile");
window.addEventListener('click', function (e) {
    if (outsideClick(e, modal)) {
        document.querySelector(".menu").style.display = "none";
    }
});

function outsideClick(event, notelem) {
    // check outside click for multiple elements
    var clickedOut = true, i, len = notelem.length;
    for (i = 0; i < len; i++) {
        if (event.target == notelem[i] || notelem[i].contains(event.target)) {
            clickedOut = false;
        }
    }
    if (clickedOut) return true;
    else return false;
}