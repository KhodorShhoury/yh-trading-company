import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../scss/components/utils/NoProducts.scss';
import boxImg from '../../assets/imgs/empty-box.png';
function NoProducts({title}) {
  return (
    <div className='no-products'>
    <img src= {boxImg}/>
        <h3>No {title} Found</h3>
    </div>
  )
}

export default NoProducts