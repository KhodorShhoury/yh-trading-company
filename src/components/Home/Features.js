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
                            <FontAwesomeIcon icon={faKitchenSet} />
                        </div>
                        <div className="text">
                            <div className="title">High Quality Product</div>
                            <div className="description">YH Trading to handle your all needs with utmost professionalism, transparency, and attention to detail. Our dedicated team ensures timely deliveries, unparalleled customer support, and advanced tracking capabilities. </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faTruckPlane} />
                        </div>
                        <div className="text">
                            <div className="title">shipping From Iran</div>
                            <div className="description">Introducing YH Trading, your trusted partner for seamless international shipping from Iran. With our extensive network and expertise, we offer efficient and reliable logistics solutions for your cargo.</div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faDollar} />
                        </div>
                        <div className="text">
                            <div className="title">Affordable Price</div>
                            <div className="description">Discover unbeatable value with our affordable pricing. We believe that high-quality products shouldn't come with a hefty price tag.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features