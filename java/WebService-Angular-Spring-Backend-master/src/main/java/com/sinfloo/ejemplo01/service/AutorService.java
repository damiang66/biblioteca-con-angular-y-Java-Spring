
package com.sinfloo.ejemplo01.service;

import com.sinfloo.ejemplo01.entidades.Autor;
import java.util.List;

public interface AutorService {
    List<Autor>listar();
    Autor listarId(String id);
    Autor add(Autor p);
    Autor edit(Autor p);
    Autor delete(String id);
}
