import { Button } from 'react-native';

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