import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
const AUTH_API = GlobalComponent.API_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) {

  }
  Consultar(): Observable<any> {
    return this.http.get(AUTH_API + "Usuarios/usua", httpOptions);
  }

}