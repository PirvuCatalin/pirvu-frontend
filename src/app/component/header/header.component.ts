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
  projects = null;
  projectsHeight = null;

  header = null;

  currentActive = 'home';

  constructor() { }

  onClickHome(): void {
    this.currentActive = 'home';
    this.home.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  onClickAbout(): void {
    this.currentActive = 'about';
    // this.about.scrollIntoView({ block: 'start', behavior: 'smooth' });
    let positionY = this.home.offsetHeight - this.header.offsetHeight;
    window.scrollTo({
      top: positionY,
      behavior: "smooth"
    });
  }

  onClickProjects(): void {
    this.currentActive = 'projects';
    // this.about.scrollIntoView({ block: 'start', behavior: 'smooth' });
    let positionY = this.home.offsetHeight + this.about.offsetHeight - this.header.offsetHeight;
    window.scrollTo({
      top: positionY,
      behavior: "smooth"
    });
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

    this.projects = document.getElementById("projectsElement");
    this.projectsHeight = this.projects.offsetHeight + 15;

    this.header = document.getElementsByClassName("custom-padding-navbar")[0];
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop() {
    //this needs to be edited if we add more components
    if (window.pageYOffset < this.homeHeight - this.aboutHeight) {
      this.currentActive = 'home';
    } else if (window.pageYOffset > (this.homeHeight - this.aboutHeight) && window.pageYOffset < (this.homeHeight + this.aboutHeight - this.projectsHeight)) {
      this.currentActive = 'about';
    } else {
      this.currentActive = 'projects';
    }

    // if (window.pageYOffset > this.homeHeight / 2) {
    //   this.currentActive = 'about';
    // } else {
    //   this.currentActive = 'home';
    // }
  }
}
