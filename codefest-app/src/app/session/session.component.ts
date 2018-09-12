import { Component } from "@angular/core";
import { Keepalive } from '@ng-idle/keepalive';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Output } from "@angular/core";
import { EventEmitter } from '@angular/core';
import { Contract } from "../contract";
import { ContractService } from "../services/contract.service";

 
@Component({
    selector: 'app-session',
    templateUrl: './session.component.html',
    styleUrls: ['./session.component.scss']
  })
  export class SessionComponent {
 
    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;
 
    @Output() valueChange = new EventEmitter();
 
    constructor(private idle: Idle, private keepalive: Keepalive, private contractService: ContractService){
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
 
    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');
 
    // sets the ping interval to 15 seconds
    keepalive.interval(2);
 
    keepalive.onPing.subscribe(() => {
        console.log('Hi Wen');
        //function
        var contract: Contract = new Contract();
        var contractArray : Array<Contract> = new Array<Contract>();
        this.contractService.getContract().subscribe((data)=>{
          console.log("id " + data.id);
          contract.id = data.id
          data.contractProperties.forEach(element => {
            if(element.workflowPropertyId == 27){
              console.log("temp is " + element.value);
              contract.temp = element.value;
            }
            if(element.workflowPropertyId == 29){
              console.log("hum is " + element.value);
              contract.hum = element.value;
            }
            if(element.workflowPropertyId == 16){
              console.log("detail is " + element.value);
              contract.detail = element.value;
            }
          });
          console.log("Contract's ID is " + contract.id);
          this.valueChange.emit(contract.id + "|" + contract.temp + "|" + contract.hum + "|" + contract.detail);
        });
       
        //event emitter
    });
 
    this.reset();
    }
 
    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
       this.timedOut = false;
      }
 
  }
 