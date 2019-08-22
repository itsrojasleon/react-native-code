import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/contetx/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);
const App = createAppContainer(navigator);

export default () => (
  <Provider>
    <App />
  </Provider>
);
