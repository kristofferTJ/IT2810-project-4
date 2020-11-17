import React from 'react'
import { FlatList } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../pages/Homescreen';
import { updateCuisineFilter } from '../../store/ducks/cuisineFilterDuck';
import { updateSkip } from '../../store/ducks/skipDuck';

function PriceFiltersComponent() {

    const allCuisines: string[] = ['American', 'Asian', 'Italian',  'Indian' ,'Japanese', 'Korean', 'Vegetarian']

    // Cuisines that are already chosen 
    const activeCuisines: string[] = useSelector((state: stateType) => state.cuisineFilter)

    const dispatch = useDispatch();
    let skip = useSelector((state: stateType) => state.skip);

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
              dispatch(updateCuisineFilter(item)),
              dispatch(updateSkip(skip=0))
            }}
            isChecked={activeCuisines.includes(item)}
            rightText={item}
          ></CheckBox>
        )}
      
      ></FlatList>
    )
}

export default PriceFiltersComponent;