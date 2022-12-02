
package com.sinfloo.ejemplo01.service;

import com.sinfloo.ejemplo01.entidades.Editorial;
import com.sinfloo.ejemplo01.repositorio.EditorialRepositorio;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class EditorialService {
   @Autowired
   EditorialRepositorio editorialRepositorio;
   public Editorial crear(Editorial e){
       Editorial editorial = new Editorial();
       editorial.setNombre(e.getNombre());
      return editorialRepositorio.save(editorial);
   }
   public List<Editorial>listar(){
       return editorialRepositorio.findAll();
   }

    public Editorial listarId(String id) {
      return editorialRepositorio.findOne(id);
    }

    public Editorial modificar(Editorial e) {
    return editorialRepositorio.save(e);
}

    public Editorial delete(String id) {
      Editorial e=editorialRepositorio.findOne(id);
        if(e!=null){
            editorialRepositorio.delete(e);
        }
       return e;
    }
}