import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TransactionsService } from '../../../Services/Transactions/transactions.service';
import { LogInService } from '../../../Services/Log-In/log-in.service';
import { ApiService } from '../../../Services/API/api.service';
import { TransCardComponent } from '../../../Components/Transactional-Card/trans-card/trans-card.component';
import { Router, RouterOutlet , RouterModule } from '@angular/router';
import { RegisterService } from '../../../Services/Register/register.service';
import { PseComponent } from '../../PSE/pse/pse.component';
import { subscribe } from 'node:diagnostics_channel';
import { validateHeaderValue } from 'node:http';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule,TransCardComponent,FormsModule,ReactiveFormsModule,PseComponent,RouterOutlet,RouterModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {

  chatConversation: any = [];

  navigation = new Router();



  showLogin = true;
  showTransactions = false;
  showRegister = false;
  /*------------------------*/
  showPanelCDT = false; 
  showRegisterCDT = false;
  

  loginForm() {
    this.showLogin = true;
    this.showRegister = false;
    this.showTransactions = false;
  }

  TransactionsForm() {
    this.showTransactions = true;
    this.showRegister = false;
    this.showLogin = false;
  }

  RegisterForm() {
    this.showRegister = true;
    this.showPanelCDT = true;
    this.showLogin = false;
    this.showTransactions = false;
    this.showRegisterCDT = false;
  }
  /*----------------------*/

  RegisterCDTForm(){
    this.showPanelCDT = false;
    this.showRegisterCDT = true;
  }

  /*----------------------*/

  transaccion : any 

  box : any 

  /*---------------------*/

  chatGptRequest: any

  chatGptResponse : any = []

  /*----------------------*/

  chatGptHistory : any = [{ role: "system", content: "te llamas Pablo y eres un asesor financiero experto del banco DamasuBank, siempre di tu nombre al iniciar la conversacion" }]

  /*----------------------*/

  searchButton = true;

  lookingButton = false;

  /*------------------------*/

  showAlert: boolean = false;

  show() {
    this.showAlert = true;
  }

  closeAlert() {
    this.showAlert = false;
  }

  /*-----------------------*/

  showAlertVerification: boolean = false;

  show1() {
    this.showAlertVerification = true;
  }

  closeAlert1() {
    this.showAlertVerification = false;
  }

  /*-----------------------*/

  sendButton = true;

  sendlookingButton = false;

  /*------------------------*/

  sendButtonCDT = true;

  sendlookingButtonCDT = false;

  /*------------------------*/

  formularioForRegisterCDT: any

  /*-------------------------*/

  constructor(private Login:LogInService, private transactionsService : TransactionsService , private apiService:ApiService, private registerService:RegisterService , private formBuilder: FormBuilder){

    this.chatGptRequest = new FormGroup({
      message : new FormControl(""),
    })

    this.transaccion = new FormGroup({
      id : new FormControl(""),
      amount : new FormControl(""),
    })

    this.formularioForRegisterCDT = new FormGroup({
      name : new FormControl(""),
      id : new FormControl(""),
      investedMoney : new FormControl(""),
      BeginDate : new FormControl(""),
      PeriodMonths : new FormControl(""),
    })
  }

  
  users : any = []

  info : any = [] 

  records : any = []

  CDTinfo : any = []

  exactMoney : any = []

  /*-----------------------------*/
  
  pagDefault : number = 5

  /*-----------------------------*/

  ngOnInit() {
        this.Login.getinfo().subscribe({
        next: (user)=>{
          this.users = user
        }
      }),
      this.Login.getinfoDataBase().subscribe({
        next: (info)=> {
          this.info = info
          // const data = info[0].patrimony
          // console.log(data)
          // this.exactMoney = data
        } 
      }
      )
      this.Login.getinfoRecords().subscribe({
        next: (data)=> {
          const info = data
          const infoReformed = info.slice(0,(this.pagDefault))
          this.records = infoReformed
          console.log(info)
        } 
      }
      )
      this.Login.getinfoCDT().subscribe({
        next: (data)=> {
          console.log(data)
          this.CDTinfo = data
          const invest = data[0].investedMoney
          this.exactMoney = invest
        }
      })

      this.transaccion = this.formBuilder.group(
        {
          id: ['', 
            Validators.required],
          amount: ['', Validators.required]
        }
      );

      this.formularioForRegisterCDT = this.formBuilder.group(
        {
          name: ['', Validators.required],
          id: ['', Validators.required],
          investedMoney: [
            '',
            [
              Validators.required
            ]
          ],
          BeginDate: ['', Validators.required],
          PeriodMonths: ['', Validators.required] 
        }
      );
  }

  checkResponse() {
    this.pushChatContent(this.chatGptRequest.value.message,'You','Tú')
    this.pushHistoryContent("user",this.chatGptRequest.value.message);
    this.preparinginfo()
    this.chatGptRequest.reset()
  }


  pushChatContent(content?:string, person?:string, cssClass?:string , imageURL?:string) {
    const chatToPush: any = {  response:content, person:person , cssClass:cssClass , image :imageURL };
    this.chatConversation.push(chatToPush);
  }

  pushHistoryContent(role: string, content:string){
    const historyToPush: any = { role:role, content:content};
    this.chatGptHistory.push(historyToPush);
  }

  removeToken(){
    localStorage.removeItem("Beaver")
  }

  saveinfo(){
    const id = this.transaccion.value.id
    const amount = this.transaccion.value.amount
    this.sendButton = false;
    this.sendlookingButton = true;
    this.verifyUser(id,amount)
  }

  verifyUser(id:number, amount:number) {
    this.transactionsService.sendMoney( id, amount ).subscribe({
      next: (token)=>{
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

  /*-------------------------------------------------------*/

  preparinginfo(){
    this.searchButton = false;
    this.lookingButton = true;
    const message = this.chatGptHistory
    this.sendmessage(message)
  }

  sendmessage(message:any) {
    this.apiService.sendMessageToChatGpt(message).subscribe({
      next: (data)=>{
        const info = data 
        this.pushChatContent(info,'Mr Bot','Asistente')
        this.pushHistoryContent("assistant" , info[0])
        this.searchButton = true;
        this.lookingButton = false; 
        console.log("Respuesta exitosa de Mr.ChatGPT")
      }
    })
  }


  /*----------------------------------------------------------*/

  CDT : string = "a saving pig which includes the words CDT"

  Script : any = [{ role: "user", content: "Explica las razones por las cuales el CDT de DamasuBank es muy buena inversion, tenemos una tasa de 14.56$" }]

  FakeScript : string = "Explica las cualidades de nuestro CDT, nombrando las cualidades"

  /*-----------------------------------------------------------*/

  preparingInfoImagePig(){
    const imgToPrint = this.CDT
    const Script = this.Script
    this.pushChatContent(this.FakeScript,'You','Tú')
    this.searchButton = false;
    this.lookingButton = true;
    this.requestImage(imgToPrint,Script)
  }

  preparingInfoImageSuccess(){
    this.CDT = "a couple holding the keys of their new house due to their financial stability"
    this.Script = [{ role: "user", content: "Demuestra que es estabilidad financiera y maneras de alcanzarla" }]
    this.FakeScript = "Demuestra que es estabilidad financiera y como se puede alcanzar"
    const imgToPrint = this.CDT
    const Script = this.Script
    this.pushChatContent(this.FakeScript,'You','Tú')
    this.searchButton = false;
    this.lookingButton = true;
    this.requestImage(imgToPrint,Script)
  }

  preparingInfoImageRecession(){
    this.CDT = "generate a chart illustrating the decline of my income over time"
    this.Script = [{ role: "user", content: "Como evitar una recesión economica personal" }]
    this.FakeScript = "Como evitar una recesión economica personal"
    const imgToPrint = this.CDT
    const Script = this.Script
    this.pushChatContent(this.FakeScript,'You','Tú')
    this.searchButton = false;
    this.lookingButton = true;
    this.requestImage(imgToPrint,Script)
  }

  preparingInfoImageInvestment(){
    this.CDT = "A successful businessman making investments"
    this.Script = [{ role: "user", content: "Genera un plan de inversion a corto plazo y con alto riezgo general" }]
    this.FakeScript = "Genera un plan de inversion a corto plazo y con alto riezgo"
    const imgToPrint = this.CDT
    const Script = this.Script
    this.pushChatContent(this.FakeScript,'You','Tú')
    this.searchButton = false;
    this.lookingButton = true;
    this.requestImage(imgToPrint,Script)
  }

  requestImage(imgToPrint:string , Script :string) {
    this.apiService.receiveImageFromChatGpt(imgToPrint).subscribe({
      next : (URLimg)=>{
        this.apiService.sendMessageToChatGpt(Script).subscribe({
          next: (data)=>{
            const info = data
            this.pushChatContent("",'Mr Bot','Asistente',URLimg) 
            this.pushChatContent(info,'Mr Bot','Asistente')
            this.pushHistoryContent("assistant" , info[0])
            this.searchButton = true;
            this.lookingButton = false; 
            console.log("Imagen enviada exitosamente junto con el texto")
          }
        })
      }
    })
  }


  /*-------------------------------------------------------------*/



  /*-----------------------------------------------------------*/

  moreInfoRegarding(){
    const result = this.pagDefault + (99) 
    // this.pagDefault = result
    // console.log(this.pagDefault)
    this.Login.getinfoRecords().subscribe({
      next: (data)=> {
        const info = data
        const infoReformed = info.slice(0,(result))
        this.records = infoReformed
        console.log(info)
      } 
    }
    )
  }

  /*----------------------------------------------------------*/

  preparingInfoCDT(){
    const name = this.formularioForRegisterCDT.value.name
    const id = this.formularioForRegisterCDT.value.id
    const BeginDate = this.formularioForRegisterCDT.value.BeginDate
    const PeriodMonths = this.formularioForRegisterCDT.value.PeriodMonths
    const investedMoney = this.formularioForRegisterCDT.value.investedMoney
    this.sendButtonCDT = false 
    this.sendlookingButtonCDT = true
    this.showinformation2(name, id, BeginDate, PeriodMonths, investedMoney)
  }

  /*----------------------------------------------------------*/

  showinformation2(name:string, id:number, BeginDate:string, PeriodMonths:string,investedMoney:number){
    this.registerService.registerUserCDT(name,id,BeginDate,PeriodMonths,investedMoney).subscribe({
      next: (data)=> {
        console.log(data)
        this.sendButtonCDT = true 
        this.sendlookingButtonCDT = false
        this.show()
      } 
    })
  }
  
  /*------------------------------------------------------------

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
