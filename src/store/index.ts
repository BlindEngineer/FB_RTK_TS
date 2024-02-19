import {configureStore} from "@reduxjs/toolkit";
import  userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  }
});

//ХЕлперы, помогающие работать с селектором и диспатчем
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;