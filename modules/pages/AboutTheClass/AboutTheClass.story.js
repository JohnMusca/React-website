import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import AboutTheClass from './AboutTheClass'

storiesOf('Pages', module)
  .add('AboutTheClass', () => (
      <AboutTheClass />
  ));
