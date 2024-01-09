import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInService } from '../../../Services/Log-In/log-in.service';
import { RegisterService } from '../../../Services/Register/register.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterOutlet, RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

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

  formularioUsers: any

  formularioForRegister: any

  constructor(private login:LogInService ,private router:Router, private register:RegisterService){

    this.formularioUsers = new FormGroup({
      email : new FormControl(),
      password : new FormControl(),
    }),

    this.formularioForRegister = new FormGroup({
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
    const email = this.formularioUsers.value.email
    const password = this.formularioUsers.value.password
    this.verifyUser(email, password )
  }

  verifyUser(email:string, password:string) {
    this.login.login(email, password ).subscribe({
      next: (token)=>{
        console.log(token[0])
        this.login.savetoken(token[0])
        this.router.navigate(["/Balance"])
      }
    })
  }

  
  saveuserForRegister(){
    const name = this.formularioForRegister.value.name
    const age = this.formularioForRegister.value.age
    const id = this.formularioForRegister.value.id
    const phoneNumber = this.formularioForRegister.value.phoneNumber
    const address = this.formularioForRegister.value.address
    const email = this.formularioForRegister.value.email
    const password = this.formularioForRegister.value.password
    this.newUser(name,age, id, phoneNumber, address, email, password )
  }

  newUser(name:string , age:number, id:number, phoneNumber:string, address:string, email:string, password:string) {
    this.register.registerUser(name, age , id, phoneNumber, address, email, password ).subscribe({
      next: (token)=>{
        console.log(token[0])
        this.register.savetoken(token[0])
        this.router.navigate(["/Balance"])
      }  
    })
    this.register.registerUserDataBase(id).subscribe({
      next : (info)=>{
        console.log(info)
      }
    })
    this.register.registerUserRecords(id).subscribe({
      next : (data)=>{
        console.log(data)
        console.log("Se creo en base de datos")
      }
    })
  }

}
