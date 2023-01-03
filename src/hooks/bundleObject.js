export const useSelectionObject = (state) => {
  return {...state.lead.toJS(), ...state.address.toJS()}
}

export const useAllObject = (state) => {
  return {
    lead: {...state.lead.toJS(), ...state.address.toJS()},
    client: state.client.toJS()
  }
}