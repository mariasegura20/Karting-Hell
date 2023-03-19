let currentBackground = 1;
let background = document.getElementsByClassName("preview-circuits")[0];
let nameCircuit = document.getElementById("nameCircuit");

function newBackground(direction) {
    uploadCurrentBackground(direction);

    /* Media query */
    var x = window.matchMedia("(max-width: 426px)")
    var y = window.matchMedia("(max-width: 769px)")
    if (x.matches) {
        changeBackgroundPhone();
    } else if (y.matches) {
        changeBackgroundTablet();
    } else {
        changeBackgroundPC();
    }
}

function uploadCurrentBackground(direction) {
    if(direction == 'izq') {
        currentBackground = (currentBackground-1)%3;
        if (currentBackground < 0)
            currentBackground = 2
    }
    else
        currentBackground = (currentBackground+1)%3;
}

function changeBackgroundPC() {
    switch (currentBackground) {
        case 0:
            background.style.background = "white url(img/circuito_competición_negro.png) no-repeat center/ auto 50vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text class='text-top' x='30%' y='97%'>Circuito Competición</text>";
            break;
        case 1:
            background.style.background = "white url(img/circuito_indoor_negro.png) no-repeat center/ auto 50vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text class='text-top' x='36%' y='97%'>Circuito Indoor</text>";
            break;
        case 2:
            background.style.background = "white url(img/circuito_outdoor_negro.png) no-repeat center/ auto 50vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text class='text-top' x='34%' y='97%'>Circuito Outdoor</text>";
            break;
    }
}

function changeBackgroundTablet() {
    switch (currentBackground) {
        case 0:
            background.style.background = "white url(img/circuito_competición_negro.png) no-repeat center/ auto 35vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text class='text-top' x='30%' y='97%'>Circuito Competición</text>";
            break;
        case 1:
            background.style.background = "white url(img/circuito_indoor_negro.png) no-repeat center/ auto 35vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text class='text-top' x='36%' y='97%'>Circuito Indoor</text>";
            break;
        case 2:
            background.style.background = "white url(img/circuito_outdoor_negro.png) no-repeat center/ auto 35vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text class='text-top' x='34%' y='97%'>Circuito Outdoor</text>";
            break;
    }
}

function changeBackgroundPhone() {
    switch (currentBackground) {
        case 0:
            background.style.background = "white url(img/circuito_competición_negro.png) no-repeat center/ auto 35vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text id='phone' class='text-top' x='23%' y='93%'>Circuito Competición</text>";
            break;
        case 1:
            background.style.background = "white url(img/circuito_indoor_negro.png) no-repeat center/ auto 35vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text id='phone' class='text-top' x='31%' y='93%'>Circuito Indoor</text>";
            break;
        case 2:
            background.style.background = "white url(img/circuito_outdoor_negro.png) no-repeat center/ auto 35vh";
            nameCircuit.innerHTML = "<polygon points='-75,0 175,0 75,100 25,100' /> <text id='phone' class='text-top' x='29%' y='93%'>Circuito Outdoor</text>";
            break;
    }
}