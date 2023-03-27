function Verificarvalores()
{
    let nombre = document.getElementById("Nombreform").value;
    let apellidos = document.getElementById("Apellform").value;
    let personas = document.getElementById("Personasform").value;
    let Fechafullreserva = new Date(document.getElementById("Fechaform")).value;
    let pista = document.getElementById("Pistaform").value;
    let horaini = document.getElementById("Fechainicioform").value;
    let horafin = document.getElementById("Fechafinform").value;

    // Comparacion de nombre correcto
    const regex = /[a-zA-Z]+/g;
    const cad_nom = nombre.match(regex).join("");
    if(cad_nom !== nombre)
    {
        alert("Introduce un nombre valido");
        return false;
    }

    // Comparacion de apellidos correctos
    const cad_apell = apellidos.match(regex).join("");
    if(cad_apell !== apellidos)
    {
        alert("Introce unos apellidos validos");
        return false;
    }

    //comparacion de personas correcta
    if(pista == 1)
    {
        if(personas > 15)
        {
            alert("introduce una cantidad de personas validas");
            return false;
        }
    }

    if(pista == 2)
    {
        if(personas > 25)
        {
            alert("introduce una cantidad de personas validas");            
            return false;
        }
    }

    if(pista == 3)
    {
        if(personas > 15)
        {
            alert("introduce una cantidad de personas validas");            
            return false;
        }
    }

    //Comprobacion de seleccion de pistas correcta
    if(pista == null || pista == -1)
    {
        alert("Selecciona una pista");
        return false;
    }
    
    //comparacion horas correcta
    if(horaini > horafin)
    {
        alert("selecciona un rango de horas valido")
        return false;
    }

    //comparacion fechas
    const actual = new Date();
    if(Fechafullreserva < actual)
    {
        alert("Selecciona una fecha valida");
        return false;
    }
}