import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import iziToast from 'izitoast';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-index-alumno',
  templateUrl: './index-alumno.component.html',
  styleUrls: ['./index-alumno.component.css']
})
export class IndexAlumnoComponent implements OnInit {

  list_alumno : any[] = [];

  constructor(
    private _alumno : AlumnoService,
    private _router : Router
  ) { }

  obtenerAlumno(){
    this._alumno.getListAlumno().subscribe(
      response => {
        console.log(response);
        this.list_alumno = response;
      },error => {
        console.log(error);
        
      }
    )
  }

  ngOnInit(): void {
    this.obtenerAlumno();
  }

  eliminarAlumno(id : number){
    this._alumno.deleteAlumno(id).subscribe(
      response => {
        iziToast.show({
          title : 'CORRECTO',
          position : 'topRight',
          message : 'Se elimino de manera correcta el alumno'
        })

        this.obtenerAlumno();

      },error => {
        console.log(error);
        
      }
      
    )
  }

}
