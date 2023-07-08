import React from 'react'
import '../../scss/components/Home/ContactUs.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MainHeading from '../utils/MainHeading';
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
function ContactUs() {
  return (
    <div className="contact-us">
      <MainHeading title='Get in touch' id='contact' />
      <div className="container">
        <div className="socials">
          <div className="box">
            <a href="https://wa.me/9613083785">
              <div className="icon"><FontAwesomeIcon icon={faWhatsapp} /></div>
              <h2 className='title'>+961 3 083 785</h2>
            </a>

          </div>
          <div className="box">
            <a href="https://www.facebook.com/YH-Trading-109589635492109/">
              <div className="icon"><FontAwesomeIcon icon={faFacebook} /></div>
              <h2 className='title'>YH Trading</h2>
            </a>

          </div>
          <div className="box">
            <a href="https://instagram.com/yh_trading?igshid=MzRlODBiNWFlZA==">
              <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
              <h2 className='title'>yh_trading</h2>
            </a>

          </div>
          <div className="box">
            <a href="https://www.tiktok.com/@yh_trading?_t=8dBZElVLG9i&_r=1">
              <div className="icon"><FontAwesomeIcon icon={faTiktok} /></div>
              <h2 className='title'>yh_trading</h2>
            </a>
          </div>
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2774.8566247324534!2d35.47453232705737!3d33.37626758537428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzM0LjYiTiAzNcKwMjgnMzkuMCJF!5e0!3m2!1sen!2slb!4v1686924286589!5m2!1sen!2slb"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs