import { makeDecorator } from '@storybook/addons';
import React from 'react';

import GlobalStyles from '../src/styles/global'

makeDecorator({
  name: 'withGlobalStyles',
  parameterName: 'withGlobalStyles',
  wrapper: (storyFn, context) => {
    return (
      <>
        <GlobalStyles />
        {storyFn(context)}
      </>
    );
  }
});

export default makeDecorator;
