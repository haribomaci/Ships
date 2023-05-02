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
}
