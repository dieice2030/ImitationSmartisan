var shoppingMarket = document.getElementById('shoppingMarket');
var shoppingList = document.getElementById('shoppingList');
var shoopingIcon = document.getElementById('shoppingIcon');

var subNav=document.getElementsByClassName('nav-sub')[0];

shoppingMarket.onmouseover = function () {
    shoppingList.removeAttribute("hidden");
    shoopingIcon.removeAttribute("hidden");
}
shoppingMarket.onmouseleave = function () {
    shoppingList.setAttribute("hidden", "");
    shoppingIcon.setAttribute("hidden", "");
}

window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 100) {
        subNav.style.position="fixed";
        subNav.style.background="linear-gradient(#ffffff, #eee)";
        subNav.style.width="100%";
        subNav.style.top="0";
        subNav.style.border="1px solid #dadada";
    }
    else{
        subNav.style.position="relative";
        subNav.style.background="transparent";
        subNav.style.border="";
    }
}