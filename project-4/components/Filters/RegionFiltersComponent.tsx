import React from 'react'
import { FlatList } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../pages/HomeScreen';
import { updateRegionFilter } from '../../store/ducks/regionFilterDuck';
import { updateSkip } from '../../store/ducks/skipDuck';

function RegionFiltersComponent() {

    const allRegions: string[] = ['Austria', 'California', 'Chicago', 'Denmark', 'New York City', 'Norway', 'Sweden']
    const activeRegions: string[] = useSelector((state: stateType) => state.regionFilter)

    const dispatch = useDispatch();
    let skip = useSelector((state: stateType) => state.skip);

    return (
        <FlatList
        data={allRegions}
        keyExtractor={(regionItem) => regionItem}
        numColumns={2}
        renderItem={({item}) => (
          <CheckBox
            key={item}
            style={{ flex: 1, padding: 10}}
            onClick={() => {
              dispatch(updateRegionFilter(item)),
              dispatch(updateSkip(skip=0))
            }}
            isChecked={activeRegions.includes(item)}
            rightText={item}
          ></CheckBox>
        )}
      
      ></FlatList>
    )
}

export default RegionFiltersComponent
