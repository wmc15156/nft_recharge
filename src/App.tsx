import React, { useEffect, useRef } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import moment from 'moment';
import momentTimeZone from 'moment-timezone';

import { PublicRouter } from './common/router';
import { TimeZoneAtom } from './store/atoms';

import './App.css';
function App() {
  // const [timeZoneAtom, setTimeZoneAtom] = useRecoilState(TimeZoneAtom);
  const gmt = moment().utc();
  console.log(gmt.unix(), 'unix', gmt.valueOf(), moment().parseZone().utcOffset());
  console.log(
    momentTimeZone().tz('Asia/Seoul').valueOf(),
    'SEOUL',
    momentTimeZone().tz('America/New_').valueOf(),
    moment(new Date()).tz('Asia/Seoul')
  );
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
