import React from 'react'
import '../../scss/components/utils/MainHeading.scss';
function MainHeading({title}) {
  const titleWords = title.split(" ");
  return (
    <h2 className="main-heading">
    {titleWords.map((word,i)=> <span key={i}> {word} </span> )}
    </h2>
  )
}

export default MainHeading