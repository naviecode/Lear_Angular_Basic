import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  userName = 'Maria';

  updateUser(){
    this.userName = "Chris"
  }

  //luôn luôn gọi nếu kh có onChanges
  ngOnInit(): void {
     console.log("ngOnInit from the parent component");
  }
 
}
