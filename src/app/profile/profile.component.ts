// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent implements OnInit {
//   constructor() { }
//   myFunction(hello: string) {
//     console.log(hello);
//   }
//   public onChangeName(event: Event): void {
//     if ((event.target as HTMLInputElement).value) {
//       const Username = (event.target as HTMLInputElement).value;
//       (document.getElementById('fill-Username') as HTMLElement).innerHTML = Username;
//     }
//   }
//   public onChangeEmail(event: Event): void {
//     if ((event.target as HTMLInputElement).value) {
//       const email = (event.target as HTMLInputElement).value;
//       (document.getElementById('fill-email') as HTMLElement).innerHTML = email;
//     }
//   }
//   public onFileChange(event: Event): void {
//     if ((event.target as HTMLInputElement).files) {
//       const file = (event.target as HTMLInputElement).files;
//       console.log(file);
//       if(file){
//       (document.getElementById('newimage') as HTMLImageElement).src = URL.createObjectURL(file[0]);}
//     }
//   }
//   ngOnInit(): void {
//   }

// }

import { Component, OnInit} from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user1: any;
  editObj: any;
  msg: any;
  constructor() {}

  ngOnInit(): void {
    this.editObj ={ about: ""};
    this.user1 = JSON.parse(localStorage.getItem("Users"));
   }
   public onFileChange(event: Event): void {
    if ((event.target as HTMLInputElement).files) {
      const file = (event.target as HTMLInputElement).files;
      console.log(file);
      if(file){
      (document.getElementById('newimage') as HTMLImageElement).src = URL.createObjectURL(file[0]);}
    }
  }
  showEditPopup() {
    jQuery('#msgModel').modal('show');
  }
  updateMsg(){
    //this.msgObj = msg;
    localStorage.setItem('Bio', JSON.stringify(this.editObj));
    this.msg = JSON.parse(localStorage.getItem("Bio"));
    console.log(this.editObj);
  }
  

}