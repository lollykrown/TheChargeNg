import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styles: [`
  .about {
    font-family: 'Open Sans', sans-serif;
    padding: 100px;
    margin-top: 40px;
    text-align: center;
    margin-top: -20px;
    line-height: 200%;
  }
  .fill-screen {
    background-size: cover;
    background-position: center;
    background-image: url(/assets/img/bg-black.png);
  }
  `]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
