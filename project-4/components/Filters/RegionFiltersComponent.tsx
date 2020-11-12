import React from 'react'
import { FlatList } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import { stateType } from '../../App';
import { updateRegionFilter } from '../../store/ducks/regionFilterDuck';

function RegionFiltersComponent() {

    const allRegions: string[] = ['Austria', 'California', 'Chicago', 'Denmark', 'New York City', 'Norway', 'Sweden']
    const activeRegions: string[] = useSelector((state: stateType) => state.regionFilter)

    const dispatch = useDispatch();


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
              dispatch(updateRegionFilter(item));
            }}
            isChecked={activeRegions.includes(item)}
            rightText={item}
          ></CheckBox>
        )}
      
      ></FlatList>
    )
}

export default RegionFiltersComponent
