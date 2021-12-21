import close_btn_img from '../../../assets/images/btn_menu-close.png';
import ico_footer_sns01_img from '../../../assets/images/ico_footer-sns01.png';
import ico_footer_sns02_img from '../../../assets/images/ico_footer-sns02.png';
import ico_footer_sns03_img from '../../../assets/images/ico_footer-sns03.png';
import ico_footer_sns04_img from '../../../assets/images/ico_footer-sns04.png';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
const MobileNavContainer = styled.div<{ click: boolean }>`
  .mobile-nav {
    left: ${(props) => (props.click ? '0px' : '-100%')};
    transition: all 0.25s;
  }
`;

const headerContent = [
  { title: 'Home', to: '' },
  { title: 'About', to: 'about' },
  { title: 'Editions', to: 'editions' },
  { title: 'Attributes', to: 'attributes' },
  { title: 'Roadmap', to: 'roadmap' },
  { title: 'Marketplace', to: 'marketplace' },
  { title: 'FAQ', to: 'faq' },
];

const HomeHeader = () => {
  const [isClick, setIsClick] = useState(false);
  return (
    <>
      <header>
        <section className="header-inner">
          <h1>
            <a href="#">Recharge logo</a>
          </h1>
          <nav>
            <ul className="gnb">
              {headerContent.map((item, i) => (
                <li key={i} style={{ cursor: 'pointer' }}>
                  <ScrollLink to={item.to} spy={true} smooth={true}>
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#" target="_blank" className="btn-wallet">
            Connect Wallet
          </a>
        </section>
      </header>
      <button
        className="btn-menu"
        onClick={() => {
          const content = document.querySelector('#contents')!;
          const html = document.querySelector('html')!;
          content.setAttribute('class', 'dim');
          html.setAttribute('class', 'nav-open');
          setIsClick(!isClick);
        }}
      >
        button
      </button>
      <MobileNavContainer click={isClick}>
        <div className="mobile-nav">
          <a
            href="#"
            className="close"
            onClick={() => {
              const content = document.querySelector('#contents')!;
              const html = document.querySelector('html')!;
              content.classList.remove('dim');
              html.classList.remove('nav-open');
              setIsClick(!isClick);
            }}
          >
            <img src={close_btn_img} alt="" />
          </a>
          <div className="gnb-list">
            <ul className="gnb">
              {headerContent.map((item, i) => (
                <li key={i}>
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    onClick={() => {
                      const content = document.querySelector('#contents')!;
                      const html = document.querySelector('html')!;
                      content.classList.remove('dim');
                      html.classList.remove('nav-open');
                      setIsClick(!isClick);
                    }}
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
            <div className="btn-sns">
              <ul>
                <li>
                  <a href="#">
                    <img src={ico_footer_sns01_img} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ico_footer_sns02_img} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ico_footer_sns03_img} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ico_footer_sns04_img} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MobileNavContainer>
    </>
  );
};

export default HomeHeader;
