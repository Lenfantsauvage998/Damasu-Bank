import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
/*import { RegisterService } from '../../../Services/Register/register.service';*/
/*import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';*/
import { LogInService } from '../../../Services/Log-In/log-in.service';
import { TransCardComponent } from '../../../Components/Transactional-Card/trans-card/trans-card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule,TransCardComponent],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {

  navigation = new Router();

  /*---- Info se trae del back ----*/ 

  inputs = [
    {
      id:1,
      place:"Madrid",
      date:"22/08/2029",
      amount:"-$850.000"
    }
]

  /*-------------------------------*/



  showLogin = true;
  showRegister = false;

  loginForm() {
    this.showLogin = true;
    this.showRegister = false;
  }

  RegisterForm() {
    this.showRegister = true;
    this.showLogin = false;
  }

  constructor(private Login:LogInService){}

  users : any = []


  ngOnInit() {
        this.Login.getinfo().subscribe({
        next: (user)=>{
          console.log(user)
          this.users = user
          console.log(user)
        }
      })
  }

  removeToken(){
    localStorage.removeItem("Beaver")
  }

  /*-------

  formularioUsers: any


  constructor(private register:RegisterService ,private router:Router){

    this.formularioUsers = new FormGroup({
      name : new FormControl(),
      age : new FormControl(),
      id : new FormControl(),
      phoneNumber : new FormControl(),
      address : new FormControl(),
      email : new FormControl(),
      password : new FormControl(),
    })

  }



  newuserbox : any = [] 
  
  saveuser(){
    const name = this.formularioUsers.value.name
    const age = this.formularioUsers.value.age
    const id = this.formularioUsers.value.id
    const phoneNumber = this.formularioUsers.value.phoneNumber
    const address = this.formularioUsers.value.address
    const email = this.formularioUsers.value.email
    const password = this.formularioUsers.value.password
    this.newUser(name,age, id, phoneNumber, address, email, password )
  }

  newUser(name:string , age:number, id:number, phoneNumber:string, address:string, email:string, password:string) {
    this.register.registerUser(name, age , id, phoneNumber, address, email, password ).subscribe({
      next: (token)=>{
        console.log(token[0])
        this.register.savetoken(token[0])
        this.router.navigate(["/Savings"])
      }
    })
  }
  ------------*/
}
