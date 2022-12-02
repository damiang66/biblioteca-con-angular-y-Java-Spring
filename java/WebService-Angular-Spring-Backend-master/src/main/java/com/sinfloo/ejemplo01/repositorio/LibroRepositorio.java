
package com.sinfloo.ejemplo01.repositorio;

import com.sinfloo.ejemplo01.entidades.Libro;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LibroRepositorio extends JpaRepository<Libro,String> {
   
    @Query("SELECT l FROM Libro l WHERE l.nombre= :nombre")
    public Libro porNombre(@Param("nombre")String nombre);
}
