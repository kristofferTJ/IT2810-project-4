import React from 'react'
import { FlatList } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../pages/HomeScreen';
import { updateCuisineFilter } from '../../store/ducks/cuisineFilterDuck';
import { updateRegionFilter } from '../../store/ducks/regionFilterDuck';

function PriceFiltersComponent() {

    const allCuisines: string[] = ['American', 'Asian', 'Italian',  'Indian' ,'Japanese', 'Korean', 'Vegetarian']
    const activeCuisines: string[] = useSelector((state: stateType) => state.cuisineFilter)

    const dispatch = useDispatch();


    return (
        <FlatList
        data={allCuisines}
        keyExtractor={(regionItem) => regionItem}
        numColumns={2}
        renderItem={({item}) => (
          <CheckBox
            key={item}
            style={{ flex: 1, padding: 10}}
            onClick={() => {
              dispatch(updateCuisineFilter(item));
            }}
            isChecked={activeCuisines.includes(item)}
            rightText={item}
          ></CheckBox>
        )}
      
      ></FlatList>
    )
}

export default PriceFiltersComponent;