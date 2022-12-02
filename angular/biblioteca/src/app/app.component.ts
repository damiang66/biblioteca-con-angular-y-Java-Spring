import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from './modelo/Editorial';
import { Libro } from './modelo/Libro';
import { Autor } from './modelo/Persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  libro: Libro= new Libro() ;
  autor: Autor = new Autor();
  editorial: Editorial = new Editorial();
  title = 'biblioteca';
  constructor(private router:Router){}
  listarAutor(){
    this.router.navigate(['listarAutor']);
  }
  nuevoAutor(){
    this.router.navigate(['nuevoAutor']);
  }
  listarEditorial(){
    this.router.navigate(['listarEditorial'])
  }
  nuevoEditorial(){
    this.router.navigate(['nuevoEditorial'])
  }
  nuevoLibro(){
    // this.editorial.id="1";
    // this.editorial.nombre="damian";
    // this.autor.id="2";
    // this.autor.name="camila";
    // this.libro.id="1";
    // this.libro.nombre="el señor de los anillos";
    // this.libro.ejemplares=20;
    // this.libro.autor=this.autor;
    // this.libro.editorial=this.editorial;
    // console.log(this.libro);
    
     this.router.navigate(['nuevoLibro']);
   
  }
  listarLibro(){
this.router.navigate(['listarLibro']);
  }

}
