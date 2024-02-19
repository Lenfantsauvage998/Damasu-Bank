import { createReducer, on } from "@ngrx/store"
import { setBalance } from "./balance.actions"

let initState : any = 0

export const balanceReducer = createReducer(
  initState,
  on(setBalance, (oldState, { value }) => {
    const newState = value
    return newState
  })
)
