import React from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { NavigationScreenComponent } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import {
  NavigationStructureProps,
  ScreenPropsConfig,
} from '@common/types/navigation';
import { NavigationTitle } from '@core/common/components';
import { MainScreenState, RecipeData } from './namespace';
import { fetchRecipes } from './store/actions';
import MainScreen from './MainScreen';

export interface DispatchProps {
  fetchRecipes(ingredients: string): void;
}

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

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ fetchRecipes }, dispatch);

const MainScreenComposed = compose<
  NavigationScreenComponent<ScreenPropsConfig, NavigationStructureProps>
>(
  injectIntl,
  connect<StateProps, DispatchProps, OwnProps, ReducerType>(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MainScreen);

export const MainScreenModule: ScreenPropsConfig = {
  module: MainScreenComposed,
  name: 'Recipe Puppy',
  options: {
    header: () => <NavigationTitle title="mainRecipes.header" />,
    headerStyle: {
      height: 60,
    },
  },
};
