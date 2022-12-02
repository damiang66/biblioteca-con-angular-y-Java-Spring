import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/modelo/Editorial';
import { EditorialServiceService } from 'src/app/Service/editorial-service.service';

@Component({
  selector: 'app-listarEditorial',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarEditorialComponent {
  editoriales:Editorial[]=[];
  constructor(private service:EditorialServiceService,private router:Router ){
  
  }
  ngOnInit(){
    this.service.getEditorial()
    .subscribe(data=>{
      this.editoriales=data;
    })
    
  
    }
    editar(editorial:Editorial){
      localStorage.setItem("id",editorial.id.toString());
     
      
      
      this.router.navigate(['editarEditorial']); 
  }
  delete(editorial:Editorial){
    this.service.deleteEditor(editorial).subscribe(data=>{
      this.editoriales=this.editoriales.filter(a=>a==editorial);
      alert("Autor eliminado correctamente");
    })
  }
  }

