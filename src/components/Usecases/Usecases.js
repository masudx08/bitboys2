import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CustomSlider from '../_common/Slider/CustomSlider'
import './usecases.css'

export default function Usecases() {
  const data = [
    {
      title1: 'Faster Transactions',
      description1: 'Due to the secured & decentralized nature of Kynno’s enterprise grade blockchain technology, it’s almost impossible for nefarious parties to tamper with our transactions.',
      title2: '',
      description2: 'The data on our blockchain is highly secure and trustworthy, meaning that it can be processed much faster than in today’s world without compromising security.',
      title3: '',
      description3: 'It is one of the main reasons why we are convinced that our blockchain will attract industry leaders in banking, financial services, Insurance, Health and many more.'
    },
    {
      title1: 'Digital Identity',
      description1: 'Decentralized technologies are mitigating the risks associated with centralized identity stores, which continue to expose identity data in breaches on a regular basis putting users at risk.',
      title2: '',
      description2: 'Kynno’s revolutionary technology is disrupting traditional centralized identity data approaches by enabling you to manage your own identity data and privacy through your Kynno Data Hub that leverages our blockchain and ZPKs. Our cutting-edge technology is applicable to a myriad of digital identity use-cases for layer-2 applications such as:',
      title3: '',
      description3: '● Buying a house in no-time, ● Universal Health Passport, ● Easier Voting, And many more possibilities...'
    },
    {
      title1: 'Real World Assets into NFTs',
      description1: 'Kynno vision of the future is a wallet that not only contains your digital world assets but that also transposes your real-world assets and their properties to be represented in the form of NFT-like objects in your Kynno Data Hub.',
      title2: '',
      description2: 'Those NFTs will be linked to your ID on Kynno’s blockchain to confirm and validate your ownership.',
      title3: 'Alerts: ',
      description3: 'Tomorrow you will be able to buy a new car, a smartphone, a watch, a piece of art or any other asset - and minting an NFT counterpart representing your real-world purchase on your Kynno Data Hub.'
    },
    {
      title1: 'Documents Management',
      description1: 'On top of assets, any kind of real-world documents can be digitized by validating and storing them in your Kynno Data Hub. Contracts (and their terms) among different counterparts both personal and professional can be concluded transparently, documented in a decentralized and fraud-proof manner, and reviewed at any time.',
      title2: '',
      description2: 'Personal documents, such as job references, diplomas or work certificates, can be created by the respective institutions and transferred to Kynno’s wallets.',
      title3: '',
      description3: 'You will be able to demonstrate the authenticity of your document with the click of a button using Kynno Blockchain and ZKPs.'
    },
    {
      title1: 'Choose to monetize your data or not',
      description1: 'Every click, like, submission, subscription, view, impression, and engagement help companies refine their offering either through product development or, more typically, advertising.',
      title2: '',
      description2: 'At the end, the only ones benefiting from this trillion-dollar business are large tech companies and the companies buying that data from them. At Kynno, we want to shift this power to you!',
      title3: '',
      description3: 'Choosing to monetize your personal data is a choice you and only you should make and benefit from. Also, we are offering our users the possibility to profit from the sale, analysis and application by outside organization interested in buying this data.'
    },
  ]
  return (
    <div className='useCasesC' id='usecases'>
      <div className='inner'>
        <div className='top'>
          <div>
            <h1>Kynno’s ‍Use-Cases</h1>
          </div>
          <div className='text-area'>
            <p>
              Web3 is the third generation internet, based on new technologies like Blockchain and metaverse. Its main advantage is decentralization, unlike the current web dominated by GAFAM.
            </p>
            <p>
              The metaverse refers to the future of the Internet: a virtual reality world in which users can interact. This concept is developing at a lightning speed, and the technology giants are investing massively. This is why KYNNO was born.
            </p>
          </div>
        </div>
        <div>
          <CustomSlider data={data} desktop={3} tab={2} mobile={1} />
        </div>
        <div className='bottom'>
          <h3>We’re On A Mission To Democratize Cryptocurrency</h3>
          <div>
            <p>
              With 30+ years of combined experience in the development of cutting-edge, <br />
              solutions of which 10 years in Blockchain Technologies and 10+ years of  <br />
              entrepreneurship and successful business building, we have the skills  <br />
              to launch a blue-chip product that will take-over the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
