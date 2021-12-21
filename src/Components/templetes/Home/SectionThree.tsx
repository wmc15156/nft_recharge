import img_editions01 from '../../../assets/images/img_editions01.png';
import img_editions02 from '../../../assets/images/img_editions02.png';
import img_editions03 from '../../../assets/images/img_editions03.png';
import React from 'react';

const HomeSectionThree = () => {
  return (
    <>
      <section className="feature02" id="editions">
        <div className="inner-box">
          <h2 className="tit">Editions</h2>
          <ul>
            <li>
              <figure>
                <img src={img_editions01} alt="" />
              </figure>
              <div className="text">
                <strong>Recharge Neon Cars</strong>
                <p>
                  The 1st edition of The Recharge NFT that activates The Recharge NFT ecosystem. The
                  Recharge Neon Car holders can receive multi-additional benefits from The Recharge
                  ecosystem including free NFT airdrops, RCG airdrops, and royalty sharing.
                </p>
                <a href="#" className="btn-line">
                  <span>Learn More</span>
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img src={img_editions02} alt="" />
              </figure>
              <div className="text">
                <strong>Recharge Supercharged Bike</strong>
                <p>
                  The 2nd edition of The Recharge NFT that boosts The Recharge NFT holder’s
                  benefits. Recharge Supercharged Bike are designed and prepared by one of the top
                  artists. Only whitelisted wallets can mint Recharge Supercharged Bike.
                </p>
                <a href="#" className="btn-line">
                  <span>Coming Soon</span>
                </a>
              </div>
            </li>
            <li>
              <figure>
                <img src={img_editions03} alt="" />
              </figure>
              <div className="text">
                <strong>Coming Soon</strong>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HomeSectionThree;
