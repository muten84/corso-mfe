import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from "./reducers";
import { combineReducers } from "redux";
import counterReducer from '../redux/slice/CounterSlice'
import categoriesReducer  from "./slice/CategoriesSlice";

//export default createStore(rootReducer);

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      productCategories: combineReducers({
        categories: categoriesReducer
      })
  },
})

export default store;