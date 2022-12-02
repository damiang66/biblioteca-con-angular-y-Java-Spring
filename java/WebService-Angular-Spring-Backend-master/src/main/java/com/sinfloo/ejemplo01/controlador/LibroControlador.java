
package com.sinfloo.ejemplo01.controlador;

import com.sinfloo.ejemplo01.entidades.Editorial;
import com.sinfloo.ejemplo01.entidades.Libro;
import com.sinfloo.ejemplo01.service.LibroService;
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
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/libro"})
public class LibroControlador {
    @Autowired
    LibroService libroService;
    @PostMapping
    public Libro crear(@RequestBody Libro l){
        
        return libroService.crear(l);
    }
    @GetMapping
    public List<Libro> listar(){
      return libroService.listar();
    }
      @GetMapping(path = {"/{id}"})
    public Libro listarId(@PathVariable("id")String id){
        return libroService.listarId(id);
    }
   @DeleteMapping(path={"/{id}"})
    public Libro eliminar(@PathVariable("id") String id){
       return libroService.delete(id);
    }
     @PutMapping(path={"/{id}"})
    public Libro modificar(@RequestBody Libro l,@PathVariable("id") String id){
        l.setId(id);
        return libroService.modificar(l);
    }
}
