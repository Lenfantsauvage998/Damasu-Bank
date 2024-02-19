import { createAction, props } from "@ngrx/store"

export const setRecords = createAction(
    "[Records] Set Records",
    props<{value:any}>()
  )