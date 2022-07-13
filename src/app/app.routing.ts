import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { IndexAlumnoComponent } from "./components/alumno/index-alumno/index-alumno.component";
import { CreateAlumnoComponent } from "./components/alumno/create-alumno/create-alumno.component";
import { EditAlumnoComponent } from "./components/alumno/edit-alumno/edit-alumno.component";
import { Error404Component } from "./components/error404/error404.component";

const  appRoute : Routes = [ 
    {path : '', redirectTo: 'home', pathMatch : 'full'},
    {path: 'home', component : HomeComponent},
    {path : 'panel', children : [
        {path : 'alumno', component : IndexAlumnoComponent},
        {path : 'alumno/create-alumno', component : CreateAlumnoComponent},
        {path : 'alumno/edit-alumno/:id', component : EditAlumnoComponent}
    ]},
    {path : '**', pathMatch: 'full', component: Error404Component}
   ]


export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoute);
   