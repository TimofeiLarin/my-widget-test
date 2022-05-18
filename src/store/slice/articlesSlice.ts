import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IArticle from '../../models/IArticle';
import fetchArticles from '../action/fetchArticles';

interface IState {
  articles: IArticle[];
  isLoading: boolean;
  error: string;
}

const initialState: IState = {
  articles: [],
  isLoading: false,
  error: '',
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle(state, action: PayloadAction<IArticle>) {
      state.articles.unshift(action.payload);
    },
    changeArticle(state, action: PayloadAction<IArticle>) {
      state.articles.map((article) => {
        const { id } = article;
        if (id === action.payload.id) {
          return { id, title: action.payload.title, body: action.payload.body };
        } else {
          return article;
        }
      });
    },
    deleteArticle(state, action: PayloadAction<IArticle>) {
      state.articles.filter(({ id }) => id !== action.payload.id);
    },
  },
  extraReducers: {
    [fetchArticles.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchArticles.fulfilled.type]: (
      state,
      action: PayloadAction<IArticle[]>
    ) => {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = '';
    },
    [fetchArticles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default articlesSlice.reducer;
