import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p-15';
  @Output() show: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.splash();
  }

  splash() {
    setTimeout(() => {
      this.show = false;
    }, 3000)
  }
}
