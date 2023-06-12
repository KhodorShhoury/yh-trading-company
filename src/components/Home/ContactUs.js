import React from 'react'
import '../../scss/components/Home/ContactUs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
function ContactUs() {
  return (
    <div className="contact-us">
        <div className="container">
        <div className="location">
        <h3>Location</h3>
        <span></span>
        </div>
        <div className="follow-us">
        <h3>Follow us</h3>
        <ul className="links">
        <li><FontAwesomeIcon icon={faBriefcaseMedical}/></li>
        <li></li>
        </ul>
        </div>
        <div className="contact-form">

        </div>
        </div>
    </div>
  )
}

export default ContactUs