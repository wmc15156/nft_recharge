import img_car from '../../../assets/images/img_car.png';
import React from 'react';

const HomeSectionFive = () => {
  return (
    <>
      <section className="feature04" id="roadmap">
        <h2 className="tit text-c">Roadmap</h2>

        <div className="road-step step01">
          <ul>
            <li className="ico01">
              <div>
                EDITION ONE<i className="br">Showcase Minting</i>Neon Cars
              </div>
            </li>
            <li className="ico02">
              <div>
                EDITION TWO<i className="br">Supercharged</i>Minting
              </div>
            </li>
            <li className="ico03">
              <div>
                EDITION THREE<i className="br">to be released soon</i>
              </div>
            </li>
            <li className="ico04">
              <div>
                AIRDROP<i className="br">to unique holders</i>
              </div>
            </li>
            <li className="ico05">
              <div>
                More Editions<i className="br">to come</i>
              </div>
            </li>
          </ul>
          <div className="car-box">
            <span className="car">
              <img src={img_car} alt="" />
            </span>
          </div>
        </div>
        <ul className="subscript">
          <li>*Each quality unique has exclusive benefits and features</li>
          <li>*Less than 1% of chance to win the unique in each edition</li>
          <li>*Information regarding each edition will be announced prior to the minting.</li>
          <li>
            *Some editions might be published on Ethereum network. Please ensure to check the
            network of each minting edition
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomeSectionFive;
