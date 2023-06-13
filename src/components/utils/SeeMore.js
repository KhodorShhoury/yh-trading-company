import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../../scss/components/utils/SeeMore.scss';
import { NavLink } from 'react-router-dom';

function SeeMore({pathText}) {
  return (
    <div className="see-more">
      

      <NavLink to={`/${pathText}`} className="btn">
        SeeMore <FontAwesomeIcon icon={faArrowRight}/>
      </NavLink>
    </div>
  )
}

export default SeeMore