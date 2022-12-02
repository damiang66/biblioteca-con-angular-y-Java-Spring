import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autor } from 'src/app/modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  autor:Autor=new Autor();
constructor(private router:Router,private service:ServiceService){

}
  ngOnInit(): void {
      
  }
  guardar(){

    this.service.nuevoAutor({ autor: this.autor })
  
    
    .subscribe(data=>{
      console.log(this.autor.name);
      alert("se registro con exito");
      this.router.navigate(['listarAutor']);
    })
  }
}
