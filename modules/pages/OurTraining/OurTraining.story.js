import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import OurTraining from './OurTraining'

storiesOf('Pages', module)
  .add('OurTraining', () => (
      <OurTraining />
  ));
