import { createAction, props } from "@ngrx/store"
import {Transactions} from "../models/Transactions.model"

export const addTransaction = createAction(
    "[TRANSACTIONS] Add TRANSACTIONS",
    props<{Transaction:number}>()
  )
  
// export const removeTransaction = createAction(
//     "[TRANSACTIONS] Remove TRANSACTIONS",
//     props<{Transaction:Transactions}>()
// )
