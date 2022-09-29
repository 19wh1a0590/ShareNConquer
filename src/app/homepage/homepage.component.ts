import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
declare var jQuery: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user: any;
  editObject: any;
  constructor(private service: StudentService, private router: Router) { 
    this.editObject = {username: '', email:'', password:''};
  }

  ngOnInit(): void {
    this.service.showAllUsers().subscribe((result)=>{this.user=result;});
  }
  deleteUser(user: any){
    console.log("inside homepage.ts: "+ user.username);
    this.service.deleteUser(user).subscribe((result: any)=>{
      const idx = this.user.findIndex((element: any)=>{
      return element._id === user._id;
    });
    console.log(user.email);
    this.user.splice(idx, 1);
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
