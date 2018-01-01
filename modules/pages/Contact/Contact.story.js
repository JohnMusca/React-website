import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom'
import Contact from './Contact'

storiesOf('Contact', module)
  .add('Default Contact', () => (
  		<Contact />
	));
