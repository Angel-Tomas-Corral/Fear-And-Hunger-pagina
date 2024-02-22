import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isToggled: boolean = false;


  toggle() {
    this.isToggled = !this.isToggled;
    console.log(this.isToggled);
  }

}