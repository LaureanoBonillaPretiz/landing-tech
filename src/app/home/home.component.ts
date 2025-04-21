import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ServicesComponent, AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToServicios() {
    this.router.navigate(['/servicios']);
  }
}
