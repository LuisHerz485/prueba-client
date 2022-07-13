import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import iziToast from 'izitoast';

@Component({
  selector: 'app-create-alumno',
  templateUrl: './create-alumno.component.html',
  styleUrls: ['./create-alumno.component.css']
})
export class CreateAlumnoComponent implements OnInit {

  public alumno : any = {};

  form : FormGroup;

  constructor(
    private _router : Router,
    private _fb : FormBuilder
  ) {
    this.form = this._fb.group({
      apellidos : ['', Validators.required],
      nombres : ['', Validators.required],
      dni : ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  registrarAlumno(){
    if(this.form.valid){
      this.alumno = {
        apellidos : this.form.get('apellidos')?.value,
        nombres : this.form.get('nombres')?.value,
        dni : this.form.get('dni')?.value
      }

      console.log(this.alumno);

      iziToast.show({
        title: 'CORRECTO',
        titleColor : '#008509',
        message: 'Se registro de manera correcta al alumno',
        position : 'topRight'
      });

      this._router.navigate(['panel/alumno'])
      
    }else{
      iziToast.show({
        title : 'Error',
        titleColor : '#FF0000',
        message : 'Los datos del formulario no son correctas o estan incompletas',
        position : 'topRight'
      })
    }
  }

}
