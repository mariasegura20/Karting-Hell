function getReserva(bookingsID) {
    var myUrl = "/bookings/" + bookingsID;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(data) {
	    $("#resReserva").html(JSON.stringify(data[0]));
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });
}

function postReserva() {
    $.ajax({
        type: "POST",
        url: "/bookings",
        contentType: "application/json",
        dataType: "text",
        data: JSON.stringify({
            "tipo": "Indoor",
            "fecha": "Enero",
            "year": 2020
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

function getAllReservas() {
    var myUrl = "http://127.0.0.1:8080/bookings";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(data) {
	    	var html = "";
            for(var i = 0; i < data.length ; i++) {
                var reserva = data[i];
                html+= "<h3>" + reserva._id + "-" + reserva.nombre + " " + reserva.apellidos + "</h3>";
                html+= "<p>Fecha: "+ reserva.fecha + "</p>";
                html+= "<p>Nº de personas: " + reserva.personas + "</p>";
                html+= "<p>Tipo de pista: " + reserva.pista + "</p>";
                html+= "<p>Hora inicio: " + reserva.inicio + "</p>";
                html+= "<p>Hora fin: " + reserva.fin + "</p>";
                html+= "<hr>"
            }
            $("resReserva").html(html);
        },
        error: function(res) {
            alert("ERROR " + res.statusText);
        }
    });
}

function deleteReserva(bookingsID) {
    var myUrl = "http://127.0.0.1:8080/bookings" + bookingsID;
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: myUrl,
        success: function(data) {
	        $("#resReserva").html("<strong>Correcto: </strong> " + data.msg);
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });
}

function putReserva(bookingsID) {
    var myUrl = "/bookings/" + bookingsID;
    $.ajax({
        type: "PUT",
        dataType: "json",
        url: myUrl,
        contentType: "application/json",
        dataType: "text",
        data: JSON.stringify({
            "title": "Dunkirk2",
            "director": "Christopher Nolan",
            "year": 2023
        }),
        success: function(data) {
	    $("#resReserva").html(JSON.stringify(data[0]));
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });

}