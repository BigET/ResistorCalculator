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
})
