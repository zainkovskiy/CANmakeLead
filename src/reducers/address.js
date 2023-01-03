import { createReducer } from "@reduxjs/toolkit";
import { Map, List } from "immutable";
import { toggleMap, toggleDadata, addValue, removeValue, editValue, clearAddress } from 'actions/address';

const initialState = new Map({
  isShowMap: false,
  isShowDadata: false,
})

export const address = createReducer(initialState, (builder) => {
  builder
    .addCase(toggleMap, (state, action) => {
      return state.set('isShowMap', !state.get('isShowMap'));
    })
    .addCase(toggleDadata, (state, action) => {
      return state.set('isShowDadata', !state.get('isShowDadata'));
    })
    .addCase(addValue, (state, action) => {
      const name = action.payload.name;
      return state.set(name, state.get(name) ? [...state.get(name), action.payload] : [action.payload]);
    })
    .addCase(removeValue, (state, action) => {
      const name = action.payload.name;
      return state.set(name, state.get(name).filter((item) => item.id !== action.payload.id));
    })
    .addCase(editValue, (state, action) => {
      const name = action.payload.name;
      const index = state.get(name).findIndex((item) => item.id === action.payload.id);
      return state.setIn([name, index, 'value'], action.payload.value)
    })
    .addCase(clearAddress, (state, action) => {
      return state.deleteAll(['dadata', 'mapArea'])
    })
  })