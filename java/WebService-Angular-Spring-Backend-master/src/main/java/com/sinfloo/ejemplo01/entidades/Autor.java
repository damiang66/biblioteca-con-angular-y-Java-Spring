
package com.sinfloo.ejemplo01.entidades;

import java.util.List;
import javax.persistence.*;
import org.hibernate.annotations.GenericGenerator;

@Entity

public class Autor {

    @OneToMany(mappedBy = "autor")
    private List<Libro> libros;
    
    @Id
    @GeneratedValue(generator="uuid")
    @GenericGenerator(name="uuid",strategy="uuid2")
    //@GeneratedValue(strategy = GenerationType.IDENTITY) genera valor numerico
    private String id;

    private String name;
  

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    
    
    
}
