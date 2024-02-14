import { createReducer, on } from "@ngrx/store"
import {Transactions} from ".././models/Transactions.model";
import {addTransaction} from "./Transaction.actions";
import { leadingComment } from "@angular/compiler";

const initState : any = []
const SCHEDULED_TRANSACTION = "ScheduledTransaction"
const localStorageInfo: any = () => {
  if (typeof window !== 'undefined') {
    
    // const navigation = new Router();

    if (localStorage.getItem("ScheduledTransaction")) {
      const data = localStorage.getItem("ScheduledTransaction")
      initState.push(data)
      return true;
    } else {
      // navigation.navigate(["/Home"]);  
      return false;
    }
  } else {
    console.log("I'm in the server side ")
    return false
  }
}
// const initState: Transactions[] = localStorageInfo ? JSON.parse(localStorageInfo) : []



export const TransaccionReducer = createReducer( 
  initState,
  on(addTransaction, (oldState, { Transaction }) => {
    const newState = [...oldState , Transaction]
    localStorage.setItem(SCHEDULED_TRANSACTION, JSON.stringify(newState))
    return newState
  })
//   on(removeProduct, (oldState, { product }) => {

//     let info = [...oldState] 

//     // let item = product 

//     // console.log(info)

//     // console.log(item)

//     let position = info.indexOf(product);

//     // console.log(data)

//     let objetoEncontrado = info.find(objeto => objeto.id === product.id);

//     if (!objetoEncontrado) {
//     console.log(`El objeto no está en el array`);
//     } else {
//     // console.log('El objeto está en el array');
//     info.splice(position, 1);
//     console.log(`Se eliminó exitosamente`);
//     }

//     localStorage.setItem(CAR_LIST_NAME, JSON.stringify(info))

//     return info
//   })
)

