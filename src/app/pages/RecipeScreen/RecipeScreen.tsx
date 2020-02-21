import React, { PureComponent } from 'react';
import { Linking } from 'react-native';
import { StyledButton } from '@styles/components';
import { RecipeData } from '@pages/MainScreen/namespace';
import { StateProps, OwnProps } from './index';
import {
  RecipeImage,
  RecipeWrapper,
  RecipeContentWrapper,
  RecipeHeader,
  RecipeDescription,
} from './components/RecipeScreen.styles';

type RecipeScreenProps = OwnProps & StateProps;

class RecipeScreen extends PureComponent<RecipeScreenProps> {
  private handleBack = () => {
    this.props.navigation.goBack();
  };

  private openRecipeInBrowser = () => {
    const { intl, navigation } = this.props;
    const { href } = navigation.state.params?.recipe;
    try {
      Linking.canOpenURL(href).then(supported => {
        if (supported) {
          Linking.openURL(href);
        } else {
          throw Error(
            intl.formatMessage({ id: 'recipePage.urlError' }, { href }),
          );
        }
      });
    } catch {
      throw Error(intl.formatMessage({ id: 'recipePage.urlUndefined' }));
    }
  };

  public render() {
    const { intl, navigation } = this.props;
    const recipeData: RecipeData = navigation.state.params?.recipe;

    return (
      <RecipeWrapper>
        <RecipeHeader>{recipeData.title}</RecipeHeader>
        <RecipeContentWrapper>
          <RecipeDescription>{recipeData.ingredients}</RecipeDescription>
          <RecipeImage
            resizeMode="cover"
            source={{ uri: recipeData.thumbnail }}
          />
          <StyledButton
            title={intl.formatMessage(
              { id: 'recipePage.sourceLink' },
              { source: recipeData.href },
            )}
            onPress={this.openRecipeInBrowser}
          />
          <StyledButton
            title={intl.formatMessage({ id: 'recipePage.back' })}
            onPress={this.handleBack}
          />
        </RecipeContentWrapper>
      </RecipeWrapper>
    );
  }
}

export default RecipeScreen;
