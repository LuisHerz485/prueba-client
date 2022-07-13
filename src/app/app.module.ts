import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IndexAlumnoComponent } from './components/alumno/index-alumno/index-alumno.component';
import { CreateAlumnoComponent } from './components/alumno/create-alumno/create-alumno.component';
import { EditAlumnoComponent } from './components/alumno/edit-alumno/edit-alumno.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IndexAlumnoComponent,
    CreateAlumnoComponent,
    EditAlumnoComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
