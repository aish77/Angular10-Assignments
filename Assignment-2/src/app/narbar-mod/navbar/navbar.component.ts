import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
preClick = true;
postClick = false;
display;
changeDisplay($event){
  this.preClick = !this.preClick;
  this.postClick = !this.postClick;
  this.display = $event.target.text;
}

}
