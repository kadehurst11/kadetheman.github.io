import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Home from './home';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Navbar from './NavBar'
import Footer from './footer'
import Banner from './banner'
import Nuggets from './nuggets'
import Kevin from './kevin'
configure({adapter: new Adapter() })

it('renders without crashing', () =>{
  shallow(<Home/>);
});



 it('navbar click', () => {
   const wrapper = shallow(<Navbar/>)
   const nav = wrapper.find('button.navbar-toggler').first()
   nav.simulate("click");
   expect(wrapper.find('h2').first().contains('About Me'));

 });
 it('footer', () => {
  const wrapper = shallow(<Footer/>)
  const foot = wrapper.find('p.text-center')
  expect(foot.length).toBe(1);
  
 });
 it('header', () => {
  const wrapper = shallow(<Banner/>)
  const h = wrapper.find('h1#name').first()
  expect(h.contains("Kade Hurst"));
 });
 it('nuggets', () => {
  const wrapper = shallow(<Nuggets/>)
  const n = wrapper.find('h2#nug')
  expect(n.contains("Nuggets Regular Season Results Since 2001"));
 });
 it('Kevin', () => {
  const wrapper = shallow(<Kevin/>)
  const n = wrapper.find('th#yr')
  expect(n.contains("Year"));
 });