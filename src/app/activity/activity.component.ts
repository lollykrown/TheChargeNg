import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WOW } from '../../js/wow.min';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styles: [`
    .activity {
    font-family: 'Open Sans', sans-serif;
    padding: 100px;
    margin-top: 40px;
    text-align: center;
  }
  h2, h4, p{
    margin-top: 10px;
    padding: 20px;
    color: #ffffff;
  }
`]
})
export class ActivityComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {}

 ngAfterViewInit() {
    new WOW().init();
  }

}
