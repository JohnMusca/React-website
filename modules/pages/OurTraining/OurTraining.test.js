import React from 'react';
import OurTraining from './OurTraining';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom'

test('OurTraining component', () => {
  const component = renderer.create(
		<OurTraining />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
