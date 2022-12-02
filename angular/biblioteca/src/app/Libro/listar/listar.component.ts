import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/modelo/Libro';
import { LibroServicioService } from 'src/app/Servicio/libro-servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarLibroComponent implements OnInit {
  libros:Libro[]=[];
  constructor(private route:Router,private service:LibroServicioService){
    

  }
ngOnInit(): void {
  this.service.getLibro().subscribe(data=>{
    this.libros=data;
  })
    
}
editar(libro:Libro){
  localStorage.setItem("id",libro.id.toString());
this.route.navigate(['editarLibro']);
}
delete(libro:Libro){

  this.service.deleteLibro(libro).subscribe(data=>{
    this.libros=this.libros.filter(a=>a==libro);
    alert("Libro eliminado correctamente");
  });
  
}
}
