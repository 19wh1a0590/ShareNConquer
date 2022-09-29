import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  user1: any;
  flag: boolean;

  constructor(private router: Router, private httpClient: HttpClient, private service: StudentService){
    this.flag = false;
   // this.user1 = {username: "", email: "", password: ""};
  }

  ngOnInit(): void {
    
  }
  loginSubmit(lForm: any){
      console.log("Inside loginSubmit");
      this.user1 = {email: lForm.email, password: lForm.password};
      this.service.getUserByEmailAndPassword(lForm).subscribe((result:any)=>{
        this.checkCred(result)});
      this.service.setUserLoggedIn();
      console.log("Data Fetched : ",this.user);
      
      // if(this.user != null){
        
      //   this.router.navigate(['home']);

      // }
  }

  newUser(): void{
      this.router.navigate(['register']);
  }
  checkCred(users:any){
    if(users===null){
      alert("Invalid username or password");
    }
    // console.log(users.email);
    // console.log(users.password);
    // console.log(this.email);
    // console.log(this.password);
   if(users.email===this.user1.email || users.password===this.user1.password){
       //  alert("Logged in");
       this.user = users;
       localStorage.setItem('Users', JSON.stringify(this.user));
       this.flag=true;
       this.router.navigate(['home']);
   }
   if(this.flag==false){
        alert("Incorrect password or email");
   }
  }
}