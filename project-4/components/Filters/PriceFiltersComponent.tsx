import React from 'react'
import { FlatList } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../pages/HomeScreen';
import { updatePriceFilter } from '../../store/ducks/priceFilterDuck';
import { updateSkip } from '../../store/ducks/skipDuck';

function PriceFiltersComponent() {

    const allPrices: string[] = ['$', '$$', '$$$', '$$$$', '$$$$$']

    // Prices that are already chosen 
    const activePrices: string[] = useSelector((state: stateType) => state.priceFilter)

    const dispatch = useDispatch();
    let skip = useSelector((state: stateType) => state.skip);

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
              dispatch(updatePriceFilter(item)),
              dispatch(updateSkip(skip=0))
            }}
            isChecked={activePrices.includes(item)}
            rightText={item}
          ></CheckBox>
        )}
      
      ></FlatList>
    )
}

export default PriceFiltersComponent;
