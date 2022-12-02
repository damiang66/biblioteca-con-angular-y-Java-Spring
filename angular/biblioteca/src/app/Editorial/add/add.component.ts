import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/modelo/Editorial';
import { EditorialServiceService } from 'src/app/Service/editorial-service.service';

@Component({
  selector: 'app-addEditorial',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddEditorialComponent implements OnInit{
editorial:Editorial = new Editorial();
constructor(private router:Router,private service:EditorialServiceService){

}
  ngOnInit(): void {
      
  }
  guardar(){

    this.service.nuevoEditorial(this.editorial)
  
    
    .subscribe(data=>{
    console.log(this.editorial.nombre);
    
      alert("se registro con exito");
      this.router.navigate(['listaEditorial']);
    })
  }
      
  }

