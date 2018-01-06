import React from 'react';
import ContactUsForm from './ContactUsForm';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { BrowserRouter, Link } from 'react-router-dom'
import { configure, mount, find } from 'enzyme';
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
    const input = output.find('email');   

    const mockEvent = {target: {classList: new Object()}}
    mockEvent.target.classList.add = jest.fn();
    
    output.instance().handleInputChange(mockEvent);

    expect(output.state().email).toEqual('');
    expect(output.state().email).toEqual('John');
  });
});
