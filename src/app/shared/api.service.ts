// 
// * File: api.service.ts
// * Author: Tóth Júlia
// * Copyright: 2023,
// * Group: Szoft II N
// * Date: 2023-05-02
// * Github: https://github.com/haribomaci
// * Licenc: GNU GPL
// 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = 'http://localhost:8000/ships';
  constructor( private http: HttpClient) { }

  getShips() {

    return this.http.get<any>(this.host);
  }
  addShip(ship: any) {
  

    let headers = new HttpHeaders({
      'Content-Type': 'applicaton/json',
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(this.host, ship, httpOption);
  }
}
