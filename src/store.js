import { configureStore } from '@reduxjs/toolkit';
import generalSettingsReducer from './slices/generalSettingsSlice'

export const store = configureStore({
  reducer: {
    generalSettings: generalSettingsReducer,
  },
});
