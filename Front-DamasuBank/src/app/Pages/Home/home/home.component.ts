import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../../Components/NavBar/nav-bar/nav-bar.component';
import { AppComponent } from '../../../app.component';
import { FooterComponent } from '../../../Components/Footer/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavBarComponent,AppComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
