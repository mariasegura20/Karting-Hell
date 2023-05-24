package es.uca.kartinghell.ui.bookings

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class BookingsViewModel : ViewModel() {
    private val bookingsLiveData = MutableLiveData<List<Bookings>>()

    init {
        // Lista de reservas
        val bookings = listOf(
            Bookings("Carlos", "12345678A", 9956111111, "carlos@gm.es", "28/05/2023", "17:30", "18:30", 10, "", "Indoor"),
            Bookings("María", "87654321B", 993646735, "maria@gm.es", "28/05/2023", "19:00", "19:30", 5, "", "Outdoor"),
            Bookings("Alejandro", "12345678A", 673868364, "alejandro@gm.es", "30/05/2023", "19:30", "20:30", 11, "", "Competición"),
            Bookings("David", "12345678A", 693847361, "david@gm.es", "12/06/2023", "17:00", "18:00", 7, "", "Outdoor")

        )
        bookingsLiveData.value = bookings
    }

    fun getBookings(): LiveData<List<Bookings>> {
        return bookingsLiveData
    }
}