import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { NuevoComponent } from './Persona/nuevo/nuevo.component';
import { EditarComponent } from './Persona/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import{HttpClientModule}from '@angular/common/http';


import { ListarEditorialComponent } from './Editorial/listar/listar.component';
import { AddEditorialComponent } from './Editorial/add/add.component';
import { EditarEditorialComponent } from './Editorial/editar/editar.component';
import { EditorialServiceService } from './Service/editorial-service.service';
import { EditaLibroComponent } from './Libro/editar/editar.component';
import { NuevoLibroComponente } from './Libro/nuevo/nuevo.component';
import { ListarLibroComponent } from './Libro/listar/listar.component';
import { LibroServicioService } from './Servicio/libro-servicio.service';
import { FooterComponent } from './Componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NuevoComponent,
    EditarComponent,
    ListarEditorialComponent,
    AddEditorialComponent,
    EditarEditorialComponent,
 
    EditaLibroComponent,
    NuevoLibroComponente,
    ListarLibroComponent,
    FooterComponent

  ],
  imports: [
  
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService,EditorialServiceService,LibroServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
