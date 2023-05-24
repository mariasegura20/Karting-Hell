package es.uca.kartinghell.ui.bookings

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.core.content.ContentProviderCompat.requireContext
import androidx.recyclerview.widget.RecyclerView
import es.uca.kartinghell.R

class BookingsAdapter(private var bookings: List<Bookings>) : RecyclerView.Adapter<BookingsAdapter.BookingsViewHolder>() {

    // Esta clase almacena las referencias de los elementos de la vista
    // (los widgets o views) que se muestran en cada elemento de la lista.
    class BookingsViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val nameTextView: TextView = itemView.findViewById(R.id.textViewBookingsName)
        val dateTextView: TextView = itemView.findViewById(R.id.textViewBookingsDate)
        val numPeopleTextView: TextView = itemView.findViewById(R.id.textViewBookingsNumPeople)
        val startHourTextView: TextView = itemView.findViewById(R.id.textViewBookingsStartHour)
        val endHourTextView: TextView = itemView.findViewById(R.id.textViewBookingsEndHour)
        val editButton: Button = itemView.findViewById(R.id.buttonEdit)
        val deleteButton: Button = itemView.findViewById(R.id.buttonDelete)
    }

    constructor() : this(emptyList())

    // El método onCreateViewHolder() se encarga de crear una nueva instancia de MascotaViewHolder,
    // inflando el diseño de vista desde el archivo de diseño XML que se proporciona en el
    // parámetro viewType.
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): BookingsViewHolder {
        val itemView = LayoutInflater.from(parent.context)
            .inflate(R.layout.list_item_bookings, parent, false)
        return BookingsViewHolder(itemView)
    }

    // El método onBindViewHolder() se llama para establecer los datos del objeto Bookings en la
    // vista BookingsViewHolder.
    @SuppressLint("ResourceType")
    override fun onBindViewHolder(holder: BookingsAdapter.BookingsViewHolder, position: Int) {
        val currentBooking = bookings[position]
        holder.nameTextView.text = currentBooking.name
        holder.dateTextView.text = currentBooking.date
        holder.numPeopleTextView.text = currentBooking.numPeople.toString() + " personas"
        holder.startHourTextView.text = currentBooking.startHour + " - "
        holder.endHourTextView.text = currentBooking.endHour
        holder.editButton.setOnClickListener {
            Toast.makeText(holder.itemView.context, "En estos momentos no está disponible esta opción...", Toast.LENGTH_SHORT).show()
        }
        holder.deleteButton.setOnClickListener {
            Toast.makeText(holder.itemView.context, "En estos momentos no está disponible esta opción...", Toast.LENGTH_SHORT).show()
        }
    }


    // El método getItemCount() devuelve el número de elementos en la lista de Bookings
    // proporcionado en el constructor de BookingsAdapter.
    override fun getItemCount() = bookings.size

    fun setBookings(bookings: List<Bookings>) {
        this.bookings = bookings
    }
}