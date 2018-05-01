var shoppingMarket = document.getElementById('shoppingMarket');
var shoppingList = document.getElementById('shoppingList');
var shoopingIcon = document.getElementById('shoppingIcon');
var subNav = document.getElementsByClassName('nav-sub')[0];
var carosel = document.getElementsByClassName('carosel')[0];
var phone = document.getElementById('phone');
var phoneList = document.getElementsByClassName('phone-list')[0];

var carosel1 = document.getElementById('1');
var carosel2 = document.getElementById('2');

// 购物车
shoppingMarket.onmouseover = function () {
    shoppingList.removeAttribute("hidden");
    shoopingIcon.removeAttribute("hidden");
}
shoppingMarket.onmouseleave = function () {
    shoppingList.setAttribute("hidden", "");
    shoppingIcon.setAttribute("hidden", "");
}

// 导航栏
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 100) {
        subNav.style.position = "fixed";
        phoneList.style.position = "fixed";
        phoneList.style.top = '90px';
        subNav.style.background = "linear-gradient(#ffffff, #eee)";
        subNav.style.width = "100%";
        subNav.style.top = "0";
        subNav.style.border = "1px solid #dadada";
    } else {
        subNav.style.position = "relative";
        phoneList.style.position = "absolute";
        phoneList.style.top = '190px';
        subNav.style.background = "transparent";
        subNav.style.border = "";
    }
}

// 轮播部分
var n = 0;
var timeId;

// 自动切换
function changeCarosel() {
    n = n++ % 2 + 1;
    carosel.style.backgroundImage = 'url(carosel' + n + '.webp)';
    timeId = setTimeout(changeCarosel, 4000);
}
timeId = setTimeout(changeCarosel, 4000);

// 手动切换
function clickCarosel(e) {
    e.onclick = function () {
        carosel.style.backgroundImage = 'url(carosel' + e.id + '.webp)';
        clearTimeout(timeId);
        timeId = setTimeout(changeCarosel, 4000);
    }
}

clickCarosel(carosel1);
clickCarosel(carosel2);

// 手机展示栏
phone.onmouseover = function () {
    phoneList.style.height = '322px';
    phoneList.style.transition = 'height 300ms';
    phoneList.style.boxShadow = ' 0 3px 3px 0 #8888883a';
    var test = phoneList.firstElementChild.firstElementChild.firstElementChild;
    var cd = test.firstElementChild;
    for (var i = 0; i < test.childElementCount; i++) {
        cd.style.opacity = '1';
        cd = cd.nextElementSibling;
    }
    // var event = document.createEvent('MouseEvents');
    // event.initMouseEvent("mouseover", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, phoneList);
}

function phoneHide(e, event) {
    if (event === 'onmouseleave') {
        e.onmouseleave = function () {
            phoneList.style.height = '0';
            phoneList.style.transition = 'height 300ms ease-in';
            phoneList.style.boxShadow = '';
            var test = phoneList.firstElementChild.firstElementChild.firstElementChild;
            var cd = test.firstElementChild;
            for (var i = 0; i < test.childElementCount; i++) {
                cd.style.opacity = '0';
                cd = cd.nextElementSibling;
            }
        }
    }
    if (event === 'onmouseover') {
        e.onmouseover = function () {
            phoneList.style.height = '0';
            phoneList.style.transition = 'height 300ms ease-in';
            phoneList.style.boxShadow = '';
            var test = phoneList.firstElementChild.firstElementChild.firstElementChild;
            var cd = test.firstElementChild;
            for (var i = 0; i < test.childElementCount; i++) {
                cd.style.opacity = '0';
                cd = cd.nextElementSibling;
            }
        }
    }
}

phoneHide(phoneList, 'onmouseleave');

var phoneBro = phone.parentElement.firstElementChild;
for (var i = 0; i < phone.parentElement.childElementCount; i++) {
    if (phoneBro === phone) {
        phoneBro = phoneBro.nextElementSibling;
        continue;
    }
    phoneHide(phoneBro,'onmouseover');
    phoneBro = phoneBro.nextElementSibling;
}

var otherSide=document.getElementsByClassName('nav-main')[0];
phoneHide(otherSide,'onmouseover');