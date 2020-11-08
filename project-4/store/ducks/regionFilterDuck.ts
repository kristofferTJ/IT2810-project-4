
// Types

export type filterAction = {
    type: string;
    payload: string;
  };
  

// Actions

const REGION_FILTER_UPDATED = 'REGION_FILTER_UPDATED';

//Reducer

export default function filterReducer(state: string[]=[], action: filterAction){
    switch(action.type) {
        case REGION_FILTER_UPDATED:
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


export function updateRegionFilter(newFilter: string = '') {
    return {
      type: REGION_FILTER_UPDATED,
      payload: newFilter
    };
  }


  