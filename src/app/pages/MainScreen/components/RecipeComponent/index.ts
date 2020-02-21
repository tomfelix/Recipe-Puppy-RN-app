import React from 'react';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { withNavigation } from 'react-navigation';

import RecipeComponent from './Recipe.component';

export const Recipe = compose(
  withNavigation(injectIntl(RecipeComponent)),
) as React.ReactType;
