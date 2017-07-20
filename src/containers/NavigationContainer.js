import { StackNavigator } from 'react-navigation';

import HomeScreenContainer from 'src/containers/HomeScreenContainer';

export default StackNavigator(
  {
    Home: { screen: HomeScreenContainer },
  },
  {
    initialRouteName: 'Home',
  },
);
