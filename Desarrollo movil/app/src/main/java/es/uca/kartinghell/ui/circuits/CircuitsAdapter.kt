package es.uca.kartinghell.ui.circuits

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import es.uca.kartinghell.R

class CircuitsAdapter(private var circuitos: List<Circuito>) : RecyclerView.Adapter<CircuitsAdapter.CircuitoViewHolder>() {


    inner class CircuitoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView)
    {
        val TextNombre: TextView = itemView.findViewById(R.id.textViewCircuito)
        val TextDescr: TextView = itemView.findViewById(R.id.textViewCircuito)
        val RegistroTabla: TextView = itemView.findViewById(R.id.textRegistro)
        val FotoTabla: TextView = itemView.findViewById(R.id.TextFoto)
        val DescuentosTabla: TextView = itemView.findViewById(R.id.textDescuentos)
        val TiemposTabla: TextView = itemView.findViewById(R.id.textTablaTiempos)
        val CircuitoImagen: ImageView = itemView.findViewById(R.id.ImagenCircuito)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CircuitoViewHolder {
        val View = LayoutInflater.from(parent.context).inflate(R.layout.list_item_circuits, parent, false )
        return CircuitoViewHolder(View)
    }

    override fun onBindViewHolder(holder: CircuitoViewHolder, position: Int) {
        val circuitoactual = circuitos[position]
        holder.TextNombre.text = circuitoactual.Nombre
        holder.TextDescr.text = circuitoactual.Descripcion
        holder.RegistroTabla.text = circuitoactual.Registro
        holder.FotoTabla.text = circuitoactual.Foto
        holder.DescuentosTabla.text = circuitoactual.Descuentos
        holder.TiemposTabla.text = circuitoactual.Tabla
        holder.CircuitoImagen.setImageResource(circuitoactual.Imagen)
    }

    override fun getItemCount() = circuitos.size

    constructor() : this(emptyList())

    fun setCircuitos(circuitos: List<Circuito>)
    {
        this.circuitos = circuitos
    }
}