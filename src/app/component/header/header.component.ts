import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

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
  // contact = null;
  // contactHeight = null;
  currentActive = 'home';

  constructor() { }

  onClickHome(): void {
    this.currentActive = 'home';
    this.home.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  onClickAbout(): void {
    this.currentActive = 'about';
    this.about.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  // onClickContact(): void {
  //   this.currentActive = 'contact';
  //   this.contact.scrollIntoView({ block: 'start', behavior: 'smooth' });
  // }

  ngAfterViewInit() {
    this.home = document.getElementById("homeElement")
    this.homeHeight = this.home.offsetHeight + 15;

    this.about = document.getElementById("aboutElement");
    this.aboutHeight = this.about.offsetHeight + 15;

    // this.contact = document.getElementById("contactElement");
    // this.contactHeight = this.contact.offsetHeight + 15;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    // //this needs to be edited if we add more components
    // if (window.pageYOffset < this.homeHeight - this.aboutHeight) {
    //   this.currentActive = 'home';
    // } else if (window.pageYOffset > (this.homeHeight - this.aboutHeight) && window.pageYOffset < (this.homeHeight + this.aboutHeight - this.contactHeight)) {
    //   this.currentActive = 'about';
    // } else {
    //   this.currentActive = 'contact';
    // }

    if (window.pageYOffset < this.homeHeight - this.aboutHeight/2 + 50) {
      this.currentActive = 'home';
    } else {
      this.currentActive = 'about';
    }
  }
}
