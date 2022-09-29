import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  userLoggedIn : boolean;

  constructor(private httpClient: HttpClient){
    this.userLoggedIn = false;
  }
  getUserByEmailAndPassword(loginForm: any){
    console.log(loginForm.email);
    console.log(loginForm.password);
    return this.httpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password)
  }
  getUserByEmail(exform: any){
    console.log("Inside getUserbyEmail " +exform.email + exform.password);
    return this.httpClient.get('http://localhost:3000/findObj/'+exform.email)
  }
  getClubsByTopic(loginForm: any){
    console.log(loginForm.email);
    console.log(loginForm.password);
    return this.httpClient.get('http://localhost:3000/login/'+loginForm.email+"/"+loginForm.password).toPromise();
  }
  changePwd(editObj: any){
    console.log("Inside changePwd service" + editObj.email + editObj.password);
    return this.httpClient.put('http://localhost:3000/changePwd/', editObj);
  }
  discover(exform: any){
    console.log("Inside service");
    return this.httpClient.get('http://localhost:3000/Discover/'+ exform.topic);
  }
  seeClubs(username: string){
    console.log("Inside service"+ username);
   
    return this.httpClient.get('http://localhost:3000/seeClubs/'+ username);
  }
  registerUser(user: any) {
    console.log("Inside service.ts" + user);
    return this.httpClient.post('http://localhost:3000/register', user);
  }
  createClub(user: any) {
    console.log("Inside service.ts" + user);
    return this.httpClient.post('http://localhost:3000/createClubs', user);
  }
 
  getUserLoggedIn(){
    return this.userLoggedIn; //invoked whenvere we need this value
  }
  setUserLoggedIn(){
    this.userLoggedIn=true; //invoked whenver we logged in successfully
  }
  setUserLoggedOut(){
    this.userLoggedIn=false; //invoked whenver we logged out
  }
  showAllUsers(){
    return this.httpClient.get('http://localhost:3000/fetch');
  }
  deleteUser(user: any){
    console.log("inside service.ts: "+ user.email);
    return this.httpClient.delete('http://localhost:3000/Delete/'+user.username);
  }
  
  updateUser(editObject: any) {
    console.log(editObject.email);
    return this.httpClient.put('http://localhost:3000/update/', editObject);
   }

   showUser(loggedInUser: any){
    console.log("Inside service");
    return this.httpClient.get('http://localhost:3000/Settings/'+ loggedInUser.username);
   }
  }