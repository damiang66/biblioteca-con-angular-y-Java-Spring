import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/modelo/Editorial';
import { EditorialServiceService } from 'src/app/Service/editorial-service.service';

@Component({
  selector: 'app-editarEditorial',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarEditorialComponent implements OnInit {
  editorial :Editorial = new Editorial()
  constructor(private router:Router,private service:EditorialServiceService){

  }
ngOnInit(): void {
  this.editar();
}
editar(){
  
}
Modificar(editorial:Editorial){
this.service.modificarEditorial(editorial)
.subscribe(data=>{
  this.editorial=data;
  alert("se actualizo la editorial correctamente");
  this.router.navigate(['listarEditorial'])
})

}
}
