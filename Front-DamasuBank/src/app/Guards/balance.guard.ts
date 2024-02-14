import { Router } from "@angular/router";

export const balanceguard = () => {

  if (typeof window !== 'undefined') {
    
    const navigation = new Router();

    if (localStorage.getItem("Beaver")) {
      return true;
    } else {
      navigation.navigate(["/Home"]);  
      return false;
    }
  } else {
    console.log("I'm in the server side")
    return false
  }
};

// export const ngrx = () => {

//   if (typeof window !== 'undefined') {
    
//     // const navigation = new Router();

//     if (localStorage.getItem("ScheduledTransaction")) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     console.log("I'm in the server side")
//     return false
//   }
// };
