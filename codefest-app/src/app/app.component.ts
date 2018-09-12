import { Component, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ResponseMapper } from './response-mapper';
import { ContractService } from './services/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // private apiUrl = "https://localhost:4200"

  // data: any = {};
  lat: number =   41.9887;
  lng: number = -87.8578;

  private id: string;
  private temp: string;
  private hum: string;
  private detail: string;

  constructor(private contractServices: ContractService){
    
  }

  getOutput(event){
    console.log(event);
    var array = event.split('|');
    this.id = array[0];
    this.temp = array[1];
    this.hum = array[2];
    this.detail = array[3];
  }

test(){
  this.contractServices.getContract();
}

}