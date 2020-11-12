import React from 'react'
import { FlatList } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../App';
import { updatePriceFilter } from '../../store/ducks/priceFilterDuck';
import { updateRegionFilter } from '../../store/ducks/regionFilterDuck';

function PriceFiltersComponent() {

    const allPrices: string[] = ['$', '$$', '$$$', '$$$$', '$$$$$']
    const activePrices: string[] = useSelector((state: stateType) => state.priceFilter)

    const dispatch = useDispatch();


    return (
        <FlatList
        data={allPrices}
        keyExtractor={(regionItem) => regionItem}
        numColumns={2}
        renderItem={({item}) => (
          <CheckBox
            key={item}
            style={{ flex: 1, padding: 10}}
            onClick={() => {
              dispatch(updatePriceFilter(item));
            }}
            isChecked={activePrices.includes(item)}
            rightText={item}
          ></CheckBox>
        )}
      
      ></FlatList>
    )
}

export default PriceFiltersComponent;
