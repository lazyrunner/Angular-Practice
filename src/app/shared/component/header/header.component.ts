import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faBars;
  menuItems = [];
  isMenuVisable = false;
  displayClass = 'hidden';

  constructor() {
    this.menuItems = [{
      name: 'Home',
      path: '/'
    },
    {
      name: 'Day 2',
      path: '/day2'
    }];
  }

  ngOnInit(): void {
  }

  toggleMenu(): void{
    this.isMenuVisable = !this.isMenuVisable;
    if (this.isMenuVisable){
      this.displayClass = '';
    } else {
      this.displayClass = 'hidden';
    }
  }
}
