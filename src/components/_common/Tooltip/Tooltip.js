import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // 
function Tooltip({children, content}) {
  return (
    <Tippy content={content}  placement='bottom'>
    {children}
  </Tippy>
  )
}

export default Tooltip