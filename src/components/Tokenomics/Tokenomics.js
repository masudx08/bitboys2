import React from 'react'
import './tokenomics.css'
import TokeImg from '../../images/tokenomics-img.png'
import Toke2Img from '../../images/tokenomics-2.png'
import TokenomicsRow from './TokenomicsRow'
export default function Tokenomics() {
  return (
    <div className='tokenomicsC' id='tokenomics'>
      
      <div className="inner">
        <div className='topContainer setbg'>
        <div style={{width:'90%', margin: 'auto'}}>
          <h1>$KYN Tokenomics</h1>
        </div>
          <img src={TokeImg} alt="" />
        </div>
        <div className='tokeRow'>
          <TokenomicsRow percent={8} title="Private Sale" subtitle="5% Distributed at TGE, 3 monht cliff, 12 months linear vesting 7.92% monthly" tokens={"80 000 000"} color="#C48686" />
          <TokenomicsRow percent={18} title="Public Sale" subtitle="10% Distributed at TGE, 12 months linear vesting 7.50% monthly" tokens={"18 000 0000"} color="#6EE3C0" />
          <TokenomicsRow percent={1} title="LaunchPad" subtitle="25% Distributed at TGE, 25% in each of the following two months" tokens={"10 000 000"} color="#AEE7FF" />
          <TokenomicsRow percent={15} title="Liquidity" subtitle="15% released at TGE, 85% vested over 36 months 2,5% monthly" tokens={"150 000 000"} color="#6998FF" />
          <TokenomicsRow percent={30} title="Stacking Rewards" subtitle="60 months linear vesting 0% TGE 1.67% monthly" tokens={"300 000 000"} color="#183C9B" />
          <TokenomicsRow percent={2} title="Refferal Reserve" subtitle="6 months cliff, 18 months linear vesting 0% TGE 5.56% monthly" tokens={"20 000 000"} color="#882DCF" />
          <TokenomicsRow percent={12} title="Team" subtitle="6 months cliff, 18 months linear vesting 0% TGE 5.56% monthly" tokens={"120 000 000"} color="#D26FEB" />
          <TokenomicsRow percent={1} title="AirDrop" subtitle="10% Distributed at TGE, 12 months livear vesting 7.50% monthly" tokens={"10 000 000"} color="#EE4492" />
          <TokenomicsRow percent={3} title="Development" subtitle="18 months linear vesting 0% TGE 5.56% monthly" tokens={"30 000 000"} color="#DF1DFF" />
          <TokenomicsRow percent={5} title="Partners" subtitle="18 months linear vesting 0% TGE 5.56% monthly" tokens={"50 000 000"} color="#F7941D" />
          <TokenomicsRow percent={5} title="Foundation" subtitle="60 months linear vesting 0% TGE 1.67% monthly" tokens={"50 000 000"} color="#F9ED32" />
        </div>
    </div>
    </div>
  )
}
