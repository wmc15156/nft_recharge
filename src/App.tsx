import React, { useRef } from 'react';
import './App.css';

import HomeSectionOne from './Components/templetes/Home/SectionOne';
import HomeHeader from './Components/templetes/Home/Header';
import logo_footer from '../src/assets/images/logo_footer.png';
import logo_footer_sns01 from '../src/assets/images/ico_footer-sns01.png';
import logo_footer_sns02 from '../src/assets/images/ico_footer-sns02.png';
import logo_footer_sns03 from '../src/assets/images/ico_footer-sns03.png';
import logo_footer_sns04 from '../src/assets/images/ico_footer-sns04.png';

import HomeSectionTwo from './Components/templetes/Home/SectionTwo';
import HomeSectionThree from './Components/templetes/Home/SectionThree';
import HomeSectionFour from './Components/templetes/Home/SectionFour';
import HomeSectionFive from './Components/templetes/Home/SectionFive';
import HomeSectionSix from './Components/templetes/Home/SectionSix';
import HomeFooter from './Components/templetes/Home/Footer';

function App() {
  const mobileRef = useRef();
  return (
    <main>
      <div id="contents">
        <HomeHeader />
        <HomeSectionOne />
        <HomeSectionTwo />
        <HomeSectionThree />
        <HomeSectionFour />
        <HomeSectionFive />
        <HomeSectionSix />
        <HomeFooter />
      </div>
    </main>
  );
}

export default App;
