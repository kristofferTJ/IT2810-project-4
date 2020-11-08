// Types

export type skipAction = {
    type: string;
    payload: number;
  };
  

// Actions

const NEW_SKIP = 'NEW_SKIP';

// Reducer
export default function skipReducer(state: number = 0, action: skipAction) {
  switch (action.type) {
    case NEW_SKIP:
      const newState = action.payload;
      return newState;
    default:
      return state;
  }
}

// Action creator
export function updateSkip(skip: number) {
  return {
    type: NEW_SKIP,
    payload: skip
  };
}