import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styles: [`
  .contact {
    font-family: 'Open Sans', sans-serif;
    padding: 100px;
    margin: 50px;
    text-align: center;
  }

  `]
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
