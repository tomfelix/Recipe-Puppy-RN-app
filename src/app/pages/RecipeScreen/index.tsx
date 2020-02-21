import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  NavigationStructureProps,
  ScreenPropsConfig,
} from '@common/types/navigation';
import { NavigationTitle } from '@common/components';
import { RecipeData, MainScreenState } from '@pages/MainScreen/namespace';
import RecipeScreen from './RecipeScreen';

export interface StateProps {
  recipes: Array<RecipeData>;
}

export type OwnProps = WrappedComponentProps & NavigationStackScreenProps;

interface ReducerType {
  mainScreenReducer: MainScreenState;
}

const mapStateToProps = (state: ReducerType): StateProps => {
  return {
    recipes: state.mainScreenReducer.recipes,
  };
};

const RecipeScreenComposed = compose<
  NavigationScreenComponent<ScreenPropsConfig, NavigationStructureProps>
>(
  injectIntl,
  connect<StateProps, null, OwnProps, ReducerType>(mapStateToProps),
)(RecipeScreen);

export const RecipeScreenModule: ScreenPropsConfig = {
  module: RecipeScreenComposed,
  name: 'RecipeScreen',
  options: {
    header: () => <NavigationTitle title="mainRecipes.header" />,
    headerStyle: {
      height: 60,
    },
  },
};
