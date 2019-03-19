import { Component } from '@angular/core';

@Component({
  selector: 'angular-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';

  navigate() {
    alert('Will navigate');
  }
}
