import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/modelo/Libro';
import { Router } from '@angular/router';
import { LibroServicioService } from 'src/app/Servicio/libro-servicio.service';
import { EditorialServiceService } from './../../Service/editorial-service.service';
import { Editorial } from 'src/app/modelo/Editorial';
import { Autor } from 'src/app/modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditaLibroComponent implements OnInit{
  libro: Libro = new Libro()
  editoriales: Editorial[]=[]
  autores:Autor[]=[];
  constructor(private router:Router,private servicio:LibroServicioService,private servicioEditorial:EditorialServiceService,private servicioAutor:ServiceService){

  }
ngOnInit(): void {
   this.editar();
   } 

   editar(){
    let id=localStorage.getItem("id");
    this.servicioEditorial.getEditorial().subscribe(data=>{
      this.editoriales=data;
    })
    this.servicioAutor.getAutor().subscribe(data=>{
      this.autores=data;
    })
     
    this.servicio.getLibroId(String(id))
    .subscribe(data=>{
      this.libro=data;
  
    })
  }
  modificar(libro:Libro){
    this.servicio.modificarLibro(libro)
    .subscribe(data=>{
      this.libro=data;
      alert("se actualizo el Libro correctamente");
      this.router.navigate(['listarLibro'])
    })
    
    }
  
  
}