import React from 'react'
import '../../scss/components/utils/MainHeading.scss';
function MainHeading({title}) {
  return (
    <h2 className="main-heading">
    Our <span>{title}</span>
    </h2>
  )
}

export default MainHeading