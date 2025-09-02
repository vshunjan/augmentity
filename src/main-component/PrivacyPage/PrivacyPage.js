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
                 <section className="page-title contact-banner pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-end">
                                <div className="col-lg-9 mt-30">
                                    <Fade direction='up' triggerOnce={'false'} duration={800} delay={6}>
                                                                        <div>
                                                                            <h1 className="xb-item--title wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms"> Privacy Policy </h1>
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
                                        <p>This Privacy Policy sets out how we, Augmentity Limited and Augmentity ME FZCO (referred together as Augmentity), may obtain, store and use your personal data when you access or interact with our website, or where we otherwise obtain or collect your personal information. The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject shall be in accordance with the country-specific data protection regulations applicable to Augmentity, including the General Data Protection Regulation (GDPR). Please read this Privacy Policy carefully. We recommend that you store a copy of this Privacy Policy and any future versions in force from time to time for your records.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Definitions</h1>
                                        <p>The data protection declaration of Augmentity is based on the terms used by the European legislator for the adoption of the General Data Protection Regulation (GDPR). Our data protection declaration should be legible and understandable for the general public, as well as our customers and business partners. To ensure this, we would like to first explain the terminology used.</p>
                                        <p>In this data protection declaration, we use, inter alia, the following terms:</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Personal data</h2>
                                        <p>Personal data means any information relating to an identified or identifiable natural person (“data subject”). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Data subject</h2>
                                        <p>Data subject is any identified or identifiable natural person, whose personal data is processed by the controller responsible for the processing.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Processing</h2>
                                        <p>Processing is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Restriction of processing</h2>
                                        <p>Restriction of processing is the marking of stored personal data with the aim of limiting their processing in the future.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Profiling</h2>
                                        <p>Profiling means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person’s performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements.</p>
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
                                        <h2 className="item_details_info_title">Pseudonymisation</h2>
                                        <p>Pseudonymisation is the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Controller or controller responsible for the processing</h2>
                                        <p>Controller or controller responsible for the processing is the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Processor</h2>
                                        <p>Processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Recipient</h2>
                                        <p>Recipient is a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not. However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Third party</h2>
                                        <p>Third party is a natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorized to process personal data.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h2 className="item_details_info_title">Consent</h2>
                                        <p>Consent of the data subject is any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.</p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Name and Address of the controller</h1>
                                        <p> Controller for the purposes of the General Data Protection Regulation (GDPR), other data protection laws applicable in Member states of the European Union and other provisions related to data protection is:
                                         <br/> 
                                         <p>The Data Protection Controller Is:</p>
                                         <p>Paul White	
                                          Augmentity Ltd.
                                          39 Park lane, Kemsing TN15 6NX
                                          Sevenoaks, United Kingdom</p>
                                            
                                              <a href="Phoneto:+44 7557304343">Phone: +44 7557304343</a>
                                            <br/>  <a href="mailto:discover@Augmentity.com">Email: discover@Augmentity.com</a>
                                            <br/> <a href=" www.augmentity.net">Website: www.augmentity.net</a>
                                            </p>
                                    </div>
                                    <div className="item-details-widget">
                                        <h1 className="item_details_info_title">Name and Address of the Data Protection Officer</h1>
                                     
                                        <p> Any data subject may, at any time, contact our Data Protection Officer directly with all questions and suggestions concerning data protection.
                                        <p>The Data Protection Officer of the controller is:</p>
                                          <p> Paul White	
                                          Augmentity Ltd.
                                          39 Park lane, Kemsing TN15 6NX
                                          Sevenoaks, United Kingdom</p>
                                            
                                              <a href="Phoneto:+44 7557304343">Phone: +44 7557304343</a>
                                            <br/>  <a href="mailto:discover@Augmentity.com">Email: discover@Augmentity.com</a>
                                            <br/> <a href=" www.augmentity.net">Website: www.augmentity.net</a>
                                           </p> 
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Cookies</h1>
                                        <p>The Internet pages of Augmentity use cookies. Cookies are text files that are stored in a computer system via an Internet browser.</p>
                                        <p>Many Internet sites and servers use cookies. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a character string through which Internet pages and servers can be assigned to the specific Internet browser in which the cookie was stored. This allows visited Internet sites and servers to differentiate the individual browser of the data subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified using the unique cookie ID.</p>
                                        <p>Through the use of cookies, Augmentity can provide the users of this website with more user-friendly services that would not be possible without the cookie setting.</p>
                                        <p>By means of a cookie, the information and offers on our website can be optimized with the user in mind. Cookies allow us, as previously mentioned, to recognize our website users. The purpose of this recognition is to make it easier for users to utilise our website. The website user that uses cookies, e.g. does not have to enter access data each time the website is accessed, because this is taken over by the website, and the cookie is thus stored on the user’s computer system. Another example is the cookie of a shopping cart in an online shop. The online store remembers the articles that a customer has placed in the virtual shopping cart via a cookie.</p>
                                        <p>The data subject may, at any time, prevent the setting of cookies through our website by means of a corresponding setting of the Internet browser used, and may thus permanently deny the setting of cookies. Furthermore, already set cookies may be deleted at any time via an Internet browser or other software programs. This is possible in all popular Internet browsers. If the data subject deactivates the setting of cookies in the Internet browser used, not all functions of our website may be entirely usable.</p>
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Cookies</h1>
                                        <p>The website of Augmentity collects a series of general data and information when a data subject or automated system calls up the website. This general data and information are stored in the server log files. Collected may be (1) the browser types and versions used, (2) the operating system used by the accessing system, (3) the website from which an accessing system reaches our website (so-called referrers), (4) the sub-websites, (5) the date and time of access to the Internet site, (6) an Internet protocol address (IP address), (7) the Internet service provider of the accessing system, and (8) any other similar data and information that may be used in the event of attacks on our information technology systems.</p>
                                        <p>When using these general data and information, Augmentity does not draw any conclusions about the data subject. Rather, this information is needed to (1) deliver the content of our website correctly, (2) optimize the content of our website as well as its advertisement, (3) ensure the long-term viability of our information technology systems and website technology, and (4) provide law enforcement authorities with the information necessary for criminal prosecution in case of a cyber-attack. Therefore, Augmentity analyses anonymously collected data and information statistically, with the aim of increasing the data protection and data security of our enterprise, and to ensure an optimal level of protection for the personal data we process. The anonymous data of the server log files are stored separately from all personal data provided by a data subject.</p>
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Registration on our website</h1>
                                        <p>The data subject has the possibility to register on the website of the controller with the indication of personal data. Which personal data are transmitted to the controller is determined by the respective input mask used for the registration. The personal data entered by the data subject are collected and stored exclusively for internal use by the controller, and for his own purposes. The controller may request transfer to one or more processors (e.g. a parcel service) that also uses personal data for an internal purpose which is attributable to the controller.</p>
                                        <p>By registering on the website of the controller, the IP address—assigned by the Internet service provider (ISP) and used by the data subject—date, and time of the registration are also stored. The storage of this data takes place against the background that this is the only way to prevent the misuse of our services, and, if necessary, to make it possible to investigate committed offenses. Insofar, the storage of this data is necessary to secure the controller. This data is not passed on to third parties unless there is a statutory obligation to pass on the data, or if the transfer serves the aim of criminal prosecution.</p>
                                        <p>The registration of the data subject, with the voluntary indication of personal data, is intended to enable the controller to offer the data subject contents or services that may only be offered to registered users due to the nature of the matter in question. Registered persons are free to change the personal data specified during the registration at any time, or to have them completely deleted from the data stock of the controller.</p>
                                        <p>The data controller shall, at any time, provide information upon request to each data subject as to what personal data are stored about the data subject. In addition, the data controller shall correct or erase personal data at the request or indication of the data subject, insofar as there are no statutory storage obligations. To have your data erased from our website contact the Augmentity Compliance Officer. Send message to discover@augmentity.net.</p>
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Subscription to our newsletters</h1>
                                        <p>On the website of Augmentity, users are given the opportunity to subscribe to our newsletter. The input mask used for this purpose determines what personal data are transmitted, as well as when the newsletter is ordered from the controller.</p>
                                        <p>Augmentity informs its customers and business partners regularly by means of a newsletter about enterprise offers. The newsletter may only be received by the data subject if (1) the data subject has a valid e-mail address and (2) the data subject registers for the newsletter shipping. A confirmation e-mail will be sent to the e-mail address registered by a data subject for the first time for newsletter shipping, for legal reasons, in the double opt-in procedure. This confirmation e-mail is used to prove whether the owner of the e-mail address as the data subject is authorised to receive the newsletter.</p>
                                        <p>During the registration for the newsletter, we also store the IP address of the computer system assigned by the Internet service provider (ISP) and used by the data subject at the time of the registration, as well as the date and time of the registration. The collection of this data is necessary in order to understand the (possible) misuse of the e-mail address of a data subject at a later date, and it therefore serves the aim of the legal protection of the controller.</p>
                                        <p>The personal data collected as part of a registration for the newsletter will only be used to send our newsletter. In addition, subscribers to the newsletter may be informed by e-mail, as long as this is necessary for the operation of the newsletter service or a registration in question, as this could be the case in the event of modifications to the newsletter offer, or in the event of a change in technical circumstances. There will be no transfer of personal data collected by the newsletter service to third parties. The subscription to our newsletter may be terminated by the data subject at any time. The consent to the storage of personal data, which the data subject has given for shipping the newsletter, may be revoked at any time. For the purpose of revocation of consent, a corresponding link is found in each newsletter. It is also possible to unsubscribe from the newsletter at any time directly on the website, or to communicate this to the Augmentity Compliance Officer. Send message to discover@augmentity.net.</p>
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Newsletter-Tracking</h1>
                                        <p>The newsletter of Augmentity contains so-called tracking pixels. A tracking pixel is a miniature graphic embedded in such e-mails, which are sent in HTML format to enable log file recording and analysis. This allows a statistical analysis of the success or failure of online marketing campaigns. Based on the embedded tracking pixel, Augmentity may see if and when an e-mail was opened by a data subject, and which links in the e-mail were called up by data subjects.</p>
                                        <p>Such personal data collected in the tracking pixels contained in the newsletters are stored and analysed by the controller in order to optimize the shipping of the newsletter, as well as to adapt the content of future newsletters even better to the interests of the data subject. These personal data will not be passed on to third parties. Data subjects are at any time entitled to revoke the respective separate declaration of consent issued by means of the double-opt-in procedure. After a revocation, this personal data will be deleted by the controller. Augmentity automatically regards a withdrawal from the receipt of the newsletter as a revocation</p>
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Contact possibility via the website</h1>
                                        <p>The website of Augmentity contains information that enables a quick electronic contact to our enterprise, as well as direct communication with us, which also includes a general address of the so-called electronic mail (e-mail address). If a data subject contacts the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored. Such personal data transmitted on a voluntary basis by a data subject to the data controller are stored for the purpose of processing or contacting the data subject. There is no transfer of this personal data to third parties.</p>
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Routine erasure and blocking of personal data</h1>
                                        <p>The data controller shall process and store the personal data of the data subject only for the period necessary to achieve the purpose of storage, or as far as this is granted by the European legislator or other legislators in laws or regulations to which the controller is subject to.</p>
                                        <p>If the storage purpose is not applicable, or if a storage period prescribed by the European legislator or another competent legislator expires, the personal data are routinely blocked or erased in accordance with legal requirements.</p>
                                    </div>
                                     <div className="item-details-widget">
                                        <h1 className="item_details_info_title"> Rights of the data subject</h1>
                                        <h2 className="item_details_info_title"> Right of confirmation</h2> 
                                        <p>Each data subject shall have the right granted by the European legislator to obtain from the controller the confirmation as to whether or not personal data concerning him or her are being processed. If a data subject wishes to avail himself of this right of confirmation, he or she may, at any time, contact the Augmentity Data Protection Officer. </p>
                                        <h2 className="item_details_info_title"> Right of access</h2> 
                                        <p>Each data subject shall have the right granted by the European legislator to obtain from the controller free information about his or her personal data stored at any time and a copy of this information. Furthermore, the European directives and regulations grant the data subject access to the following information:</p>
                                        <p>the purposes of the processing;</p>
                                        <p>the categories of personal data concerned;</p>
                                        <p>the recipients or categories of recipients to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations.</p>
                                        <p>where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;</p>
                                        <p>the existence of the right to request from the controller rectification or erasure of personal data, or restriction of processing of personal data concerning the data subject, or to object to such processing;</p>
                                        <p>the existence of the right to lodge a complaint with a supervisory authority;</p>
                                        <p>where the personal data are not collected from the data subject, any available information as to their source;</p>
                                        <p>the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) of the GDPR and, at least in those cases, meaningful information about the logic involved, as well as the significance and envisaged consequences of such processing for the data subject.
Furthermore, the data subject shall have a right to obtain information as to whether personal data are transferred to a third country or to an international organisation. Where this is the case, the data subject shall have the right to be informed of the appropriate safeguards relating to the transfer.
</p>
                                        <p>If a data subject wishes to avail himself of this right of access, he or she may, at any time, contact the Augmentity Data Protection Officer. </p>
                                    <br/> 
                                    <h2 className="item_details_info_title"> Right to rectification</h2>
                                    <p>Each data subject shall have the right granted by the European legislator to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.</p>
                                    <p>If a data subject wishes to exercise this right to rectification, he or she may, at any time, contact any employee of the controller.</p>
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
