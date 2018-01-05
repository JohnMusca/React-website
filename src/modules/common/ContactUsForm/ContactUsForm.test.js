import React from 'react';
import ContactUsForm from './ContactUsForm';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom'
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<MyComponent />', () => {

  it('renders a contctUsFormComponent', () => {
    const component = renderer.create(
      <ContactUsForm />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles on input change event', () => {

    const output = shallow(<ContactUsForm />);

    expect(output.state().email).toEqual('');

  });

});
/*
test('ContactUsForm component', () => {
  it('should make sure snapshot is what we expect', () => {
  }),
  it('should handle input change event', () => {
    
  const output = shallow(<ContactUsForm />
  
  //expect(output.state.email).toEqual('');
  //output.simulate();
  //expect(output.state().email).toEqual('test@test.com');
  })
});*/
