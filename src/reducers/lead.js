import { Map } from 'immutable';
import { createReducer } from '@reduxjs/toolkit';
import { setValueLead, clearLead } from 'actions/lead';

const initialState = new Map({});

export const lead = createReducer(initialState, (builder) => {
  builder
    .addCase(setValueLead, (state, action) => {
      if (action.payload?.type === 'date' || action.payload?.type === 'autoSelect'){
        if (action.payload?.id){
          return state.setIn([action.payload.id, action.payload.name], action.payload.value);
        }
        return state.set(action.payload.name, action.payload.value);
      }
      const id = action?.payload?.target?.id;
      const type = action?.payload?.target?.type;
      const name = action?.payload?.target?.name;
      const value = type === 'checkbox' ? action?.payload?.target?.checked : action?.payload?.target?.value;
      if (id) {
        return state.setIn([id, name], value);
      }
      return state.set(name, value);
    })
    .addCase(clearLead, (state, action) => {
      return state.clear();
    })
}) 