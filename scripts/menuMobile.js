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
