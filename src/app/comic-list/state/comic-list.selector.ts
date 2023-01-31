import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComicBookListState } from './comic-list.reducer';

export const comicFeature =
  createFeatureSelector<ComicBookListState>('comicBooks');

export const comicList = createSelector(comicFeature, (state) => {
  return state.comicList;
});

export const editedComic = createSelector(comicFeature, (state) => {
  return state.editedComic;
});
