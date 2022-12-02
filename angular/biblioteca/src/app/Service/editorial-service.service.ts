import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Editorial } from '../modelo/Editorial';



@Injectable({
  providedIn: 'root'
})
export class EditorialServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/ejemplo01/editorial';
 getEditorial(){
    return this.http.get<Editorial[]>(this.Url);
  }
  nuevoEditorial(editorial:Editorial){
    return this.http.post<Editorial>(this.Url,editorial)
  
}
getEditorialPorId(id:string){
return this.http.get<Editorial>(this.Url+"/"+id);
}
modificarEditorial(editorial:Editorial){

  return this.http.put<Editorial>(this.Url+"/"+editorial.id,editorial);
}
deleteEditor(editorial:Editorial){
  return this.http.delete<Editorial>(this.Url+"/"+editorial.id)
}

}
