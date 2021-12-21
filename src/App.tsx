import React, { useEffect, useRef } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import moment from 'moment';
import momentTimeZone from 'moment-timezone';

import { PublicRouter } from './common/router';
import { TimeZoneAtom } from './store/atoms';

import './App.css';
function App() {
  useEffect(() => {}, []);

  return (
    <RecoilRoot>
      <PublicRouter />
    </RecoilRoot>
    // <main>
    //   <div id="contents">
    //     <HomeHeader />
    //     <HomeSectionOne />
    //     <HomeSectionTwo />
    //     <HomeSectionThree />
    //     <HomeSectionFour />
    //     <HomeSectionFive />
    //     <HomeSectionSix />
    //     <HomeFooter />
    //   </div>
    // </main>
  );
}

export default App;
