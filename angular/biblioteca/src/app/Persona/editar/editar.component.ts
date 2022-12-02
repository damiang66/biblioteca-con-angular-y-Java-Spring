import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent  implements OnInit{
  autor :Autor = new Autor()
  constructor(private router:Router,private service:ServiceService){

  }
ngOnInit(): void {
  this.editar();
}
editar(){
  let id=localStorage.getItem("id");
  
   
  this.service.getAutorId(String(id))
  .subscribe(data=>{
    this.autor=data;

  })
}
Modificar(autor:Autor){
this.service.modificarAutor(autor)
.subscribe(data=>{
  this.autor=data;
  alert("se actualizo el Autor correctamente");
  this.router.navigate(['listarAutor'])
})

}
}
