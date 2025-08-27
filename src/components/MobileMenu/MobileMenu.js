import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import icon1 from '../../images/icon/call-calling.svg'
import icon2 from '../../images/icon/icon-sms.svg'
import menuimg from '../../images/gallery/burger-icon.png'



const menus = [
     {
        id: 1,
        title: 'Home1',
        link: '/',
    },
    {
        id: 3,
        title: 'About',
        link: '/about',
    },
    {
        id: 4,
        title: 'Services',
        link: '/services',
    },
    {
        id: 5,
        title: 'Contact',
        link: '/Contact',
    }
    


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <ul className="clearfix xb-menu-primary">
                <div className="col-lg-4 mt-30">
                                        <div className="item-contact_info">
                                            <div className="xb-item--inner">
                                                 <div className="contact-info_widget">
                                                    <h3 className="xb-title">United states office</h3>
                                                    <span className="xb-location">Sunshine example park, Floor <br /> No 05A,Sector-94,</span>
                                                </div>
                                                <div className="xb-item--top">
                                                    <h3 className="xb-item--title">Contact Info</h3>
                                                    <span className="xb-item--hotline"><img src={icon1} alt="" /> +(1) 1230 452 8597</span>
                                                    <span className="xb-item--email"><img src={icon2} alt="" /> innomax@example.com</span>
                                                   
                                                </div>
                                               
                                             
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className='menu-list-div'>
            {menus.map((item, mn) => {
                return (
                    <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                        {item.submenu ?
                            <Fragment>
                                <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                    <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                </p>
                                <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                    <List className="menu-item menu-item-has-children active">
                                        <Fragment>
                                            {item.submenu.map((submenu, i) => {
                                                return (
                                                    <ListItem key={i}>
                                                        <Link onClick={ClickHandler} className="active"
                                                            to={submenu.link}>{submenu.title}</Link>
                                                    </ListItem>
                                                )
                                            })}
                                        </Fragment>
                                    </List>
                                </Collapse>
                            </Fragment>
                            : <Link className="active"
                                to={item.link}>{item.title}</Link>
                        }
                    </ListItem>
                )
            })}
            </div>
        </ul>
    )
}

export default MobileMenu;