import React from 'react'
import '../../scss/components/utils/MainHeading.scss';
function MainHeading({title,id}) {
  const titleWords = title.split(" ");
  return (
    <h2 className="main-heading" id = {id}>
    {titleWords.map((word,i)=> <span key={i}> {word} </span> )}
    </h2>
  )
}

export default MainHeading