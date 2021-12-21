import React, { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

const QnaLists = [
  {
    order: '01',
    question: 'What is the minting price?',
    answer:
      ' The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '02',
    question: 'How many Neon Cars will be minted?',
    answer:
      ' The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '03',
    question: 'How can I mint Neon Cars?',
    answer:
      'The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '04',
    question: 'Is there a limit?',
    answer:
      'The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '05',
    question: 'Will there be a secondary market?',
    answer:
      'The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '06',
    question: 'Wll there be royalites?',
    answer:
      'The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '07',
    question: 'Is there a rarity system?',
    answer:
      'The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '08',
    question: 'Which network TheRechargeNFT works?',
    answer:
      'The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },

  {
    order: '09',
    question: 'Why Solana? / Why Ethereum?',
    answer:
      'The 1st edition “The Recharge Neon Car” costs 0.2 sol however each edition’s minting price differs, and it depends on the benefits and utilities added on the NFT',
  },
];

const HomeSectionSix = () => {
  const [select, setSelect] = useState('');
  return (
    <>
      <section className="feature05" id="marketplace">
        <strong>All in one NFT marketplace on Creativity N Innovation.</strong>
        <a href="#" className="btn-full">
          Coming Soon
        </a>
      </section>

      <section className="feature06" id="faq">
        <h2 className="tit">FAQ</h2>
        <ul className="qna-list">
          {QnaLists.map((item, i) => (
            <li
              key={item.order}
              className={select === item.order ? 'on' : ''}
              style={{ transition: 'height 2s' }}
              onClick={(e) => {
                const liText = e.currentTarget.textContent as string;
                setSelect(liText.slice(0, 2));
                if (select && select === item.order) {
                  setSelect('');
                }
              }}
            >
              <div className="question">
                <a>
                  <em>{item.order}</em>
                  {item.question}
                </a>
              </div>
              <SlideDown className={'my-dropdown-slidedown'}>
                <div className="answer">
                  <p>{item.answer}</p>
                </div>
              </SlideDown>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default HomeSectionSix;
