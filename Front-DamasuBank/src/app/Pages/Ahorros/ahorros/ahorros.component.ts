import { Component,HostListener, ElementRef } from '@angular/core';
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


}
  /*-
  constructor(private Login:LogInService){}

  users : any = []

  ngOnInit() {
        this.Login.getinfo().subscribe({
        next: (user)=>{
          console.log(user)
          this.users = user
        }
      })
  }
  
  usuarios : any = []  /*---- [] arrays ----*/   /*----- {} objeto ------*/


  /*
  traerUsers(){
    this.Login.obtenerPersonajes().subscribe({
      next: (result)=>{
        console.log(result)
        this.usuarios = result.usersGet
      }
    })
  }

  getusers(){
    this.Login.getinfo().subscribe({
      next: (user)=>{
        console.log(user)
        this.users = user
      }
    })
  }
}
------*/
