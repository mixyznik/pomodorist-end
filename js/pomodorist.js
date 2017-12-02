var y;

function stop() {
    clearInterval(y);
}

var sekund = 60;
var minut = 24;

function count() {

    document.getElementById("zemo").innerHTML = --sekund;
    document.getElementById("stojko").innerHTML = minut;
    if (sekund == 1) {
        sekund = 60;
        minut = minut - 1;
    }
    if (minut < 0) {
        clearInterval(y);
        document.getElementById("zemo").innerHTML = "End";
        document.getElementById("stojko").innerHTML = "End";
        document.getElementById("space").innerHTML = " ";
    }

}

function start() {

    y = setInterval(count, 1000);

}

function reset() {
    location.reload(true);
}