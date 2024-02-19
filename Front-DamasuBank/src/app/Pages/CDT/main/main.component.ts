import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavBarComponent } from '../../../Components/NavBar/nav-bar/nav-bar.component';
import { FooterComponent } from '../../../Components/Footer/footer/footer.component';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule,NavBarComponent,FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private router: Router , private modalService: BsModalService) {}
  onNavigate() {
    this.router.navigate(['/CDT/personal-info']);
  }
}
