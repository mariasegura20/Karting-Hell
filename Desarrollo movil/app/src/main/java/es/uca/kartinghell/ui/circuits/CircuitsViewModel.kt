package es.uca.kartinghell.ui.circuits

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class CircuitsViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "This is Circuits Fragment"
    }
    val text: LiveData<String> = _text
}