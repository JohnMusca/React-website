import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import OurTraining from './OurTraining'

storiesOf('OurTraining', module)
  .add('Default OurTraining', () => (
  		<OurTraining />
	));
