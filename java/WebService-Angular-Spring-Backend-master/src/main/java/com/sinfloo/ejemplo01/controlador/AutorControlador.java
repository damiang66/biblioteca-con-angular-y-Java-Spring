
package com.sinfloo.ejemplo01.controlador;

import com.sinfloo.ejemplo01.entidades.Autor;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sinfloo.ejemplo01.service.AutorService;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/autor"})
public class AutorControlador {
    
    @Autowired
    AutorService service;
    
    @GetMapping
    public List<Autor>listar(){
        return service.listar();
    }
    @PostMapping
    public Autor agregar(@RequestBody Autor p){
        return service.add(p);
    }
    @GetMapping(path = {"/{id}"})
    public Autor listarId(@PathVariable("id")String id){
        return service.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Autor editar(@RequestBody Autor p,@PathVariable("id") String id){
        p.setId(id);
        return service.edit(p);
    }
    @DeleteMapping(path = {"/{id}"})
    public Autor delete(@PathVariable("id") String id){
        return service.delete(id);
    }
}
