
package com.sinfloo.ejemplo01.service;

import com.sinfloo.ejemplo01.entidades.Autor;
import com.sinfloo.ejemplo01.entidades.Editorial;
import com.sinfloo.ejemplo01.entidades.Libro;
import com.sinfloo.ejemplo01.repositorio.AutorRepositorio;
import com.sinfloo.ejemplo01.repositorio.EditorialRepositorio;
import com.sinfloo.ejemplo01.repositorio.LibroRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibroService {
   @Autowired
   LibroRepositorio libroRepositorio;
   @Autowired
   AutorRepositorio autorRepositorio;
   @Autowired
   EditorialRepositorio editorialRepositorio;
   public Libro crear(Libro l){
       Libro libro = new Libro();
       Autor autor = autorRepositorio.findOne(l.getAutor().getId());
       Editorial editorial = editorialRepositorio.findOne(l.getEditorial().getId());
       libro.setAutor(autor);
       libro.setEditorial(editorial);
       libro.setEjemplares(l.getEjemplares());
       libro.setNombre(l.getNombre());
       return libroRepositorio.save(libro);
   }
   public List<Libro> listar(){
       return libroRepositorio.findAll();
   }

    public Libro listarId(String id) {
       return libroRepositorio.findOne(id);
    }

    public Libro delete(String id) {
      Libro l = libroRepositorio.findOne(id);
      if (l!=null){
          libroRepositorio.delete(l);
      }
      return l;
    }

    public Libro modificar(Libro l) {
        return libroRepositorio.save(l);
    }
}
