import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyAppUrl, MyApiUrl } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(
    private _http : HttpClient
  ) { }

  getListAlumno():Observable<any>{
    return this._http.get(MyAppUrl + MyApiUrl)
  }

  deleteAlumno(id : number):Observable<any>{
    return this._http.delete(MyAppUrl + MyApiUrl + id);
  }

  saveAlumno(alumno : any):Observable<any>{
    return this._http.post(MyAppUrl + MyApiUrl, alumno)
  }
}
