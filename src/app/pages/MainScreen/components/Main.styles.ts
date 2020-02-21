import { styled } from '@styles/themes';
import { FlatList } from 'react-native';

export const MainWrapper = styled.View``;

export const RecipeWrapper = styled.View`
  background-color: ${props => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const RecipesFlatList = styled(FlatList)`
  background-color: ${props => props.theme.colors.primary};
`;
