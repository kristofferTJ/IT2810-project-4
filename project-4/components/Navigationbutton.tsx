import { Button } from 'react-native';

type Props = {
    navigation: any
  }

const Navigationbutton = ({navigation}: any) => {
    return (
      <Button
        title="Go to restaurantpage"
        onPress={() =>
          navigation.navigate('Restaurant')
        }
      />
    );
  };


export default Navigationbutton;