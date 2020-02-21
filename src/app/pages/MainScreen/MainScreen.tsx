import React, { PureComponent } from 'react';
import { v1 } from 'uuid';
import SearchBarComponent from '@core/pages/MainScreen/components/SearchBarComponent/SearchBar.component';
import {
  PlaceholderView,
  PlaceholderText,
} from './components/PlaceholderComponent/Placeholder.styles';
import { StateProps, DispatchProps, OwnProps } from './index';
import { Recipe, MainWrapper, RecipesFlatList } from './components';

type MainScreenProps = OwnProps & StateProps & DispatchProps;

class MainScreen extends PureComponent<MainScreenProps> {
  private onChange = (args: string) => {
    if (args.length === 0) {
      return;
    }
    this.props.fetchRecipes(args);
  };

  public render() {
    const { intl, recipes } = this.props;
    return (
      <MainWrapper>
        <SearchBarComponent onChange={this.onChange} />

        {!recipes.length ? (
          <PlaceholderView>
            <PlaceholderText>
              {intl.formatMessage({ id: 'mainRecipes.placeholder' })}
            </PlaceholderText>
          </PlaceholderView>
        ) : (
          <RecipesFlatList
            data={recipes}
            renderItem={({ item }) => <Recipe recipe={item} />}
            initialNumToRender={5}
            keyExtractor={() => v1()}
            centerContent
          />
        )}
      </MainWrapper>
    );
  }
}

export default MainScreen;
