import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentYear = 2020;

  constructor() { }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }

}
