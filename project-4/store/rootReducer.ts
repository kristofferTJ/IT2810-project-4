import { combineReducers } from 'redux';
import restaurantDuck from './ducks/restaurantDuck';
import cuisineFilterDuck from './ducks/cuisineFilterDuck';
import priceFilterDuck from './ducks/priceFilterDuck';
import regionFilterDuck from './ducks/regionFilterDuck';
import searchDuck from './ducks/searchDuck';
import sortingDuck from './ducks/sortingDuck';
import skipReducer from './ducks/skipDuck';
import commentReducer from './ducks/commentDuck';
import counterReducer from './ducks/counterDuck';

const rootReducer = combineReducers({
    restaurant: restaurantDuck,
    regionFilter: regionFilterDuck,
    priceFilter: priceFilterDuck,
    cuisineFilter: cuisineFilterDuck,
    search: searchDuck,
    sorting: sortingDuck,
    skip: skipReducer,
    comment: commentReducer,
    counter: counterReducer
});

export default rootReducer;