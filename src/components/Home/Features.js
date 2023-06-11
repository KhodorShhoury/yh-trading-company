import { faDollar, faKitchenSet, faTruckPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../scss/components/Home/Features.scss';
function Features() {
  return (
    <section className='features'>
        <div className="container">
            <div className="boxes">
                <div className="box">
                    <div className="icon">
                        <FontAwesomeIcon icon={faKitchenSet}/>
                    </div>
                    <div className="text">
                        <div className="title">High Quality Product</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique odio deleniti eos repellat laboriosam illo perfe</div>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTruckPlane}/>
                    </div>
                    <div className="text">
                        <div className="title">shipping From Iran</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique odio deleniti eos repellat laboriosam illo perfe</div>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <FontAwesomeIcon icon={faDollar}/>
                    </div>
                    <div className="text">
                        <div className="title">Affordable Price</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos similique odio deleniti eos repellat laboriosam illo perfe</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features