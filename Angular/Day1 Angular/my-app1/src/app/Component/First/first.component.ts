import { Component } from '@angular/core';

//Decortator
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class firstComponent {
  username = '';

  changeuserName() {
    this.username = '';
  }
}
