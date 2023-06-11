import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../../scss/components/utils/SeeMore.scss';

function SeeMore({pathText}) {
  return (
    <div className="see-more">
    <a href="#" className="btn">SeeMore <FontAwesomeIcon icon={faArrowRight}/></a>
    </div>
  )
}

export default SeeMore