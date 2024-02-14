import { createReducer, on } from "@ngrx/store"
import { setBitcoin } from "./bitcoin.actions";

let initState : any = []
const BITCOIN = "Bitcoin"
const localStorageInfo: any = () => {
  if (typeof window !== 'undefined') {
    
    // const navigation = new Router();

    if (localStorage.getItem("bitcoin")) {
      const data = localStorage.getItem("bitcoin")
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

export const bitcoinReducer = createReducer(
  initState,
  on(setBitcoin, (oldState, { value }) => {
    const newState = value
    localStorage.setItem(BITCOIN, JSON.stringify(newState))
    return newState
  })
)
