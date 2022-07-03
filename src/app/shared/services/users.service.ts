import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.gateWayApi + 'user'
  urlAlumno = environment.gateWayApi + 'alumno'
  urlMateria = environment.gateWayApi + 'materia'
  urlPts = environment.gateWayApi + 'puntos'
  urlHistorial = environment.gateWayApi + 'historial'
  urlNivel = environment.gateWayApi + 'nivel'


  constructor(private http: HttpClient) {
  }

  login(user: string, password: string): Observable<any> {
    return this.http.get(`${this.url}/login/${user}/${password}`);
  }

  createUser(userName: string, password: string, date: Date, name: string, apellido: string): Observable<any> {
    let user = {
      nombre: name,
      apellido: apellido,
      userName,
      password,
      date,
      tipo: 1
    }
    return this.http.post(`${this.url}`, user);
  }

  createUserAlumno(userName: string, password: string, date: Date, name: string, apellido: string, maestro_id: number): Observable<any> {
    let user = {
      nombre: name,
      apellido: apellido,
      userName,
      password,
      date,
      maestro_id: maestro_id,
      tipo: 0
    }
    return this.http.post(`${this.urlAlumno}`, user);
  }

  createMateriaAndGeneratedLevel(materia: any) {
    return this.http.post(`${this.urlMateria}`, materia);
  }

  listAlumno(num: number) {
    return this.http.get(`${this.urlAlumno}/byMaestro/${num}`)
  }

  updatePuntos(puntos: any) {
    return this.http.put(`${this.urlPts}`, puntos)
  }

  listPuntosByalumnoAndMateria(alumno_id: number, materia_id: number) {
    return this.http.get(`${this.urlPts}/puntosByAlumno/${alumno_id}/${materia_id}`)
  }

  createHistorial(obj: any) {
    return this.http.post(`${this.urlHistorial}`, obj);
  }

  updateNivel(obj: any) {
    return this.http.post(`${this.urlNivel}`, obj);
  }
}
