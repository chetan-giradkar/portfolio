import React from 'react';
import { Element } from 'react-scroll';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import ExampleReduxComponent from './components/ExampleReduxComponent';
import './styles/App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <main>
          <Element name="hero">
            <HeroSection />
          </Element>
          <Element name="about">
            <AboutSection />
          </Element>
          <Element name="portfolio">
            <PortfolioSection />
          </Element>
          <Element name="contact">
            <ContactSection />
          </Element>
        </main>
        <ExampleReduxComponent />
      </div>
    </Provider>
  );
};

export default App;
