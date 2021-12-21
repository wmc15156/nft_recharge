import img_about_img from '../../../assets/images/img_about.jpg';
import img_about01_img from '../../../assets/images/img_about01.png';
import img_about02_img from '../../../assets/images/img_about02.png';
import img_about03_img from '../../../assets/images/img_about03.png';
import React from 'react';

const HomeSectionTwo = () => {
  return (
    <>
      <section className="feature01" id="about">
        <figure>
          <img src={img_about_img} alt="" />
        </figure>
        <h2 className="tit">About</h2>
        <p>
          Unique and verified digital artworks for electric powered vehicles from bikes to cars.
          <br /> The Recharge NFT is launched on Solana network, a decentralized blockchain built to
          provide best NFT experiences for users.
          <br /> All funds raised from The Recharge NFT will be used to help boost The Recharge
          Ecosystem.
          <br /> The Recharge Labs and Creative N Innovation partnered to provide Unique
          Collectables
        </p>
        <ul>
          <li>
            <img src={img_about01_img} alt="" />
          </li>
          <li>
            <img src={img_about02_img} alt="" />
          </li>
          <li>
            <img src={img_about03_img} alt="" />
          </li>
        </ul>
      </section>
    </>
  );
};

export default HomeSectionTwo;
