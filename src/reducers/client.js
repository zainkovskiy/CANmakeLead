import { createReducer } from "@reduxjs/toolkit";
import { Map } from "immutable";
import { setValueClient, clearClient } from 'actions/client';

const initialState = new Map({})

export const client = createReducer(initialState, (builder) => {
  builder
    .addCase(setValueClient, (state, action) => {
      const type = action.payload.target.type;
      const name = action.payload.target.name;
      const value = type === 'checkbox' ? action.payload.target.checked : action.payload.target.value;
      return state.set(name, value);
    })
    .addCase(clearClient, (state, action) => {
      return state.clear();
    })
})