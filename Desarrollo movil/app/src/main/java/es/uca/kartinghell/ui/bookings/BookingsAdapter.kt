package es.uca.kartinghell.ui.bookings

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import es.uca.kartinghell.R

class BookingsAdapter(private var bookings: List<Bookings>) :
    RecyclerView.Adapter<BookingsAdapter.BookingsViewModel>() {

    // Esta clase almacena las referencias de los elementos de la vista
    // (los widgets o views) que se muestran en cada elemento de la lista.
    inner class BookingsViewModel(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val nameTextView: TextView = itemView.findViewById(R.id.textViewBookingsName)
        val dateTextView: TextView = itemView.findViewById(R.id.textViewBookingsDate)
        val startHourTextView: TextView = itemView.findViewById(R.id.textViewBookingsStartHour)
        val viewButton: Button = itemView.findViewById(R.id.buttonView)
    }

    constructor() : this(emptyList())

    // El método onCreateViewHolder() se encarga de crear una nueva instancia de MascotaViewHolder,
    // inflando el diseño de vista desde el archivo de diseño XML que se proporciona en el
    // parámetro viewType.
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): BookingsViewModel {
        val itemView = LayoutInflater.from(parent.context)
            .inflate(R.layout.fragment_bookings, parent, false)
        return BookingsViewModel(itemView)
    }

    // El método onBindViewHolder() se llama para establecer los datos del objeto Bookings en la
    // vista BookingsViewHolder.
    override fun onBindViewHolder(holder: BookingsAdapter.BookingsViewModel, position: Int) {
        val currentBooking = bookings[position]
        holder.nameTextView.text = currentBooking.name
        holder.dateTextView.text = currentBooking.date
        holder.startHourTextView.text = currentBooking.startHour

        holder.viewButton.setOnClickListener {
            Toast.makeText(holder.itemView.context, "Ver detalles de ${currentBooking.name}", Toast.LENGTH_SHORT).show()
        }
    }

    // El método getItemCount() devuelve el número de elementos en la lista de Bookings
    // proporcionado en el constructor de BookingsAdapter.
    override fun getItemCount() = bookings.size

    fun setBookings(bookings: List<Bookings>) {
        this.bookings = bookings
    }
}