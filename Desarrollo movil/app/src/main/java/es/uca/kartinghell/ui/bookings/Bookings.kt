package es.uca.kartinghell.ui.bookings

data class Bookings(val name: String, val dni: String, val phone: Long, val email: String, val date: String, val startHour: String, val endHour: String, val numPeople: Int, val suggestions: String?, val circuit: String)