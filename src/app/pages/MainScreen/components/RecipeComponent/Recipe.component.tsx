import React, { PureComponent } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { WrappedComponentProps } from 'react-intl';

import { StyledButton } from '@styles/components';
import Modules from '@core/pages';
import { RecipeData } from '../../namespace';

import { RecipeImage, RecipeTitle, RecipeWrapper } from './Recipe.styles';

interface OwnProps {
  recipe: RecipeData;
}

type RecipeScreenProps = WrappedComponentProps &
  NavigationStackScreenProps &
  OwnProps;

class RecipeComponent extends PureComponent<RecipeScreenProps> {
  private goToOwnPage = () => {
    this.props.navigation.navigate(Modules.RecipeScreenModule.name, {
      recipe: this.props.recipe,
    });
  };

  public render() {
    const { intl, recipe } = this.props;
    return (
      <RecipeWrapper>
        <RecipeImage
          resizeMode="cover"
          source={{
            uri: recipe.thumbnail,
          }}
        />
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <StyledButton
          title={intl.formatMessage({ id: 'mainRecipes.knowMore' })}
          onPress={this.goToOwnPage}
        />
      </RecipeWrapper>
    );
  }
}

export default RecipeComponent;
