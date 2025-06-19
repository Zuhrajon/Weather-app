import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDarkTheme: boolean = false;
  isMenuOpen = false;


  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const body = document.body;

    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }
  
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
