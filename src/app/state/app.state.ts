import { ActionReducerMap } from '@ngrx/store';

import {
  comicBookListReducer,
  ComicBookListState,
} from '../comic-list/state/comic-list.reducer';

interface AppState {
  comicBooks: ComicBookListState;
}

export const reducers: ActionReducerMap<AppState> = {
  comicBooks: comicBookListReducer,
};
