import { createAction, props } from '@ngrx/store';
import { ComicBookListElement } from 'src/app/model/comic-data.model';

export const addComicBook = createAction(
  '[comic-list] addComicBook',
  props<{ comic: ComicBookListElement }>()
);

export const editComicBook = createAction(
  '[comic-list] editComicBook',
  props<{ comic: ComicBookListElement }>()
);

export const deleteComicBook = createAction(
  '[comic-list] deleteComicBook',
  props<{ id: string }>()
);

export const startEdit = createAction(
  '[comic-list] startEdit',
  props<{ id: string }>()
);

export const stopEdit = createAction('[comic-list] stopEdit');
