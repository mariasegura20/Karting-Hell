function getReserva() {
    var bookingsID = document.getElementById("input_get").value;
    var myUrl = "/bookings/" + bookingsID;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(data) {
            var html = "";
            html += "<h3 id=primero>" + data[0]._id + " - " + data[0].nombre +" "+ data[0].apellidos + "</h3>";
            html += "<p>Fecha: " + data[0].fecha + "</p>";
            html += "<p>Número de personas: " + data[0].personas + "</p>";
            html += "<p>Pista: " + data[0].pista + "</p>";
            html += "<p>Hora de entrada: " + data[0].inicio + "</p>";
            html += "<p>Hora de salida: " + data[0].fin + "</p>";
            html += "<hr>";
            $("#resReserva").html(html);
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });
}

function postReserva() {
    var myUrl = "/bookings";
    var nombre = document.getElementById("input_nombre").value;
    var apellidos = document.getElementById("input_apellidos").value;
    var fecha = document.getElementById("input_fecha").value;
    var personas = document.getElementById("input_personas").value;
    var pista = document.getElementById("input_pista").value;
    var inicio = document.getElementById("input_inicio").value;
    var fin = document.getElementById("input_fin").value;
    $.ajax({
        type: "POST",
        url: myUrl,
        contentType: "application/json",
        dataType: "text",
        data: JSON.stringify({
            "nombre" : nombre,
            "apellidos" : apellidos,
            "fecha" : fecha,
            "personas" : personas,
            "pista" : pista,
            "inicio" : inicio,
            "fin" : fin
        }),
        success: function(data) {
            d = JSON.parse(data);
           $("#resReserva").html(d.msg);
        },
        error: function(res) {
            alert("ERROR: " + res.statusText);
        }
    });
}
function getAllDelete() {
    var myUrl = "/bookings";
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: myUrl,
        success: function(data) {
            d = JSON.parse(data);
           $("#resReserva").html(d.msg);
        },
        error: function(res) {
            alert("ERROR: " + res.statusText);
        }
    });
}
function getAllReservas() {
    var myUrl = "/bookings";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                var reserva = data[i];
                html += "<h3 id=primero>" + reserva._id + " - " + reserva.nombre +" "+ reserva.apellidos + "</h3>";
                html += "<p>Fecha: " + reserva.fecha + "</p>";
                html += "<p>Numero de personas: " + reserva.personas + "</p>";
                html += "<p>Pista: " + reserva.pista + "</p>";
                html += "<p>Hora de entrada: " + reserva.inicio + "</p>";
                html += "<p>Hora de salida: " + reserva.fin + "</p>";
                html += "<hr>";
            }
            $("#resReserva").html(html);
        },
        error: function(res) {
            alert("ERROR " + res.statusText);
        }
    });
}

function deleteReserva() {
    var bookingsID = document.getElementById("input_get").value; 
    var myUrl = "/bookings/" + bookingsID;
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: myUrl,
        success: function(data) {
            $("#resReserva").html("<strong> " + data.msg + "</strong>");
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });
}

function putReserva() {
    var bookingsID = document.getElementById("input_get").value;
    var myUrl = "/bookings/" + bookingsID;
    var nombre = document.getElementById("input_nombre").value;
    var apellidos = document.getElementById("input_apellidos").value;
    var fecha = document.getElementById("input_fecha").value;
    var personas = document.getElementById("input_personas").value;
    var pista = document.getElementById("input_pista").value;
    var inicio = document.getElementById("input_inicio").value;
    var fin = document.getElementById("input_fin").value;
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: myUrl,
        contentType: "application/json",
        dataType: "text",
        data: JSON.stringify({
            "nombre" : nombre,
            "apellidos" : apellidos,
            "fecha" : fecha,
            "personas" : personas,
            "pista" : pista,
            "inicio" : inicio,
            "fin" : fin
        }),
        success: function(data) {
            d = JSON.parse(data);
            $("#resReserva").html(d.msg);
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });

}