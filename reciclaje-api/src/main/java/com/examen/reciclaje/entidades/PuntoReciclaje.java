package com.examen.reciclaje.entidades;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "punto_reciclaje")
public class PuntoReciclaje {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(nullable = false)
	private String nombre;

	@Column(nullable = false)
	private String sector;

	@Column(nullable = false)
	private String material;

	@Column(nullable = false)
	private Integer capacidad;

	// Constructor vacio
	public PuntoReciclaje() {
		super();
	}

	// Constructor con parametros
	public PuntoReciclaje(String nombre, String sector, String material, Integer capacidad) {
		super();
		this.nombre = nombre;
		this.sector = sector;
		this.material = material;
		this.capacidad = capacidad;
	}

	// Getters y Setters
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public Integer getCapacidad() {
		return capacidad;
	}

	public void setCapacidad(Integer capacidad) {
		this.capacidad = capacidad;
	}

	@Override
	public String toString() {
		return "PuntoReciclaje [id=" + id + ", nombre=" + nombre + ", sector=" + sector + ", material=" + material
				+ ", capacidad=" + capacidad + "]";
	}
}