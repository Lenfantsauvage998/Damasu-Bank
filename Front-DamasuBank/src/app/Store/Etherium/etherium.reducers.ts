import { createReducer, on } from "@ngrx/store"
import { setEtherium } from "./etherium.actions" 

let initState : any = []
const ETH = "Etherium"
const localStorageInfo: any = () => {
  if (typeof window !== 'undefined') {
    
    // const navigation = new Router();

    if (localStorage.getItem("etherium")) {
      const data = localStorage.getItem("etherium")
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

export const etheriumReducer = createReducer(
  initState,
  on(setEtherium, (oldState, { value }) => {
    const newState = value
    localStorage.setItem(ETH, JSON.stringify(newState))
    return newState
  })
)