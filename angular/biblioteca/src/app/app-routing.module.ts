import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditorialComponent } from './Editorial/add/add.component';
import { EditarEditorialComponent } from './Editorial/editar/editar.component';
import { ListarEditorialComponent } from './Editorial/listar/listar.component';
import { EditaLibroComponent } from './Libro/editar/editar.component';
import { ListarLibroComponent } from './Libro/listar/listar.component';
import { NuevoLibroComponente } from './Libro/nuevo/nuevo.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { NuevoComponent } from './Persona/nuevo/nuevo.component';

const routes: Routes = [
  //rutas de autor
  {path:'listarAutor',component:ListarComponent},
  {path:'nuevoAutor',component:NuevoComponent},
  {path:'editarAutor',component:EditarComponent},
//rutas de editoriales
  {path:'listarEditorial',component:ListarEditorialComponent},
  {path:'nuevoEditorial',component:AddEditorialComponent},
  {path:'editarEditorial',component:EditarEditorialComponent},
//rutas de Libros
{path:'listarLibro',component:ListarLibroComponent},
  {path:'nuevoLibro',component:NuevoLibroComponente},
  {path:'editarLibro',component:EditaLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
