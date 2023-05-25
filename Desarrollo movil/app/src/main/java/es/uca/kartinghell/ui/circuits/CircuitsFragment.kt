package es.uca.kartinghell.ui.circuits

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView

import es.uca.kartinghell.databinding.FragmentCircuitsBinding

class CircuitsFragment : Fragment() {

    private var _binding: FragmentCircuitsBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    private lateinit var RecyclerView: RecyclerView
    private lateinit var Adapter: CircuitsAdapter
    private lateinit var ViewModel : CircuitsViewModel


    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val slideshowViewModel =
            ViewModelProvider(this).get(CircuitsViewModel::class.java)

        _binding = FragmentCircuitsBinding.inflate(inflater, container, false)
        val root: View = binding.root

        RecyclerView = binding.recyclerView
        Adapter = CircuitsAdapter()
        RecyclerView.adapter = Adapter
        RecyclerView.layoutManager = LinearLayoutManager(requireContext())

        return root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        ViewModel = ViewModelProvider(this).get(CircuitsViewModel::class.java)

        ViewModel.getCircuitos().observe(viewLifecycleOwner) {
            circuitos-> Adapter.setCircuitos(circuitos)
            Adapter.notifyDataSetChanged()
        }
    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}