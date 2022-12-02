import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Autor } from 'src/app/modelo/Persona';
@Component({
  selector: 'app-listarAutor',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  
  autores:Autor[]=[];
constructor(private service:ServiceService,private router:Router ){

}
ngOnInit(){
  this.service.getAutor()
  .subscribe(data=>{
    this.autores=data;
  })
  

  }
  editar(autor:Autor){
    localStorage.setItem("id",autor.id.toString());
   
    
    
    this.router.navigate(['editarAutor']); 
}
delete(autor:Autor){
  this.service.deleteAutor(autor).subscribe(data=>{
    this.autores=this.autores.filter(a=>a==autor);
    alert("Autor eliminado correctamente");
  })
}
}