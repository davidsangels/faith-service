import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../components/Carousel';

Enzyme.configure({ adapter: new Adapter() });

describe('Carousel', () => {
  it('should exist', () => {
    const wrapper = shallow(<Carousel key={'some_id'} data={[1,2,3]}/>);
    expect(wrapper).toExist;
  });
});

