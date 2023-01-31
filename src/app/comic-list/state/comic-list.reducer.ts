import { createReducer, on } from '@ngrx/store';
import {
  ComicBookListElement,
  ELEMENT_DATA,
} from 'src/app/model/comic-data.model';

import {
  addComicBook,
  deleteComicBook,
  editComicBook,
  startEdit,
  stopEdit,
} from './comic-list.action';

export interface ComicBookListState {
  comicList: ComicBookListElement[];
  editedId: string;
  editedComic: ComicBookListElement;
  totalCount: number;
}

export const initialState: ComicBookListState = {
  comicList: ELEMENT_DATA,
  editedId: '-1',
  editedComic: {},
  totalCount: ELEMENT_DATA.length,
};

export const comicBookListReducer = createReducer(
  initialState,
  on(addComicBook, (state, { comic }) => {
    const currentCount = state.totalCount + 1;
    const newComic = { ...comic, id: currentCount?.toString() };
    return {
      ...state,
      comicList: [...state.comicList, newComic],
      totalCount: currentCount,
    };
  }),
  on(editComicBook, (state, { comic }) => {
    const updatedComicList = [...state.comicList];
    const editedComic = {
      ...updatedComicList[parseInt(state.editedId)],
      ...comic,
    };
    updatedComicList[parseInt(state.editedId) - 1] = editedComic;
    return {
      ...state,
      comicList: [...updatedComicList],
    };
  }),
  on(deleteComicBook, (state, { id }) => {
    const oldComic = [...state.comicList];
    const remComic = oldComic
      .filter((data) => data.id !== id)
      .map((data, index) => {
        const newdata = { ...data };
        newdata.id = (index + 1).toString();
        return newdata;
      });

    return {
      ...state,
      comicList: [...remComic],
      editedId: '-1',
      editedComic: {},
    };
  }),
  on(startEdit, (state, { id }) => {
    return {
      ...state,
      editedId: id,
      editedComic: { ...state.comicList[parseInt(id) - 1] },
    };
  }),
  on(stopEdit, (state) => {
    return {
      ...state,
      editedId: '-1',
      editedComic: {},
    };
  })
);
