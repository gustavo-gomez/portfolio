import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedLanguage: 'ES',
  darkMode: 'light'
}

export const generalSettingsSlice = createSlice({
  name: 'generalSettings',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload
    },
    changeDarkMode: (state, action) => {
      state.darkMode = action.payload
    }
  }
})

export const {changeLanguage, changeDarkMode} = generalSettingsSlice.actions

export const selectedLanguage = (state) => state.generalSettings.selectedLanguage;
export const currentDarkMode = (state) => state.generalSettings.darkMode;

export default generalSettingsSlice.reducer
