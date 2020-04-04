import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // defining variable

  clickCounter: number = 0;
  name: string = 'Esther';

  constructor() { }

  ngOnInit(): void {
  }

  // defining functions

  countClick() {
    // "this" refers to the above function
    this.clickCounter +=1;
  }

  setClasses() {
    let myClasses = {
      aStyleClass: this.clickCounter > 5,
     notStyleClass: this.clickCounter <= 6,
    }
    return myClasses;
  }

}
