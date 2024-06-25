import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { data } from 'jquery';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  header_footer: boolean = true;

  constructor(private route: Router) {
    route.events.subscribe(data => {
      if (data instanceof NavigationEnd) {
        if (data.url.includes("admin")) {
          this.header_footer = false
        } else {
          this.header_footer = true
        }
      }
    })
  }

}
