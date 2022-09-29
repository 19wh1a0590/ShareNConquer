import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-club-selection',
  templateUrl: './club-selection.component.html',
  styleUrls: ['./club-selection.component.css']
})
export class ClubSelectionComponent implements OnInit {
  user : any;
  constructor(private router: Router, private service: StudentService, private httpClient: HttpClient) { 

  }

  ngOnInit(): void {
    
  }
  
  
}
