function detectMob() {
    if (window.innerHeight > window.innerWidth) {
        return true;
    }
    else {
        return false;
    }
}

var ismobile = detectMob();
var theme = document.getElementsByTagName('link')[0];
if (ismobile == true) {
    theme.setAttribute('href', '/mobile.css');
} 