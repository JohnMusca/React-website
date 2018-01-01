import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

storiesOf('Header', module)
  .add('with no default text', () => (
		<BrowserRouter>
  		<Header />
		</BrowserRouter>
	));
