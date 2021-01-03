var ps = 15;

function nfp(urpx) {
    return Number(urpx.replace("px", ""))
}

var r = document.getElementById('right');
var l = document.getElementById('left');
var b = document.getElementById('ball');

var rscore = document.getElementById('scoreleft');
var lscore = document.getElementById('scoreright');
var ogoal = document.getElementById('goal');

var w = window.innerWidth;
var h = window.innerHeight;

var map = [];
onkeydown = onkeyup = function(e) {
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type == 'keydown';

}

function keydown() {

    if (map[40]) {
        if (nfp(r.style.top) + ps > h - 80)
            r.style.top = h - 80 + "px";
        else
            r.style.top = nfp(r.style.top) + ps + "px";
    }


    else if (map[38]) {
        if (nfp(r.style.top) - ps < 0)
            r.style.top = 0 + "px";
        else
            r.style.top = nfp(r.style.top) - ps + "px";
    }

    if (map[83]) {
        if (nfp(l.style.top) + ps > h - 80)
            l.style.top = h - 80 + "px";
        else
            l.style.top = nfp(l.style.top) + ps + "px";
    }


    else if (map[87]) {
        if (nfp(l.style.top) - ps < 0)
            l.style.top = 0 + "px";
        else
            l.style.top = nfp(l.style.top) - ps + "px";
    }
}


var speedx = 3,
    speedy = 1;
var balltime = 1;
b.style.left = w / 2 + "px";

function ball() {
    b.style.left = nfp(b.style.left) + speedx + "px";
    b.style.top = nfp(b.style.top) + speedy + "px";
}

function moveball() {
    ball();

    if (h < nfp(b.style.top) + 15 || nfp(b.style.top) < 0) {
        speedy *= -1;
    }

    if (nfp(b.style.left) >= w - 27) {
        if (nfp(r.style.top) <= nfp(b.style.top) + 15 && nfp(r.style.top) + 85 >= nfp(b.style.top)) {
            speedx *= -1;
        } else if (nfp(b.style.left) >= w - 15)
            goal('left');
    }

    if (nfp(b.style.left) <= 12) {
        if (nfp(l.style.top) <= nfp(b.style.top) + 15 && nfp(l.style.top) + 85 >= nfp(b.style.top)) {
            speedx *= -1;
        } else if (nfp(b.style.left) <= 0)
            goal('right');
    }

    setTimeout(function() {
        moveball()
    }, balltime);
}

setInterval(function() {
    keydown();
}, 10);
moveball();

function goal(pos) {

    ogoal.style.color = "white";

    setTimeout(function() {
        ogoal.style.color = "black"
    }, 1000);

    if (pos == "left")
        rscore.innerHTML = Number(rscore.innerHTML) + 5;
    else
        lscore.innerHTML = Number(lscore.innerHTML) + 5;


    speedx *= -1;
    b.style.left = w / 2 + "px";


}
