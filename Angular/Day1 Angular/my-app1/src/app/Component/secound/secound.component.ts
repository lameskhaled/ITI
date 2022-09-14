import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secound',
  templateUrl: './secound.component.html',
  styleUrls: ['./secound.component.css'],
})
export class SecoundComponent implements OnInit {
  ngOnInit(): void {}
  index = 0;
  interval: any;
  myimg = 'assets/images/images (1).jpeg';
  images = [
    'assets/images/images (1).jpeg',
    'assets/images/images (2).jpeg',
    'assets/images/images (3).jpeg',
    'assets/images/images (4).jpeg',
  ];

  changeimg() {
    this.interval = setInterval(() => {
      if (this.index < this.images.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
      this.myimg = this.images[this.index];
    }, 2000);
  }
  next() {
    if (this.index < this.images.length - 1) {
      this.index++;
    } else {
      this;
    }
    this.myimg = this.images[this.index];
  }
  previous() {
    if (this.index == 0) {
      this;
    } else if (this.index > 0) {
      this.index--;
    }
    this.myimg = this.images[this.index];
  }
  stop() {
    clearInterval(this.interval);
  }
}
