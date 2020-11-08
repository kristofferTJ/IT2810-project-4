
// Types

export type filterAction = {
    type: string;
    payload: string;
  };
  

// Actions

const CUISINE_FILTER_UPDATED = 'CUISINE_FILTER_UPDATED';

//Reducer

export default function filterReducer(state: string[]=[], action: filterAction){
    switch(action.type) {
        case CUISINE_FILTER_UPDATED:
            if(state.includes(action.payload)){
                const newState = state.filter(f => f != action.payload);
                return newState;
            }
            const newState = [...state, action.payload];
            return newState;
        default: 
        return state;
    }
}


// Action creators 


export function updateCuisineFilter(newFilter: string = '') {
    return {
      type: CUISINE_FILTER_UPDATED,
      payload: newFilter
    };
  }


  