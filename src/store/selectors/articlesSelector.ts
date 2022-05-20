import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const baseArticlesState = (state: RootState) => state.articlesReducer.articles;
const baseIsLoadingState = (state: RootState) =>
  state.articlesReducer.isLoading;
const baseErrorState = (state: RootState) => state.articlesReducer.error;

export const getArticles = createSelector(
  baseArticlesState,
  (articles) => articles
);
export const getIsLoading = createSelector(
  baseIsLoadingState,
  (isLoading) => isLoading
);
export const getError = createSelector(
  baseErrorState,
  (error) => error
);
