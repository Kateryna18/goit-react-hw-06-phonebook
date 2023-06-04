import { conctactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducer = {
  contacts: conctactsReducer,
  filter: filterReducer,
}
