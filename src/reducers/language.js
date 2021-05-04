import * as Constants from "../util/Constans";

const initialState = {
  selectedLanguage: 'EN'
}

export function language(state = initialState, {payload, type}) {
  switch (type) {
    case Constants.LANGUAGE:
      return {
        ...state,
        selectedLanguage: payload
      }
    default:
      return state
  }
}