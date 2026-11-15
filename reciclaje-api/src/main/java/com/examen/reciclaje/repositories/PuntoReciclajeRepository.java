package com.examen.reciclaje.repositories;

import com.examen.reciclaje.entidades.PuntoReciclaje;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PuntoReciclajeRepository extends JpaRepository<PuntoReciclaje, Integer> {

}