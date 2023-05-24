package es.uca.kartinghell.ui.bookings

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import es.uca.kartinghell.databinding.FragmentBookingsBinding

class BookingsFragment : Fragment() {

    private var _binding: FragmentBookingsBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    private lateinit var recyclerView: RecyclerView
    private lateinit var adapter: BookingsAdapter
    private lateinit var viewModel: BookingsViewModel

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentBookingsBinding.inflate(inflater, container, false)
        val root: View = binding.root

        recyclerView = binding.recyclerView
        adapter = BookingsAdapter()
        recyclerView.adapter = adapter
        recyclerView.layoutManager = LinearLayoutManager(requireContext())

        return root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        viewModel = ViewModelProvider(this).get(BookingsViewModel::class.java)

        viewModel.getBookings().observe(viewLifecycleOwner) { bookings ->
            adapter.setBookings(bookings)
            adapter.notifyDataSetChanged()
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}