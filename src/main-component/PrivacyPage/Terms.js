import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import Header4 from '../../components/header4/Header4';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/Cyber-Security-Components/Footer/Footer';
import { Fade } from "react-awesome-reveal";
import Bg from '../../images/gallery/consultbanner.jpg'
const PrivacyPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header4 />
                 <section className="page-title contact-banner privacy pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <Fade direction='up' triggerOnce={'false'} duration={800} delay={6}>
                                                                        <div>
                                                                            <h1 className="xb-item--title wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms"> Terms Of Use </h1>
                                                                        </div>
                                                                    </Fade>
                                </div>
                                <div className="col-lg-3 mt-30">
                                    <div className="sd-right-img pos-rel">
                              
                                        <div className="sd-arrow-shape style-3">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="terms&conditions-section cp-det-bg">
                    <div className="container">
                        <div className="terms-section_inner pt-120 pb-75">
                            <div className="row">
                                <div className="col-lg-11">
                                    <div className="item-details-widget">
                                        <p> Welcome to Augmentity Limited and Augmentity ME FZCO (referred together as “AUGMENTITY,” “Company,” “we,” “our,” “us”). These Terms of Use (“Terms”) govern your access to and use of our website, services, and content (the “Site”). By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree, you must not use the Site.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Eligibility</h1>
                                        <p>By using this Site, you confirm that you are at least 18 years old and legally capable of entering into binding agreements.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Use of the Site</h1>
                                        <p>You may use the Site only for lawful purposes and in accordance with these Terms</p>
                                        <p>You agree not to:</p>
                                        
                                        <p>Misuse the Site in any way that could damage, disable, or impair it.</p>
                                        <p>Attempt to gain unauthorized access to any portion of the Site or related systems.</p>
                                        <p>Use the Site to transmit harmful or malicious code.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Intellectual Property Rights</h1>
                                        <p>All content on this Site, including text, graphics, logos, images, and software, is owned by AUGMENTITY or licensed to us and protected under intellectual property laws.</p>
                                        <p>You may not reproduce, distribute, modify, or republish any content without prior written permission.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Disclaimer of Warranties</h1>
                                        <p>The Site and its content are provided “as is” and “as available” without warranties of any kind, express or implied.</p>
                                        <p>We do not guarantee that the Site will be secure, error-free, or uninterrupted.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Limitation of Liability</h1>
                                        <p>To the fullest extent permitted by law, AUGMENTITY shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Site.</p>
                                        <p>Our total liability for any claim related to the Site shall not exceed the amount you paid (if any) to access or use the Site.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Third-Party Links</h1>
                                        <p>This Site may contain links to third-party websites. We are not responsible for the content, policies, or practices of third parties.</p>
                                        {/* <ul className="privacy-details">
                                            <li>Users can request information about the personal data Innomax holds.</li>
                                            <li>Correct any inaccurate or incomplete data.</li>
                                            <li>Request the deletion of their data when it's no longer needed.</li>
                                            <li>Request their data in a transferable format.</li>
                                            <li>Limit the processing of their data in certain situations.</li>
                                            <li>Object to the processing of their data for direct marketing or legitimate interests.</li>
                                            <li>Withdraw consent for data processing at any time.</li>
                                            <li>File a complaint with a supervisory authority if they feel their rights are violated.</li>
                                        </ul> */}
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Privacy</h1>
                                        <p>Your use of the Site is also governed by our Privacy Policy [link to privacy policy].</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Changes to the Terms</h1>
                                        <p>We may update these Terms at any time by posting the revised version on the Site. Continued use after changes means you accept the updated Terms.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Governing Law</h1>
                                        <p>These Terms shall be governed by and construed under the laws of England and Wales, without regard to conflict of law principles.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Contact Us</h1>
                                        <p>If you have questions about these Terms, please contact us at</p>
                                     <div className="item-details-widget">
                                        <h2 className="item_details_info_title">AUGMENTiTY</h2>
                                        <p>137 Repton road, London BR6 9HT</p>
                                        <p>discover@augmentity.net</p>
                                    </div>
                                    </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PrivacyPage;
