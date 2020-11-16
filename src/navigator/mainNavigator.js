import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList174324Navigator from '../features/NotificationList174324/navigator';
import Settings174323Navigator from '../features/Settings174323/navigator';
import Settings174315Navigator from '../features/Settings174315/navigator';
import UserProfile174313Navigator from '../features/UserProfile174313/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList174324: { screen: NotificationList174324Navigator },
Settings174323: { screen: Settings174323Navigator },
Settings174315: { screen: Settings174315Navigator },
UserProfile174313: { screen: UserProfile174313Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
