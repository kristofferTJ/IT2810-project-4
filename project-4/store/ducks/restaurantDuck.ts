import { IRestaurant } from '../../../backend/models/Restaurant';
import axios from 'axios';

// Types

export type RestaurantAction = {
  type: string;
  payload: IRestaurant[];
};

// Actions

const GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS';
const GET_RESTAURANTS_FAILURE = 'GET_RESTAURANTS_FAILURE';

//Reducer

export default function restaurantReducer(
  state: IRestaurant[] = [],
  action: RestaurantAction
) {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return [...action.payload];
    case GET_RESTAURANTS_FAILURE:
      console.log(
        'Restaurants loading error, check if backend is connected properly'
      );
      return state;
    default:
      return state;
  }
}

// Action creators
export function fetchRestaurantsSuccess(response: any) {
  return {
    type: GET_RESTAURANTS_SUCCESS,
    payload: response.data,
  };
}

export function fetchRestaurantsFailure() {
  return {
    type: GET_RESTAURANTS_FAILURE,
  };
}

export function fetchRestaurants(
  skip: number = 0,
  regionFilter: string[] = [],
  cuisineFilter: string[] = [],
  priceFilter: string[] = [],
  search: string = '',
  sortBy: string = '',
  ascending: boolean = true
) {
  const searchString = search ? `&name=${search}` : '';
  const sortString = sortBy ? `&sort=${sortBy}` : '';
  const ascendingString = ascending ? '' : 'DESC';
  const skipInput = skip ? skip : 0;

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

  return (dispatch: Function) =>
    axios
      .get(
        `http://it2810-41.idi.ntnu.no:3000/api/restaurant/filter/?skip=${
          skipInput +
          regionString +
          cuisineString +
          priceString +
          searchString +
          sortString +
          ascendingString
        }`
      )
      .then((response) => dispatch(fetchRestaurantsSuccess(response)))
      .then((response) => console.log(response))
      .catch((err) => dispatch(fetchRestaurantsFailure));
}
