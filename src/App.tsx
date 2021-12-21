import React, { useEffect, useRef } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';

import { PublicRouter } from './common/router';
import { TimeZoneAtom } from './store/atoms';

import './App.css';
function App() {
  useEffect(() => {}, []);

  return (
    <RecoilRoot>
      <PublicRouter />
    </RecoilRoot>
  );
}

export default App;
