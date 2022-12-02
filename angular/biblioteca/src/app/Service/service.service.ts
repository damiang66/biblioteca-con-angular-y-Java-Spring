import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Autor}from '../modelo/Persona';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
 
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/ejemplo01/autor';
 getAutor(){
    return this.http.get<Autor[]>(this.Url);
  }
  nuevoAutor({ autor }: { autor: Autor; }){
    return this.http.post<Autor>(this.Url,autor)
  
}
getAutorId(id:string){
return this.http.get<Autor>(this.Url+"/"+id);
}
modificarAutor(autor:Autor){

  return this.http.put<Autor>(this.Url+"/"+autor.id,autor);
}
deleteAutor(autor:Autor){
  return this.http.delete<Autor>(this.Url+"/"+autor.id)
}

}