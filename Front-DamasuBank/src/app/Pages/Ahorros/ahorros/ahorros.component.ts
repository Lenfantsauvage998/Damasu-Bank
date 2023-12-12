import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../../Components/NavBar/nav-bar/nav-bar.component';
import { LogInService } from '../../../Services/Log-In/log-in.service';

@Component({
  selector: 'app-ahorros',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './ahorros.component.html',
  styleUrl: './ahorros.component.css'
})
export class AhorrosComponent {

  constructor(private Login:LogInService){}
  
  usuarios : any = {}

  traerUsers(){
    this.Login.obtenerPersonajes().subscribe({
      next: (result)=>{
        console.log(result)
        result = this.usuarios
      }
    })
    
  }
}
