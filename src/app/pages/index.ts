import { NavigationStructureProps } from '@common/types/navigation';
import { MainScreenModule } from './MainScreen';
import { RecipeScreenModule } from './RecipeScreen';

export const navigationStructure: NavigationStructureProps = {
  [MainScreenModule.name]: {
    screen: MainScreenModule.module,
    navigationOptions: MainScreenModule.options,
  },
  [RecipeScreenModule.name]: {
    screen: RecipeScreenModule.module,
    navigationOptions: RecipeScreenModule.options,
  },
};

export default {
  MainScreenModule,
  RecipeScreenModule,
};
