import React from 'react'
import CustomSlider from '../_common/Slider/CustomSlider'
import './roadmap.css'
export default function Roadmap() {
  const data = [
    {
      title1 : 'Q1 - 2022',
      description1: 'All your assets and transactions accessible at a glance spread across wallets, blockchains and marketplaces.',
      title2: 'Live Cryptofolio and Transaction History:',
      description2:'Real Time visibility of all your assets in one dashboard. Search, view and filter all your past transactions.',
      title3: 'Alerts: ',
      description3:' Get Alerts when new interesting assets are available, when an asset is in a buy or sell zone or a market trend is shifting.'
    },
    {
      title1 : 'Q2 - 2022',
      description1: 'All your assets and transactions accessible at a glance spread across wallets, blockchains and marketplaces.',
      title2: 'Live Cryptofolio and Transaction History:',
      description2:'Real Time visibility of all your assets in one dashboard. Search, view and filter all your past transactions.',
      title3: 'Alerts: ',
      description3:' Get Alerts when new interesting assets are available, when an asset is in a buy or sell zone or a market trend is shifting.'
    },
    {
      title1 : 'Q3 - 2022',
      description1: 'All your assets and transactions accessible at a glance spread across wallets, blockchains and marketplaces.',
      title2: 'Live Cryptofolio and Transaction History:',
      description2:'Real Time visibility of all your assets in one dashboard. Search, view and filter all your past transactions.',
      title3: 'Alerts: ',
      description3:' Get Alerts when new interesting assets are available, when an asset is in a buy or sell zone or a market trend is shifting.'
    },
    {
      title1 : 'Q4 - 2022',
      description1: 'All your assets and transactions accessible at a glance spread across wallets, blockchains and marketplaces.',
      title2: 'Live Cryptofolio and Transaction History:',
      description2:'Real Time visibility of all your assets in one dashboard. Search, view and filter all your past transactions.',
      title3: 'Alerts: ',
      description3:' Get Alerts when new interesting assets are available, when an asset is in a buy or sell zone or a market trend is shifting.'
    },
  ]
  return (
    <div className='roadmapC'>
     <div className="inner">
      <div className='text-area'>
          <h1>Kynno’s Roadmap</h1>
          <p>A solid strategy for a strong result</p>
        </div>
        <div> 
          <CustomSlider data={data} desktop={3} tab={2} mobile={1}/>
        </div>
     </div>
    </div>
  )
}
