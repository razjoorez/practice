import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  count = 0;
  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

}
