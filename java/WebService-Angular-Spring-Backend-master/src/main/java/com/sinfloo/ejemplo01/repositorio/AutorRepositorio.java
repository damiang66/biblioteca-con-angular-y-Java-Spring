
package com.sinfloo.ejemplo01.repositorio;



import com.sinfloo.ejemplo01.entidades.Autor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutorRepositorio extends JpaRepository<Autor, String>{
   
}
