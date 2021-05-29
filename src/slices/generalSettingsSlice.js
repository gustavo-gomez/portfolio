import {createSlice} from '@reduxjs/toolkit';
import {themeColors} from "../util/Constans";

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
      document.body.style.setProperty('--background-color', themeColors[action.payload].backgroundColor)
      state.darkMode = action.payload
    }
  }
})

export const {changeLanguage, changeDarkMode} = generalSettingsSlice.actions

export const selectedLanguage = (state) => state.generalSettings.selectedLanguage;
export const currentDarkMode = (state) => state.generalSettings.darkMode;

export default generalSettingsSlice.reducer
