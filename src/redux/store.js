import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const configureStore({
	reducer: {
	  contacts: contactsSliceReducer,
	  filters: filtersSliceReducer
	}
})


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});


export const configureStore 