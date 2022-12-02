import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../modelo/Libro';

@Injectable({
  providedIn: 'root'
})
export class LibroServicioService {
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/ejemplo01/libro';
 getLibro(){
    return this.http.get<Libro[]>(this.Url);
  }
  nuevoLibro(libro:Libro){
    return this.http.post<Libro>(this.Url,libro)
  
}
getLibroId(id:string){
return this.http.get<Libro>(this.Url+"/"+id);
}
modificarLibro(libro:Libro){

  return this.http.put<Libro>(this.Url+"/"+libro.id,libro);
}
deleteLibro(libro:Libro){
  return this.http.delete<Libro>(this.Url+"/"+libro.id)
}

  
}
