import logo_footer from '../../../assets/images/logo_footer.png';
import logo_footer_sns01 from '../../../assets/images/ico_footer-sns01.png';
import logo_footer_sns02 from '../../../assets/images/ico_footer-sns02.png';
import logo_footer_sns03 from '../../../assets/images/ico_footer-sns03.png';
import logo_footer_sns04 from '../../../assets/images/ico_footer-sns04.png';
import React from 'react';

const HomeFooter = () => {
  return (
    <>
      <footer>
        <div className="inner-box">
          <a href="#" className="logo">
            <img src={logo_footer} alt="" />
          </a>
          <ul className="footer-sns">
            <li>
              <a href="#">
                <img src={logo_footer_sns01} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logo_footer_sns02} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logo_footer_sns03} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={logo_footer_sns04} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
