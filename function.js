var menuOptions = document.getElementsByClassName("nav-menu-item");
var popupMessage = document.getElementById("nav-message");
var button = document.getElementById("button-download");
var popupDownload = document.getElementById("button-message");

for (var i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function(){
        popupMessage.style.opacity="1";
        popupMessage.style.transform="translateY(0)";
        setTimeout(function(){
            popupMessage.style.opacity="0";
            popupMessage.style.transform="translateY(20px)";
        },1000);
    });
};

button.addEventListener("click", function(){
    popupDownload.style.opacity="1";
    popupDownload.style.transform="translateX(0)";
    setTimeout(function(){
        popupDownload.style.opacity="0";
        popupDownload.style.transform="translateX(10px)";
    },1000);
});