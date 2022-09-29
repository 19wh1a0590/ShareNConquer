import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-createc',
  templateUrl: './createc.component.html',
  styleUrls: ['./createc.component.css']
})
export class CreatecComponent implements OnInit {
  exform !: FormGroup;
  constructor(private router: Router, private httpClient: HttpClient, private service: StudentService) {
   }

   ngOnInit(): void {
    this.exform = new FormGroup({
      Username: new FormControl(null, Validators.required),
      
      topic: new FormControl(null, Validators.required),
      GroupName: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required ),
    });
  }
  createClub(): void{
        console.log("data fetched: ", this.exform.value);
        this.service.createClub(this.exform.value).subscribe((result: any)=>
        console.log(result));
    }

    get Username(){
      return this.exform.get('Username');
    }
    get topic() {
      return this.exform.get('topic');
    }
  get GroupName() {
    return this.exform.get('GroupName');
  }
  
  get link() {
    return this.exform.get('link');
  }
}
