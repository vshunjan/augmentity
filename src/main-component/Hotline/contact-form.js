import React from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../../components/ContactFrom/ContactForm'


const ContactSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className="contact pt-85">
                <div className="container">
                    <div className="row hotline-row d-flex pb-130 mt-none-30">
                     
                        <div className="col-lg-8 mt-30 hotline">
                            <div className="cs-contact-wrap cs-contact-form cd-contact-form item-contact_form">
                                <h2 className="xb-title">Send us a message</h2>
                                <p className="xb-content">Give us a chance to serve and bring magic to your brand.</p>
                                <ContactForm />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default ContactSection;