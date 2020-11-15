import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  home = null;
  homeHeight = null;
  about = null;
  aboutHeight = null;
  contact = null;
  contactHeight = null;
  currentActive = 'home';

  constructor() { }

  onClickHome(): void {
    this.currentActive = 'home';
    this.home[0].scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  onClickAbout(): void {
    this.currentActive = 'about';
    this.about[0].scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  onClickContact(): void {
    this.currentActive = 'contact';
    this.contact[0].scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  ngAfterViewInit() {
    this.home = $("#homeElement");
    this.homeHeight = this.home.outerHeight() + 15;

    this.about = $("#aboutElement");
    this.aboutHeight = this.about.outerHeight() + 15;

    this.contact = $("#contactElement");
    this.contactHeight = this.contact.outerHeight() + 15;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    //this needs to be edited if we add more components
    if (window.pageYOffset < this.homeHeight - this.aboutHeight) {
      this.currentActive = 'home';
    } else if (window.pageYOffset > (this.homeHeight - this.aboutHeight) && window.pageYOffset < (this.homeHeight + this.aboutHeight - this.contactHeight)) {
      this.currentActive = 'about';
    } else {
      this.currentActive = 'contact';
    }
  }
}
