import { createAction, props } from "@ngrx/store"

export const setBitcoin = createAction(
    "[Bitcoin] Set Bitcoin",
    props<{value:number}>()
  )
  
