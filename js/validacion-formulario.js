/*** BOTÓN DE CONTINUAR ***/
// Obtener los botones de "Continuar"
const btnPersonalData = document.getElementById('btn-personal-data');
const btnRentData = document.getElementById('btn-rent-data');

// Obtener las secciones correspondientes
const personalDataSection = document.querySelector('.personal-data');
const rentDataSection = document.querySelector('.rent-data');

const inputNombre = document.getElementsByClassName('alphabetic-text');
const numPersonas = parseInt(document.getElementById("numPersonas"));
const fecha = document.getElementById("date");

// Agregar un evento de clic a cada botón
btnPersonalData.addEventListener('click', (event) => {
    event.preventDefault();
    if (!validarTexto()) {
        inputNombre.style.background='#FF0000';
    }
    else if (!validarFecha()) {
        fecha.style.background='#FF0000';
    }
    else {
        personalDataSection.style.display = 'none';
        rentDataSection.style.display = 'flex';
    }
});

btnRentData.addEventListener('click', (event) => {
    event.preventDefault();
    if (!validarCapacidadPista()) {
        numPersonas.style.background='#FF0000';
    }
    else if (!validarHoras()) {
        const horas = document.getElementById("time");
        horas.style.background='#FF0000';
    }
    else {
        alert("Reserva finalizada... ¡Nos vemos pronto!");
    }
});


/*** VALIDACIONES ***/
function validarTexto() {
    const expresionRegular = /^[a-zA-Z]+$/;
    return expresionRegular.test(inputNombre.value);
}

function validarFecha() {
    var fechaActual = new Date();
    var fechaSeleccionada = new Date(document.getElementById("date").value);

    return(fechaSeleccionada > fechaActual)
}

function validarCapacidadPista() {
    const pista = document.querySelector('select[name="Tipo de pista"]').value;
    if (pista == "Outdoor") {
        capacidadPista = 25;
    }
    else {
        capacidadPista = 15;
    }
    
    return (numPersonas.valueOf <= capacidadPista);
}

function validarHoras() {
    const fechaActual = new Date();
    const fechaHoraInicial = new Date(`${fechaActual.toDateString()} ${horaInicial}`);
    const fechaHoraFinal = new Date(`${fechaActual.toDateString()} ${horaFinal}`);

    return (fechaHoraInicial > fechaHoraFinal)
}
