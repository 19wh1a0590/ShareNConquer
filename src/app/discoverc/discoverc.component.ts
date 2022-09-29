import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-discoverc',
  templateUrl: './discoverc.component.html',
  styleUrls: ['./discoverc.component.css'],

})
export class DiscovercComponent implements OnInit {
selectedTopic: string;
topicObj: any;
exform !: FormGroup;
  constructor(private router: Router, private httpClient: HttpClient, private service: StudentService) {
   }

  ngOnInit(): void {
    this.exform = new FormGroup({
      topic: new FormControl(null, Validators.required),
      // GroupName: new FormControl(null, Validators.required),
      // link: new FormControl(null, Validators.required ),
    })
    // this.service.showAllUsers().subscribe((result)=>{this.topicObj=result;});
  }
  discover(){
  //   this.service.discover(this.exform.value).subscribe((result: any)=>console.log(result));
    this.service.discover(this.exform.value).subscribe((result)=>{this.topicObj=result;});
   }
  get topic() {
    return this.exform.get('topic');
  }
  // get GroupName() {
  //   return this.exform.get('GroupName');
  // }
  // get link() {
  //   return this.exform.get('link');
  // }


}
