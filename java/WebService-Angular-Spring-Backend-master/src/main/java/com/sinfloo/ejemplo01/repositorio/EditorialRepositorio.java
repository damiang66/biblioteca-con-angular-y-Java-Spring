
package com.sinfloo.ejemplo01.repositorio;


import com.sinfloo.ejemplo01.entidades.Editorial;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EditorialRepositorio extends JpaRepository<Editorial,String> {
    
}
