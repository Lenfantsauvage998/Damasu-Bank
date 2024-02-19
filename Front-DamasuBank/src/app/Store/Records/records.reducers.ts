import { createReducer, on } from "@ngrx/store"
import { setRecords } from "./records.actions"

let initState : any 

export const recordReducer = createReducer(
  initState,
  on(setRecords, (oldState, { value }) => {
    const newState = value
    return newState
  })
)
