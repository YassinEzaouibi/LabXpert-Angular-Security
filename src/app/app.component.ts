import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-xpert-angular14-for-part2';
  isClicked = false;

  changeColor() {
    this.isClicked = !this.isClicked;
  }
}
