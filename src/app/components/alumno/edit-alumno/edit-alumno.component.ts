import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.css']
})
export class EditAlumnoComponent implements OnInit {

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

  actualizarAlumno(){

  }

}
