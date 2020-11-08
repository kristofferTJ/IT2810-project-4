// Types

export type searchAction = {
    type: string;
    payload: string;
  };
  

// Actions

const SEARCH_UPDATED = 'SEARCH_UPDATED';

// Reducer
export default function searchReducer(state: string = '', action: searchAction) {
  switch (action.type) {
    case SEARCH_UPDATED:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}

// Action creator
export function updateSearch(search: string = '') {
  return {
    type: SEARCH_UPDATED,
    payload: search
  };
}