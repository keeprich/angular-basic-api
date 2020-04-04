import { Component, OnInit } from '@angular/core';
import { HttpForTheAppService } from '../http-for-the-app.service';


@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  // creating object to hold the beer data

  brews: object;

  constructor(private _myHttpApi: HttpForTheAppService)
   { }

  ngOnInit(): void {
    this._myHttpApi.myMethod();

    this._myHttpApi.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });

  }



}
