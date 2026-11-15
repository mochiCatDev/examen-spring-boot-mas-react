package com.examen.reciclaje.controllers;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import com.examen.reciclaje.repositories.PuntoReciclajeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/puntos")
@CrossOrigin(origins = "http://localhost:5173")
public class PuntoReciclajeController {
	private final PuntoReciclajeRepository repository;
	
	public PuntoReciclajeController(PuntoReciclajeRepository repository) {
		this.repository = repository;
	}

	@GetMapping
	public List<PuntoReciclaje> listar() {
		return repository.findAll();
	}

	@PostMapping
	public PuntoReciclaje guardar(@RequestBody PuntoReciclaje punto) {
		return repository.save(punto);
	}
}