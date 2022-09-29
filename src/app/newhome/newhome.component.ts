// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-newhome',
//   templateUrl: './newhome.component.html',
//   styleUrls: ['./newhome.component.css']
// })
// export class NewhomeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import {Component, OnInit, ViewChild} from '@angular/core';;
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [ {
  type: 'success',
  message: 'Welcome to SNC.....Get connected feel connected',
}
];
@Component({
  selector: 'app-newhome',
  templateUrl: './newhome.component.html',
  styleUrls: ['./newhome.component.css']
})
export class NewhomeComponent implements OnInit {

  constructor() {
    this.reset();
  }

  ngOnInit(): void {
  }
  alerts: Alert[];

  

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);

}
}






// @Component({selector: 'ngbd-alert-selfclosing', templateUrl: './alert-selfclosing.html'})
// export class NgbdAlertSelfclosing implements OnInit {
//   private _success = new Subject<string>();

//   staticAlertClosed = false;
//   successMessage = '';

//   @ViewChild('staticAlert', {static: false}) staticAlert: NgbAlert;
//   @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

//   ngOnInit(): void {
//     setTimeout(() => this.staticAlert.close(), 20000);

//     this._success.subscribe(message => this.successMessage = message);
//     this._success.pipe(debounceTime(5000)).subscribe(() => {
//       if (this.selfClosingAlert) {
//         this.selfClosingAlert.close();
//       }
//     });
//   }

//   public changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }
// }