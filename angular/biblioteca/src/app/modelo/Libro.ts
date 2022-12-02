
import { Editorial } from "./Editorial";
import { Autor } from "./Persona";

export class Libro{
    id:string="";
    nombre:string="";
    ejemplares:number=0;
    autor:Autor=new Autor();
    editorial:Editorial= new Editorial();
    
}