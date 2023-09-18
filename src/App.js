import React from 'react';
import { Switch } from 'react-router-dom';
import {
  Router,
  Route,
  Routes,
  path,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import './App.css';
import './style.css';
import Banner from "./MyComponent/Banner";
import About from "./MyComponent/About";
import Footer from "./MyComponent/Footer";
import Header from "./MyComponent/Header";
import Offer from "./MyComponent/Offer";
import Courses from "./MyComponent/Courses";
import Presentation from './MyComponent/Presentation';
import Contact from './MyComponent/Contact';
import Testimonials from './MyComponent/Testimonials';
import Gallery from './MyComponent/Gallery';

import "./assets/css/testimonials.css";
import './assets/css/flex-slider.css';
import './assets/css/fontawesome.css';
import './assets/css/lightbox.css';
import './assets/css/owl.css';
import './assets/css/templatemo-grad-school.css';
import '../src/vendor/bootstrap/css/bootstrap.min.css';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" render={() => {
            return (
              <>
                <Banner />
                <About />
                <Offer />
                <Courses />
                <Presentation />
                <Testimonials />
                <Gallery />
                <Contact />
              </>)

          }}>

          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/courses'>
            <Courses />
          </Route>
          <Route exact path='/testimonials'>
            <Testimonials />
          </Route>
          <Route exact path='/gallery'>
            <Gallery />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Routes>
        <Footer />
      </Router >
    </>

  );
}

export default App;
