import React from 'react';
import AboutTheClass from './AboutTheClass';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('AboutTheClass component', () => {
  const component = renderer.create(
		<AboutTheClass />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
