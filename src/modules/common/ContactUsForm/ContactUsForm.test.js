import React from 'react';
import ContactUsForm from './ContactUsForm';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link} from 'react-router-dom'
import { shallow, configure, mount, find, ref, findWhere } from 'enzyme';
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

  //handleInputChange event
  it('handles on input change event', () => {

    const output = mount(<ContactUsForm />);
    var input = output.find('input').first();   
    input.name = "email"

    //when showInputError(ref) is called, simulate return false
    //use a stub
    output.instance().showInputError = jest.fn();
    output.update();

    //manually mock the event we pass in
    var mockEvent = new Object();
    mockEvent.target = new Object();
    mockEvent.target.classList = new Object();
    mockEvent.target.name = {validity:false};
    mockEvent.target.value = "John";

    //mock the target object
    mockEvent.target.classList.add = jest.fn();
   
    output.instance().handleInputChange(mockEvent);

    //our assertions
    expect(output.state().email).toEqual('');
   
    //find email input
    output.find('input').first().simulate('change', { target: { value: 'J' } });
    expect(output.state().email).toEqual('J');
    //console.log(output.debug());
    //console.log(output.find('input').debug());
  });

  //showInputError method
  it('handles showInputError method', () => {

    const output = mount(<ContactUsForm />, { attachTo: document.body });

    //keeping in comments because i forget how to debug
    //console.log(output.debug());

    var input = output.find('input').first();   
    //console.log(input);

    //output.target.classList.add = jest.fn();

    //input.simulate('change', { target: { value: 'Hello' } })

    //use email first
    //output.instance().showInputError('email');
    
  });
});
