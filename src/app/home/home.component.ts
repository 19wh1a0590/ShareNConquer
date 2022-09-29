import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import {Component, OnInit, ViewChild} from '@angular/core';;
import {Subject} from 'rxjs';
import {debounceTime, mergeScan} from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../student.service';
interface Alert {
  type: string;
  message: string;
}

// const user1 = JSON.parse(localStorage.getItem("Users"));
const ALERTS: Alert[] = [ {
  type: 'success',
  message: 'Welcome '
}];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  user1: any;

  // message: 'Welcome to SNC, '  this.user.username ;
  constructor(private router: Router, private service: StudentService) {
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