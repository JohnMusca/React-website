import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

storiesOf('Home', module)
  .add('Default Home', () => (
  		<Home />
	));
