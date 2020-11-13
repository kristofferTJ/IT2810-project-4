import axios from 'axios';

// Types

export type counterAction = {
    type: string;
    payload: number;
  };
  

// Actions

const COUNTER_UPDATE_SUCCESS = 'COUNTER_UPDATE_SUCCESS';
const COUNTER_UPDATE_FAILURE = 'COUNTER_UPDATE_FAILURE';


// Reducer
export default function counterReducer(state: number = 0, action: counterAction) {
  switch (action.type) {
    case COUNTER_UPDATE_SUCCESS:
      const newState = action.payload;
      return newState;
      case COUNTER_UPDATE_FAILURE:
        console.log(
            'Restaurant count loading error, check if backend is connected properly'
          );
          return state;
    default:
      return state;
  }
}

// Action creator

export function fetchCounterSuccess(response: any) {
    return {
      type: COUNTER_UPDATE_SUCCESS,
      payload: Math.ceil(response.data/20),
    };
  }
  
  export function fetchCounterFailure() {
    return {
      type: COUNTER_UPDATE_FAILURE,
    };
  }
  


export function updateCounter(
    regionFilter: string[] = [],
    cuisineFilter: string[] = [],
    priceFilter: string[] = [],
    search: string = '',
  ) {

    const searchString = search ? `&name=${search}` : '';
  
    let regionString = '';
    for (let x = 0; x < regionFilter.length; x++) {
      regionString += `&region${x === 0 ? '' : x}=${regionFilter[x]}`;
    }
  
    let cuisineString = '';
    for (let i = 0; i < cuisineFilter.length; i++) {
      cuisineString += `&cuisine${i === 0 ? '' : i}=${cuisineFilter[i]}`;
    }
    
    let priceString = '';
    for (let x = 0; x < priceFilter.length; x++) {
      priceString += `&price${x === 0 ? '' : x}=${priceFilter[x]}`;
    }
  return  (dispatch: Function) => {
    axios.get(
      `http://it2810-41.idi.ntnu.no:3000/api/counter/?${
        + regionString + cuisineString + priceString  + searchString }`
    )
    .then((response) => dispatch(fetchCounterSuccess(response)))
    .catch((err) => dispatch(fetchCounterFailure));

  };
}