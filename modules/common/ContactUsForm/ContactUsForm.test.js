import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('ContactUsForm component', () => {
  const component = renderer.create(
		<ContactUsForm />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});