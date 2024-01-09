import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsService } from '../../../Services/Transactions/transactions.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pse',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterOutlet, RouterModule],
  templateUrl: './pse.component.html',
  styleUrl: './pse.component.css'
})
export class PseComponent {

  /*------------------------*/

  PSEinput: any

  /*-------------------------*/

    /*------------------------*/

    showAlert: boolean = false;

    show() {
      this.showAlert = true;
    }
  
    closeAlert() {
      this.showAlert = false;
    }
  
    /*-----------------------*/


   /*-----------------------*/

   sendButton = true;

   sendlookingButton = false;
 
   /*------------------------*/  

  constructor(private transactionsService:TransactionsService){

    this.PSEinput = new FormGroup({
      id : new FormControl("",[Validators.required,Validators.minLength(1)]),
      request : new FormControl("",[Validators.required,Validators.minLength(1)]),
    })

  }

  saveinfo(){
    const id = this.PSEinput.value.id
    const amount = this.PSEinput.value.request
    this.sendButton = false;
    this.sendlookingButton = true;
    this.PSEinput.reset()
    this.money(id,amount)
  }

  money(id:number, request:number) {
    this.transactionsService.sendMoneyPSE(id, request).subscribe({   
      next: (info)=>{
        console.log("Transaccion Exitosa se logro bro")
        this.sendButton = true;
        this.sendlookingButton = false;
        this.show()
      },
      error(err) {
          console.error(err)
      },
    })
  }
}
