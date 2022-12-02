
package com.sinfloo.ejemplo01.service;

import com.sinfloo.ejemplo01.entidades.Autor;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sinfloo.ejemplo01.repositorio.AutorRepositorio;

@Service
public class AutorServiceImp implements AutorService{
    @Autowired
    private AutorRepositorio repositorio;
    
    @Override
    public List<Autor> listar() {
        return repositorio.findAll();
    }

    @Override
    public Autor listarId(String id) {
        return repositorio.findOne(id);
    }

    @Override
    public Autor add(Autor p) {
        return repositorio.save(p);
    }

    @Override
    public Autor edit(Autor p) {
        return repositorio.save(p);
    }

    @Override
    public Autor delete(String id) {
        Autor p=repositorio.findOne(id);
        if(p!=null){
            repositorio.delete(p);
        }
       return p;
    }
    
    
    
}
