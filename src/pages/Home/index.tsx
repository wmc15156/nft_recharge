import HomeHeader from '../../Components/templetes/Home/Header';
import HomeSectionOne from '../../Components/templetes/Home/SectionOne';
import HomeSectionTwo from '../../Components/templetes/Home/SectionTwo';
import HomeSectionThree from '../../Components/templetes/Home/SectionThree';
import HomeSectionFour from '../../Components/templetes/Home/SectionFour';
import HomeSectionFive from '../../Components/templetes/Home/SectionFive';
import HomeSectionSix from '../../Components/templetes/Home/SectionSix';
import HomeFooter from '../../Components/templetes/Home/Footer';
import React from 'react';

const HomePage = () => {
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
};

export default HomePage;
