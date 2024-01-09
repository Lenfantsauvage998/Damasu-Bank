import { Component,HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../../Components/NavBar/nav-bar/nav-bar.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../../../Components/Footer/footer/footer.component';
import { RouterOutlet , RouterModule } from '@angular/router';


@Component({
  selector: 'app-ahorros',
  standalone: true,
  imports: [CommonModule, NavBarComponent ,FormsModule, ReactiveFormsModule,FooterComponent,RouterOutlet,RouterModule ],
  templateUrl: './ahorros.component.html',
  styleUrl: './ahorros.component.css'
})
export class AhorrosComponent {

  inputNumber: any

  percentage : number = 0.96

  periodOfTIme: any

  result :any = "Ingresa un monto"


  constructor(){

    this.inputNumber = new FormGroup({
      money : new FormControl(),
      months : new FormControl()
    })
  }


  operation(){
    const money = this.inputNumber.value.money
    const time = this.inputNumber.value.months
    const result = money * Math.pow(1 + (this.percentage / 100), time);
    this.result = "US$" + result.toFixed(0)
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
