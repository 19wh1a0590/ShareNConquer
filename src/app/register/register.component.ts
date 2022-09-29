import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  exform !: any;
  userSubmitted: boolean;
  user1:any;
  emailPattern = "^[a-z0-9](\.?[a-z0-9]){2,}@g(oogle)?mail\.com$";
  constructor(private router: Router, private httpClient: HttpClient, private service: StudentService) {}

  ngOnInit(): void {
    this.exform = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl(null, [Validators.required]),
    }, this.passwordMatchingValidator);
  }

  passwordMatchingValidator(fg: FormGroup): Validators{
    return fg.get('password').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }
  // registerUser(): void{
  //   this.userSubmitted = true;

  //   console.log("data fetched: ", this.exform.value);
  //   this.service.registerUser(this.exform.value).subscribe((result: any)=>
  //   console.log(result));
  //   localStorage.setItem('Users', JSON.stringify(this.exform.value));
  //   this.userSubmitted = false;
  //    this.router.navigate(['home']);

  // }
  registerUser(): void{
    this.userSubmitted = true;
    this.service.getUserByEmail(this.exform.value).subscribe((result:any)=>this.userRegister(result));  
  }
  userRegister(result:any){
    if(result===null){
      console.log("data fetched: ", this.exform.value);
      this.service.registerUser(this.exform.value).subscribe((result: any)=>
      console.log(result));
      localStorage.setItem('Users', JSON.stringify(this.exform.value));
      this.userSubmitted = false;
      this.router.navigate(['home']);
    }
    else{
      alert("Email already exists");
    }
  }
  get username() {
    return this.exform.get('username');
  }
  get email() {
    return this.exform.get('email');
  }
  get password() {
    return this.exform.get('password');
  }
  get confirmPassword() {
    return this.exform.get('confirmPassword');
  }
}