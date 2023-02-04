import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbs: number[] = [];
  evenNumbs: number[] = [];

  onIntervalFired(firedNumb: number) {
    if (firedNumb % 2 === 0) {
      this.evenNumbs.push(firedNumb)
    } else {
      this.oddNumbs.push(firedNumb)
    }

    console.log(firedNumb);
  }
}
