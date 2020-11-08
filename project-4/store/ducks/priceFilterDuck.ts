
// Types

export type filterAction = {
    type: string;
    payload: string;
  };
  

// Actions

const PRICE_FILTER_UPDATED = 'PRICE_FILTER_UPDATED';

//Reducer

export default function filterReducer(state: string[]=[], action: filterAction){
    switch(action.type) {
        case PRICE_FILTER_UPDATED:
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


export function updatePriceFilter(newFilter: string = '') {
    return {
      type: PRICE_FILTER_UPDATED,
      payload: newFilter
    };
  }


  