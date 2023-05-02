// 
// * File: ship.component.ts
// * Author: Tóth Júlia
// * Copyright: 2023,
// * Group: Szoft II N
// * Date: 2023-05-02
// * Github: https://github.com/haribomaci
// * Licenc: GNU GPL
//  -->


import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent implements OnInit{
  shipForm: FormGroup;
  ships: any = [];
constructor(
  private api: ApiService,
  private formBuilder: FormBuilder
  
){
  this.shipForm = this.formBuilder.group({
    name:[""],
    length:[""],
    price:[""],
    person:[""],
    trailer:[""],
  })
}
ngOnInit(): void {
  this.getShips();
}
getShips(){
  this.api.getShips().subscribe(res => {
    this.ships = res;
    console.log(res);
    
  });
}
onClick() {
  this.addShip();
}

addShip() {

  let data = {
    name: this.shipForm.value.name,
  };

  this.api.addShip(data).subscribe({
    next: (data:any) => {
      console.log("siker");
    },
    error: (err:any) => {
    }
  });
}
}
