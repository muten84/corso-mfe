import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCategories, fetchHomeProducts } from '../../../service/api'
import { createSelector } from '@reduxjs/toolkit'

const initialState = {
  categoryList: undefined,
  homeProductList: undefined
}

export const fetchCategoriesAsync = createAsyncThunk(
    'users/fetchCategoriesAsync',
    async () => {
      const response = await fetchCategories();
      return response.data;
    }
  );

export const fetchHomeProductsAsync = createAsyncThunk(
    'users/fetchHomeProducts',
    async () => {
      const response = await fetchHomeProducts(10);
      return response.data;
    }
  );

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
      // Add user to the state array
      state.categoryList = action.payload;
    })
    .addCase(fetchHomeProductsAsync.fulfilled, (state, action) => {
      state.homeProductList = action.payload;
    })
  },
})

// export const { } = categoriesSlice.actions

const selectSelf = (state) => state
export const selectCategories = createSelector(selectSelf, (state) => state.productCategories.categories.categoryList)
export const selectHomeProducts = createSelector(selectSelf, (state) => state.productCategories.categories.homeProductList)

export default categoriesSlice.reducer