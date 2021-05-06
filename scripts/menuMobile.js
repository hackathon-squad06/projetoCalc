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

onload = function () {
    if (window.matchMedia("(max-width: 595px)").matches) {
        document.querySelector(".menu").style.display = "none"
        var body = document.body;
        var except = document.getElementsByTagName('header')[0];

        body.addEventListener("click", function () {
            document.querySelector(".menu").style.display = "none"
        }, false);
        except.addEventListener("click", function (ev) {
            document.querySelector(".menu").style.display = "flex"
            ev.stopPropagation();
        }, false);
    } else {
        document.querySelector(".menu").style.display = "flex"
    }
}

onresize = function () {
    document.querySelector(".menu").style.display = "none"
    var body = document.body;
    var header = document.getElementsByTagName('header')[0];
    if (window.matchMedia("(max-width: 595px)").matches) {
        body.addEventListener("click", function () {
            document.querySelector(".menu").style.display = "none"
        }, false);
        header.addEventListener("click", function (ev) {
            document.querySelector(".menu").style.display = "flex"
            ev.stopPropagation();
        }, false);
    } else if (!window.matchMedia("(max-width: 595px)").matches) {
        body.addEventListener("click", function () {
            document.querySelector(".menu").style.display = "flex"
        }, false);
        document.querySelector(".menu").style.display = "flex"
    }
}