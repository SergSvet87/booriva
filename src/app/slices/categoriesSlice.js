import { createSlice } from '@reduxjs/toolkit';

import { categories } from '../../utils/categories';

const initialState = {
	categories: categories,
	error: '',
	activeCategory: 0,
};

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {
		changeCategory(state, action) {
			state.activeCategory = action.payload.indexCategory;
		},
	},
});

export const { changeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
