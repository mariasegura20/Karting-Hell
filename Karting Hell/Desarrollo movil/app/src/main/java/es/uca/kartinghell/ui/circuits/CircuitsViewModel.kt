package es.uca.kartinghell.ui.circuits

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import es.uca.kartinghell.R

class CircuitsViewModel : ViewModel() {

    private val LiveCircuitos = MutableLiveData<List<Circuito>>()

        init {
            val circuitos = listOf(
                Circuito("Indoor", R.drawable.circuito_indoor_negro, "442 metros de circuito con karts de 270cv, pueden participar hasta 15 personas. Cuesta 10 euros", "Si", "Si" , "No", "No"),
                Circuito("Outdoor", R.drawable.circuito_outdoor_negro, "538 metros de circuito con karts de 300cv, pueden participar hasta 25 personas. Cuesta 15 euros", "Si", "Si", "Si", "No"),
                Circuito("Competicion", R.drawable.circuito_competicion_negro, "480 metros de circuito con karts de 390cv, pueden participar hasta 15 personas. Cuesta 20 euros", "Si", "Si", "Si", "Si")
            )
            LiveCircuitos.value = circuitos
        }
    fun getCircuitos() : LiveData<List<Circuito>>
    {
        return LiveCircuitos
    }
}