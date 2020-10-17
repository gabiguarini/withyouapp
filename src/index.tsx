import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
    Dashboard,
    FAQScreen,
    UserClinicsScreen,
    UserProfileScreen,
    MapViewScreen,

} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
        Dashboard,
        FAQScreen,
        UserClinicsScreen,
        UserProfileScreen,
        MapViewScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);
