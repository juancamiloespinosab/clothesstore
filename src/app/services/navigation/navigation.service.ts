import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavHeaderComponent } from 'src/app/components/molecules/nav-header/nav-header.component';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  navHeaderComponent: NavHeaderComponent;

  constructor(private router: Router) { }

  navigateTo(url) {
    this.router.navigate([url]);
  }

  smoothScrollToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

  openMenu() {
    document.getElementsByClassName('nav-header')[0].classList.add('nav-header--open-menu')

  }

  closeMenu() {
    
    document.getElementsByClassName('nav-header')[0].classList.remove('nav-header--open-menu')

  }
}
