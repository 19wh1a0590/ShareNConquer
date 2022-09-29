import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private httpClient: HttpClient, private service: StudentService ) { }

  ngOnInit(): void {
  }
  logOut(): void{
    this.service.setUserLoggedOut();
    if(this.service.getUserLoggedIn()===false){
      localStorage.removeItem("Users");
      this.router.navigate(['newhome']);
    }
  }
}
