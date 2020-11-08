// Types

export type sortingAction = {
    type: string;
    payload: string;
  };

export type sortingType = {
    sortBy: string;
    ascending: boolean;
}
  

// Actions
const ASCENDING_BY_NAME = 'ASCENDING_BY_NAME';
const DESCENDING_BY_NAME = 'DESCENDING_BY_NAME';
const ASCENDING_BY_PRICE = 'ASCENDING_BY_PRICE';
const DESCENDING_BY_PRICE = 'DESCENDING_BY_PRICE';
const ASCENDING_BY_STARS = 'ASCENDING_VIEWS_BY_STARS';
const DESCENDING_BY_STARS = 'DESCENDING_BY_STARS';

// Reducer
export default function sortReducer(state: sortingType = { sortBy: 'name', ascending: true }, action: sortingAction) {
  switch (action.type) {
    case ASCENDING_BY_NAME:
      return { sortBy: 'name', ascending: true };
    case DESCENDING_BY_NAME:
      return { sortBy: 'name', ascending: false };
    case ASCENDING_BY_PRICE:
      return { sortBy: 'price', ascending: true };
    case DESCENDING_BY_PRICE:
      return { sortBy: 'price', ascending: false };
    case ASCENDING_BY_STARS:
      return { sortBy: 'stars', ascending: true };
    case DESCENDING_BY_STARS:
      return { sortBy: 'stars', ascending: false };
    default:
      return state;
  }
}

// Action creator
export function setSorting(sortBy = 'name', ascending = true) {
  const payload = { sortBy, ascending };
  switch (sortBy) {
    case 'name':
      return { type: ascending ? ASCENDING_BY_NAME : DESCENDING_BY_NAME, payload };
    case 'price':
      return { type: ascending ? ASCENDING_BY_PRICE : DESCENDING_BY_PRICE, payload };
    case 'stars':
      return { type: ascending ? ASCENDING_BY_STARS : DESCENDING_BY_STARS, payload };
    default:
      return;
  }
}