// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-see-clubs',
//   templateUrl: './see-clubs.component.html',
//   styleUrls: ['./see-clubs.component.css']
// })
// export class SeeClubsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-see-clubs',
  templateUrl: './see-clubs.component.html',
  styleUrls: ['./see-clubs.component.css']
})
export class SeeClubsComponent implements OnInit {
  Obj: any;
  user1: any;
  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.user1 = JSON.parse(localStorage.getItem("Users"));
  }

 
  seeClubs(){
    console.log("inside seeClubs() "+this.user1.username);
    this.service.seeClubs(this.user1.username).subscribe((result)=>{this.checkObj(result)});
  }
  checkObj(users: any){
    if(users!==null){
      this.Obj =users;
    }
    else{
      alert("You haven't joined any clubs yet!");    
    }
  }
}