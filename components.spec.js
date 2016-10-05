import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Home from './src/components/Home';
import Dashboard from './src/components/Dashboard';
import TotalExpenses from './src/components/TotalExpenses';

// describe('App', () => {
//   it('should render stuff', () => {
//     const wrapper = shallow(<Home/>);
//     expect(wrapper.containsAllMatchingElements([
//       <Dashboard/>
//     ])).to.equal(true)
//   })
// })

describe('App', () => {
  it('should not contain an input and a section', () => {
     const wrapper = shallow(<TotalExpenses/>);
     expect(wrapper.containsAllMatchingElements([
       <input/>,
       <section/>
     ])).to.equal(false)
   })
 })
