import React from 'react';
import ContactUsForm from './ContactUsForm';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link} from 'react-router-dom'
import { shallow, configure, mount, find, ref } from 'enzyme';
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

    const output = mount(<ContactUsForm />);
    var input = output.find('email');   
    input.name = "email"

    //when showInputError(ref) is called, simulate return false
    //use a stub

    const mockEvent = {target: {classList: new Object()},
                       name: {validity:false}}
    mockEvent.target.classList.add = jest.fn();
   
    output.instance().handleInputChange(mockEvent);

    expect(output.state().email).toEqual('');
    expect(output.state().email).toEqual('John');
  });
});
