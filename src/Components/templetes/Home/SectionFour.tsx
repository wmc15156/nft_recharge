import img_attributes from '../../../assets/images/img_attributes.png';
import img_attributes_m from '../../../assets/images/img_attributes-m.png';
import React from 'react';

const HomeSectionFour = () => {
  return (
    <>
      <section className="feature03" id="attributes">
        <div className="inner-box">
          <div className="text">
            <h2 className="tit">Attributes</h2>
            <strong>Recharge Neon Cars</strong>
            <a href="#" className="btn-full">
              More
            </a>
          </div>
          <figure>
            <span className="pc">
              <img src={img_attributes} alt="" />
            </span>
            <span className="mobile">
              <img src={img_attributes_m} alt="" />
            </span>
          </figure>
        </div>
      </section>
    </>
  );
};

export default HomeSectionFour;
