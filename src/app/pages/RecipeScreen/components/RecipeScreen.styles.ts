import { styled } from '@styles/themes/defaultTheme';
import { Text } from '@styles/components';

export const RecipeWrapper = styled.ScrollView`
  width: 100%;
  padding: 0 ${props => props.theme.padding.large};
  background-color: ${props => props.theme.colors.primary};
`;

export const RecipeHeader = styled(Text)`
  font-size: ${props => props.theme.font.size.xlarge};
  color: ${props => props.theme.colors.secondary};
  margin: ${props => props.theme.margin.small} 0
    ${props => props.theme.margin.medium} 0;
`;

export const RecipeContentWrapper = styled.View``;

export const RecipeMetaDataWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${props => props.theme.margin.medium} 0
    ${props => props.theme.margin.small} 0;
`;

export const RecipeImage = styled.Image`
  width: 100%;
  height: 200;
`;

export const RecipeMetaTitle = styled(Text)`
  font-size: ${props => props.theme.font.size.small};
  color: ${props => props.theme.colors.grey};
`;

export const RecipeDescription = styled(Text)`
  font-size: ${props => props.theme.font.size.medium};
  margin: ${props => props.theme.margin.small} 0
    ${props => props.theme.margin.large} 0;
`;

export const RecipeContent = styled(Text)`
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.colors.dark};
`;
