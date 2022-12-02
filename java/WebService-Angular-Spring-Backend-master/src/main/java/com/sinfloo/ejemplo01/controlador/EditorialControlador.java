
package com.sinfloo.ejemplo01.controlador;

import com.sinfloo.ejemplo01.entidades.Editorial;

import com.sinfloo.ejemplo01.service.EditorialService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RequestMapping({"/editorial"})
public class EditorialControlador {
    @Autowired
    EditorialService editorialService;
    
    @PostMapping 
    public Editorial cargar(@RequestBody Editorial e){
     return editorialService.crear(e);
    }
    @GetMapping
    public List<Editorial>listar(){
        return editorialService.listar();
        
    }
    @GetMapping(path = {"/{id}"})
    public Editorial listarId(@PathVariable("id")String id){
        return editorialService.listarId(id);
    }
    @PutMapping(path={"/{id}"})
    public Editorial modificar(@RequestBody Editorial e,@PathVariable("id") String id){
        e.setId(id);
        return editorialService.modificar(e);
    }
    @DeleteMapping(path={"/{id}"})
    public Editorial eliminar(@PathVariable("id") String id){
       return editorialService.delete(id);
    }
    
}
