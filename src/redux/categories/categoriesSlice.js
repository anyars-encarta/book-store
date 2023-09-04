import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoryStatus: (state, action) => {
      // Check if the category exists in the state
      const { categoryId } = action.payload;
      const category = state.categories.find((cat) => cat.id === categoryId);

      // If the category exists, return its status; otherwise, return "Under construction"
      state.status = category ? category.status : 'Under construction';
    },
  },
});

export const { getCategoryStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
