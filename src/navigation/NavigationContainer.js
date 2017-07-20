import { StackNavigator } from 'react-navigation';

import HomeScreenContainer from 'src/HomeScreenContainer';

export default StackNavigator(
  {
    Home: { screen: HomeScreenContainer },
  },
  {
    initialRouteName: 'Home',
  },
);
