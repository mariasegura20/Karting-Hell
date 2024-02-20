package es.uca.kartinghell.ui.bookings

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class BookingsViewModel : ViewModel() {
    private val bookingsLiveData = MutableLiveData<List<Bookings>>()

    init {
        // Lista de reservas
        val bookings = listOf(
            Bookings("Luna", "12345678A", "9956111111", "correo@gm.es", "12/12/12", "17:30", "18:30", 10, "", "Indoor"),
            Bookings("Luna", "12345678A", "9956111111", "correo@gm.es", "12/12/12", "17:30", "18:30", 10, "", "Indoor"),
            Bookings("Luna", "12345678A", "9956111111", "correo@gm.es", "12/12/12", "17:30", "18:30", 10, "", "Indoor"),
            Bookings("Luna", "12345678A", "9956111111", "correo@gm.es", "12/12/12", "17:30", "18:30", 10, "", "Indoor")

        )
        bookingsLiveData.value = bookings
    }

    fun getBookings(): LiveData<List<Bookings>> {
        return bookingsLiveData
    }
}