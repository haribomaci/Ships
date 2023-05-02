import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apihost = 'http://localhost:8000/ships';
  constructor( private http: HttpClient) { }

  getShips() {

    return this.http.get<any>(this.apihost);
  }
}
