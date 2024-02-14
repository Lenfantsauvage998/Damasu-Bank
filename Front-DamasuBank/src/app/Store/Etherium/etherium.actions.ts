import { createAction, props } from "@ngrx/store"

export const setEtherium = createAction(
    "[Etherium] Set Etherium",
    props<{value:number}>()
  )