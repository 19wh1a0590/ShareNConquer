import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  exform: any;
  editObject: any;
  constructor(private httpClient:HttpClient,private service:StudentService,private router:Router) { }

  ngOnInit(): void {

    this.exform = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
  });
  this.editObject = {email: "", password: ""}
  }
  get email() {
    return this.exform.get('email');
  }
  get password() {
    return this.exform.get('password');
  }
  forgotPwd(): void{
    this.service.getUserByEmail(this.exform.value).subscribe((result:any)=>this.changePwd(result,this.exform.value));
  }
  changePwd(result: any, form: any): void{
    
    if(result===null){
      alert("Sorry!! You are not registered");
    }
    else{
      this.editObject.email = form.email;
      this.editObject.password = form.password;
      console.log("Inside changePwd.ts" + this.editObject);
      this.service.changePwd(this.editObject).subscribe();
      alert("Password succesfully changed");


      
    }
  }


}