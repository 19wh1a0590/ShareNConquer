import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  topic1: string;
  constructor(private router: Router, private service: StudentService, private httpClient: HttpClient) {
  this.topic1 = '';
  }

  ngOnInit(): void {

  }
  topics(TopicName: string){
    // console.log(TopicName);
    this.topic1 = TopicName;
    this.router.navigate(['discoverc']);
  }
//  getTopic(): string{

//   return this.topic1;
//  }
  

}
