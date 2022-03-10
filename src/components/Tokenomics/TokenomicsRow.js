import React from 'react'
import "./tokenomicsRow.css"

function TokenomicsRow({percent, title, subtitle, tokens, color}) {
  return (
    <div className="TokenomicsRow" style={{borderLeft: `.3em solid ${color}`}}>
        <div style={{display: "flex", flexDirection: "column",width:70+"%"}}>
            <p className='tokenomics_title'>
                <span style={{color: color, margin: "0 .5em 0 0"}}>{percent} %</span>
                <span style={{color: "white", fontWeight: 700}}>{title}</span>
            </p>
            <p className='tokenomics_title' style={{opacity: .5, fontWeight: 300}}>{subtitle}</p>
        </div>
        <div className='tokenomics_title tokenomics_right'>
            <p  style={{opacity: .5, fontWeight: 700}}>Tokens</p>
            <p style={{opacity: .5}}>{tokens}</p>
        </div>
    </div>
  )
}

export default TokenomicsRow