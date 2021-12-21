import left01_img from '../../../assets/images/bg_gradi_left01.png';
import left02_img from '../../../assets/images/bg_gradi_left02.png';
import left03_img from '../../../assets/images/bg_gradi_left03.png';
import right01_img from '../../../assets/images/bg_gradi_right01.png';
import right02_img from '../../../assets/images/bg_gradi_right02.png';

import right03_img from '../../../assets/images/bg_gradi_right03.png';

import kv_logo from '../../../assets/images/kv_logo.png';
import CountDown from '../../atoms/CountDown';
import artwork_img from '../../../assets/images/img_artwork.png';
import React from 'react';

const HomeSectionOne = () => {
  return (
    <>
      <article>
        <div className="gradi-box">
          <div className="left01 left">
            <img src={left01_img} alt="" />
          </div>
          <div className="left02 left">
            <img src={left02_img} alt="" />
          </div>
          <div className="left03 left">
            <img src={left03_img} alt="" />
          </div>
          <div className="right01 right">
            <img src={right01_img} alt="" />
          </div>
          <div className="right02 right">
            <img src={right02_img} alt="" />
          </div>
          <div className="right03 right">
            <img src={right03_img} alt="" />
          </div>
        </div>
        <section className="kv">
          <div className="text">
            <strong>
              <img src={kv_logo} alt="The NFT Recharge" />
            </strong>
            <span>Auctions Time</span>
            <CountDown />
          </div>
          <figure>
            <img src={artwork_img} alt="" />
          </figure>
        </section>
      </article>
    </>
  );
};

export default HomeSectionOne;
