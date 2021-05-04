import * as Constans from '../util/Constans'

export const setLanguage = (language) => {
  return {
    type: Constans.LANGUAGE,
    payload: language
  }
}