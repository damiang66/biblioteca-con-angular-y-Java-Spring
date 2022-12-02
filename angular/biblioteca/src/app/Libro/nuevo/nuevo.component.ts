import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Libro } from 'src/app/modelo/Libro';
import { Autor } from 'src/app/modelo/Persona';
import { EditorialServiceService } from 'src/app/Service/editorial-service.service';
import { ServiceService } from 'src/app/Service/service.service';
import { LibroServicioService } from 'src/app/Servicio/libro-servicio.service';
import { Editorial } from './../../modelo/Editorial';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoLibroComponente implements OnInit {
  editoriales:Editorial[]=[];
  autores: Autor[]=[];
  autor: Autor = new Autor();
  editorial: Editorial= new Editorial();
  libro: Libro = new Libro();
  constructor(private router:Router,private serviceEditorial:EditorialServiceService,private serviceAutor:ServiceService,
    private service:LibroServicioService){
  
  }
  ngOnInit(): void {
    this.serviceEditorial.getEditorial()
    .subscribe(data=>{
      this.editoriales=data;
    })
    this.serviceAutor.getAutor()
    .subscribe(data=>{
      this.autores=data;
    })
  }
  guardar(idAutor:string,idEditorial:string){

/*
  
   
      this.serviceAutor.getAutorId(idAutor).subscribe(data=>{
      this.autor=data;
      alert(this.autor.name);
    })
    
    
    this.serviceEditorial.getEditorialPorId(idEditorial).subscribe(data=>{
      this.editorial=data;
      alert(this.editorial.nombre);
    })
   
  
   */
    this.service.nuevoLibro(this.libro)
  
    
    .subscribe(data=>{
      console.log(data);
      
    this.libro=data;
    
      alert("se registro con exito");
      //this.router.navigate(['listaEditorial']);
    })
    
  }
}
