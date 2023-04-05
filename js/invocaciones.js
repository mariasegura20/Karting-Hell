function getReserva(movieId) {
    var myUrl = "/movies/" + movieId;
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
        url: "/movies",
        contentType: "application/json",
        dataType: "text",
        data: JSON.stringify({
            "title": "Dunkirk",
            "director": "Christopher Nolan",
            "year": 2017
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
    var myUrl = "/movies";
    $.ajax({
        type: "GET",
        dataType: "json",
        url: myUrl,
        success: function(data) {
	    	$("#resReserva").html(JSON.stringify(data));
        },
        error: function(res) {
            alert("ERROR " + res.statusText);
        }
    });
}

function deleteReserva(movieId) {
    var myUrl = "/movies/" + movieId;
    $.ajax({
        type: "DELETE",
        dataType: "json",
        url: myUrl,
        success: function(data) {
	        $("#resReserva").html(JSON.stringify(data));
        },
        error: function(res) {
            let mensaje = JSON.parse(res.responseText);
            alert("ERROR: " + mensaje.msg);
        }
    });
}

function putReserva(movieId) {
    var myUrl = "/movies/" + movieId;
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