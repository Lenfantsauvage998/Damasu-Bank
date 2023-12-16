import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../Components/NavBar/nav-bar/nav-bar.component';
import { FooterComponent } from '../../Components/Footer/footer/footer.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showRegister = false;

  toggleView() {
    this.showRegister = !this.showRegister;
    console.log(this.showRegister)
  }
}
