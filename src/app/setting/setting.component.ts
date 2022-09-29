//  import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { StudentService } from '../student.service';
// declare var jQuery: any;
// @Component({
//   selector: 'app-setting',
//   templateUrl: './setting.component.html',
//   styleUrls: ['./setting.component.css']
// })
// export class SettingComponent implements OnInit {
//   user: any;
//   editObject: any;
//   userObj:any;
//   loggedInUser:any;
//   constructor(private service: StudentService, private router: Router) { 
//     this.editObject = {username: '', email:'', password:''};
//   }

//   ngOnInit(): void {
    
//   }
//   deleteUser(user: any){
//     console.log("inside homepage.ts: "+ user.username);
//     this.service.deleteUser(user).subscribe((result: any)=>{
//       const idx = this.user.findIndex((element: any)=>{
//       return element._id === user._id;
//     });
//     console.log(user.email);
//     this.user.splice(idx, 1);
//   });
//   }
//   showEditPopup(user: any) {
//     this.editObject = user;
//     jQuery('#userModel').modal('show');
//   }
//   updateUser() {
//     this.service.updateUser(this.editObject).subscribe();
//     console.log(this.editObject);
//   }

//   showUser(){
//     this.service.showUser(this.loggedInUser).subscribe((result)=>{this.userObj=result;});
   
//   }
  
  
// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
declare var jQuery: any;
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  user1: any;
  user2: any;
  editObject: any;
  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.user1 = JSON.parse(localStorage.getItem("Users"));
    this.user2 = [{username:this.user1.username, email:this.user1.email, password:this.user1.password}];
    this.editObject = {username: "", email: "", password: ""}
  }
  deleteUser(user: any){
    console.log("inside homepage.ts: "+ user);
    this.service.deleteUser(user).subscribe((result: any)=>{
      const idx = this.user2.findIndex((element: any)=>{
      return element._id === user._id;
    });
    this.service.setUserLoggedOut();
    if(this.service.getUserLoggedIn()===false){
      localStorage.removeItem("Users");
      this.router.navigate(['newhome']);
    }
    this.user2.splice(idx, 1);
  });
  }
  showEditPopup(user: any) {
    this.editObject = user;
    jQuery('#userModel').modal('show');
  }
  updateUser() {
    this.service.updateUser(this.editObject).subscribe();
    console.log(this.editObject);
  }  
}