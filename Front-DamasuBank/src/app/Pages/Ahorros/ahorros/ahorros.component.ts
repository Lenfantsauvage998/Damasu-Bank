import { Component,HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../../Components/NavBar/nav-bar/nav-bar.component';
import { LogInService } from '../../../Services/Log-In/log-in.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../../Components/Footer/footer/footer.component';




@Component({
  selector: 'app-ahorros',
  standalone: true,
  imports: [CommonModule, NavBarComponent, FooterComponent ,FormsModule, ReactiveFormsModule],
  templateUrl: './ahorros.component.html',
  styleUrl: './ahorros.component.css'
})
export class AhorrosComponent {
  calculateRentability: any
     valorEntrada :number = 0;
     tasaInteres= 0.95;
     resultado:number =0;
constructor(){
  this.calculateRentability = new FormGroup({
    imputMoney: new FormControl()
  })
}

     calcular(): void {
     
      this.resultado = this.calculateRentability.value.imputMoney * (this.tasaInteres / 100);
      console.log(this.resultado);
    }
 

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
