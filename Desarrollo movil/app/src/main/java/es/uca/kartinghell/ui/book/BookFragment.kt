package es.uca.kartinghell.ui.book

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.EditText
import android.widget.Toast
import androidx.fragment.app.Fragment
import es.uca.kartinghell.R
import es.uca.kartinghell.databinding.FragmentBookBinding
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class BookFragment : Fragment() {

    private var _binding: FragmentBookBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentBookBinding.inflate(inflater, container, false)
        val root: View = binding.root

        binding.buttonAccept.setOnClickListener {
            val name = root.findViewById<EditText>(R.id.editTextBookName).text.toString()
            val dni = root.findViewById<EditText>(R.id.editTextBookDni).text.toString()
            val phone = root.findViewById<EditText>(R.id.editTextBookPhone).text.toString()
            val email = root.findViewById<EditText>(R.id.editTextBookEmail).text.toString()
            val startHour = root.findViewById<EditText>(R.id.editTextBookStartHour).text.toString()
            val endHour = root.findViewById<EditText>(R.id.editTextBookEndHour).text.toString()
            val date = root.findViewById<EditText>(R.id.editTextBookDate).text.toString()
            val numPeople = root.findViewById<EditText>(R.id.editTextBookNumPeople).text.toString()
            val suggestions = root.findViewById<EditText>(R.id.editTextBookSuggestions).text.toString()
            //val circuit = root.findViewById<EditText>(R.id.spinnerBookCircuit).toString()

            if (name.isEmpty() || dni.isEmpty() || phone.isEmpty() || email.isEmpty() || startHour.isEmpty() || endHour.isEmpty() || date.isEmpty() || numPeople.isEmpty()) {
                Toast.makeText(requireContext(), "Rellene todos los campos", Toast.LENGTH_SHORT).show()
            }

            Toast.makeText(requireContext(), "Reserva añadida correctamente!", Toast.LENGTH_SHORT).show()
        }

        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}