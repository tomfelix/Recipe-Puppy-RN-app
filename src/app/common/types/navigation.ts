import { NavigationStackOptions } from 'react-navigation-stack';
import { NavigationScreenComponent } from 'react-navigation';

export interface ScreenPropsConfig {
  options: NavigationStackOptions;
  module: NavigationScreenComponent<any, any>;
  name: string;
}

export interface NavigationStructureProps {
  [key: string]: {
    screen: NavigationScreenComponent<any, any>;
    navigationOptions: NavigationStackOptions;
  };
}
