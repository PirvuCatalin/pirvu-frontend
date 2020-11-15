import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private nameText = "I'm Cătălin Pîrvu.";
  private jobText = "I'm a Software Developer.";

  private typewriter_text: string = this.nameText;
  public typewriter_display: string = "";

  private changeText = false;
  private showName = true;

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 100, that);
    } else if (this.changeText) {
      that.typewriter_display = "";
      if (that.showName) {
        that.typewriter_text = that.jobText;
        that.showName = false;
      } else {
        that.typewriter_text = that.nameText;
        that.showName = true;
      }
      setTimeout(that.typingCallback, 100, that);
      this.changeText = false;
    } else {
      this.changeText = true;
      setTimeout(that.typingCallback, 1000, that);
    }
  }
}
