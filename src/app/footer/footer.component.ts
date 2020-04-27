import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `.footer {
      position: absolute;
      bottom: 0;
      width:100%;
      height: 40px;
      background-color: #222222;
  }`
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
