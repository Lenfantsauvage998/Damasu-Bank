import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { io } from "socket.io-client";
import { TransactionsService } from '../../../Services/Transactions/transactions.service';
import { LogInService } from '../../../Services/Log-In/log-in.service';
import { ApiService } from '../../../Services/API/api.service';
import { ApiStockService } from '../../../Services/API-STOCKS/api-stocks.service';
import { TransCardComponent } from '../../../Components/Transactional-Card/trans-card/trans-card.component';
import { Router, RouterOutlet , RouterModule } from '@angular/router';
import { RegisterService } from '../../../Services/Register/register.service';
import { PseComponent } from '../../PSE/pse/pse.component';
import { Store, select } from "@ngrx/store";
import { AppState } from '../../../app.state';
import { setBitcoin } from '../../../Store/Bitcoin/bitcoin.actions';
import { setEtherium } from '../../../Store/Etherium/etherium.actions';
import { setBalance } from '../../../Store/Balance/balance.actions';
import { setRecords } from '../../../Store/Records/records.actions';
// import { SocketService } from '../../../Services/Web-Socket/websocket.service';
import { WebTokens2Service } from '../../../Services/Web-Tokens2/web-tokens2.service';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

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

  /*-----------------------*/

  showinput : boolean = true

  showCalendar: boolean = false;

  showcalendar() {
    this.showCalendar = true;
    this.showinput = false;
  }

  closecalendar() {
    this.showCalendar = false;
    this.showinput = true;
  }

  showCronogram: boolean = true;

  showCronogramMaker: boolean = false;

  showcronogramMaker() {
    this.showCronogram = false;
    this.showCronogramMaker = true;
  } 
  
  closecronogramMaker() {
    this.showCronogram = true;
    this.showCronogramMaker = false;
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

  formularioScheduled : any 

  /*-------------------------*/

  constructor(private Login:LogInService, private transactionsService : TransactionsService , private apiService:ApiService, 
    private registerService:RegisterService , private formBuilder: FormBuilder , private apistockservice:ApiStockService,
    private store:Store<AppState>, private WebTokens2Service:WebTokens2Service){

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

    this.formularioScheduled = new FormGroup({
      id : new FormControl(""),
      date : new FormControl(""),
      hour : new FormControl(""),
      amount : new FormControl(""),
    })
  }

  
  users : any = []

  info : any = [] 

  infox : any = [] 

  records : any = []

  CDTinfo : any = []

  exactMoney : any = []

  Bitcoin = []

  ETH = []

  WS : any = []

  /*-----------------------------*/
  
  pagDefault : number = 5  

  /*-----------------------------*/

  ngOnInit() {
        this.Login.getinfo().subscribe({
        next: (user)=>{
          this.users = user
          // this.WebTokens2Service.connect(user[0].id)
        }
      }),
      this.Login.getinfoDataBase().subscribe({
        next: (info)=> {
          this.info = info
          // console.log(info[0].patrimony)
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
        } 
      }
      )
      this.Login.getinfoCDT().subscribe({
        next: (data)=> {
          // console.log(data)
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
      
      this.apistockservice.sendMessageToSTOCKAPI().subscribe({
        next: (data)=> {
          const info = data
          this.Bitcoin = info.results[0].c
          this.store.dispatch(setBitcoin({value : info.results[0].c}))
        }
      })

      this.apistockservice.sendMessageToSTOCKAPIETH().subscribe({
        next: (data)=> {
          const info = data
          this.ETH = info.results[0].c
          this.store.dispatch(setEtherium({value: info.results[0].c}))
        }
      })

      this.store.pipe(select("balance")).subscribe((data: number) => {
        this.infox = data
      })

      
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
        this.store.dispatch(setBalance({value : amount}))
        this.Login.getinfoRecords().subscribe({
          next: (data)=> {
            this.records = []
            const info = data
            console.log(info)
            const infoReformed = info.slice(0,(this.pagDefault))
            this.store.dispatch(setRecords({value : infoReformed}))
            this.store.pipe(select("records")).subscribe((value: any) => {
              console.log(value)
              this.records = value
            })
          } 
        }
        )
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


  /*------------------------------------------------------------*/

  preparingInfoScheduled(){
    const id = this.formularioScheduled.value.id
    const date = this.formularioScheduled.value.date
    const hour = this.formularioScheduled.value.hour
    const amount = this.formularioScheduled.value.amount
    console.log(id,date,hour,amount)
  }
  
  /*-------------------------------------------------------------*/


  }

