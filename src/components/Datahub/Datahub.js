import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CustomSlider from '../_common/Slider/CustomSlider'
import './datahub.css'

export default function Datahub() {
  const data = [
    {
      title1 : 'All-in-one Crypto Tracker',
      description1: 'All your assets and transactions accessible at a glance spread across wallets, blockchains and marketplaces.',
      title2: 'Live Cryptofolio and Transaction History:',
      description2:'Real Time visibility of all your assets in one dashboard. Search, view and filter all your past transactions.',
      title3: 'Alerts: ',
      description3:'Get Alerts when new interesting assets are available, when an asset is in a buy or sell zone or a market trend is shifting.'
    },
    {
      title1 : 'On-chain and Off-chain Market Analysis',
      description1: 'Aggregated on-chain and off-chain data to provide you with a tailor-made dashboard of intelligence to make educated investments based on your existing portfolio and your specific settings.',
      title2: 'Crypto Market Screener:',
      description2:'Collectively filter thousands of coins by technical indicators or categories and add alerts on different time frames to find the next gems.',
      title3: 'Crypto Market Indicators:',
      description3:'Fear and Greed Index, BTC Dominance, ETH/BTC Chart, Total 1, Total 3, Whales Wallets watch, BTC miners chart, Crypto availability on exchanges and much more …'
    },
    {
      title1 : 'Your NFTs Dashboard',
      description1: 'View and analyse NFTs across multiple chains.',
      title2: 'My Gallery:',
      description2:'A centralized NFT gallery for all your NFT acquisitions bought across different chains and platforms.',
      title3: 'NFT Market Screener:',
      description3:'Collectively filter thousands of NFTs by technical indicators and find the next gems.'
    },
    {
      title1 : 'Real-Life Assets & Documents \'NFTisation',
      description1: 'Centralizing all your real-life assets, documents, IDs and contracts to manage and share them to individuals, institutions or governments at your discretion.',
      title2: '',
      description2:'Kynno’s revolutionary technology is disrupting traditional centralized identity data approaches by enabling you to manage your own identity data and privacy through your Kynno Data Hub that leverages our blockchain and ZPKs.',
    },
    {
      title1 : 'Live News Feed',
      description1: 'A quick look at all the latest and most important crypto news rated by their potential positive and negative impact on the markets.',
      title2: '',
      description2:'Be informed in real-time of all the important news in the blockchain technology sector through articles, videos and podcasts.',
    },
  ]
  return (
    <div className='datahubC' id='whitepaper'>
      <div className='inner'>
        <div>
          <h1>Kynno Data Hub</h1>
        </div>
        <div className='right'>
          <div className="rightInner">
            <div className='text-area'>
              <p>
                Kynno is a revolutionary decentralized permissionless enterprise
                grade blockchain platform, built to support and operate secure,
                compliant, and cutting-edge digital infrastructures.
              </p>
            </div>
            <div>
              <CustomSlider data={data}  desktop={1} tab={1} mobile={1}/>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <h3>A myriad of assets and information</h3>
          <div>
            <p>
              Accurately tracking cryptocurrency and NFT assets investment performance and taxes is hard. Indeed, we are 
              all handling tens if not hundreds of tokens and NFTs on several platforms and ecosystems and having to use 
              spreadsheets or even paper to keep track of everything.
            </p>
          </div>
          <div>
            <p>
              And it gets even worse when you want to declare your taxes! In such a volatile market, being able to make the 
              right decision fast is the key to a successful investment strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
