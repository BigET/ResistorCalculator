function getIndex(strip) {
    var pardiv = strip.firstElementChild;
    var fcdiv = pardiv.firstElementChild;
    var prect = pardiv.getBoundingClientRect();
    var fcrect = fcdiv.getBoundingClientRect();
    var off = prect.top - fcrect.top;
    var step = fcrect.height;
    return Math.max(0, Math.floor((off / step) + 0.5));
}

function getStripText(strip) {
    return strip.firstElementChild.children[getIndex(strip)].innerHTML;
}

function calculate() {
    var strips = document.getElementsByClassName("strip");
    var resText;
    var multipl = getIndex(strips[3]);
    var td = !strips[2].classList.contains("optional");
    var trd0 = td ? getStripText(strips[2]) : "0";
    var trd = trd0 != 0 ? trd0 : "";
    var fst = getStripText(strips[0]);
    var snd0 = getStripText(strips[1]);
    var snd = snd0 != 0 || trd0 != 0 ? snd0 : "";
    if (td) multipl += 1;
    switch(multipl) {
    case 0:resText = "R".concat(fst, snd, trd); break;
    case 1:resText = fst.concat("R", snd, trd); break;
    case 2:resText = fst.concat(snd0, "R", trd); break;
    case 3:resText = fst.concat(snd0, trd0, "R"); break;
    case 4:resText = fst.concat("K", snd, trd); break;
    case 5:resText = fst.concat(snd0, "K", trd); break;
    case 6:resText = fst.concat(snd0, trd0, "K"); break;
    case 7:resText = fst.concat("M", snd, trd); break;
    case 8:resText = fst.concat(snd0, "M", trd); break;
    case 9:resText = fst.concat(snd0, trd0, "M"); break;
    case 10:resText = fst.concat(snd0, trd0, "0M"); break;
    }
    resText = resText.concat(getStripText(strips[4]), strips[5].classList.contains("optional") ? "" : ", " + getStripText(strips[5]));
    document.getElementById("result").innerHTML = resText;
}

document.getElementById("stripNr").addEventListener("change",
function() {
    var elem = document.getElementById("stripNr");
    if (elem.value == 4) {
        document.getElementById("thirdStrip").classList.add("optional");
        document.getElementById("sixthStrip").classList.add("optional");
    }
    if (elem.value == 5) {
        document.getElementById("thirdStrip").classList.remove("optional");
        document.getElementById("sixthStrip").classList.add("optional");
    }
    if (elem.value == 6) {
        document.getElementById("thirdStrip").classList.remove("optional");
        document.getElementById("sixthStrip").classList.remove("optional");
    }
    calculate();
})

function initStrips() {
    var strips = document.getElementsByClassName("strip");
    var i;
    for (i = 0; i < strips.length; ++i) {
        strips[i].firstElementChild.addEventListener("scroll", function() { calculate(); });
    }
    calculate();
}

initStrips();
