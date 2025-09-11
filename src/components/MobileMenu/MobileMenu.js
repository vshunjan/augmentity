import React, { Fragment, useState,useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import icon1 from "../../images/icon/call-calling.svg";
import icon2 from "../../images/icon/icon-sms.svg";
import menuimg from "../../images/gallery/burger-icon.png";
import DecryptedText from "./decryptedText";
import logo from '../../images/logo/logo-png.png';

const menus = [
  {
    id: 1,
    title: "Who we are NOT",
    link: "/about",
  },
  
  {
    id: 5,
    title: "Consult Us",
    link: "/Contact",
  },
];
const menus2 = [
  {
    id: 1,
    title: "Analyse",
    link: "/analyse",
  },
  {
    id: 2,
    title: "Govern",
    link: "/govern",
  },
  {
    id: 3,
    title: "Insure",
    link: "/insure",
  },
  {
    id: 4,
    title: "Defend",
    link: "/defend",
  },
];
const menus3 = [
  {
    id: 1,
    title: "Hotline",
    link: "/hotline",
  },
];

const MobileMenu = () => {
    
    
  const [openId, setOpenId] = useState(0);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  
    
   

  return (
    <div className="container">
       <div className="header-logo mobile-heder">
              <Link onClick={ClickHandler} to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
      <ul className="clearfix xb-menu-primary">
        <div className="menu-list-div">
          <div className="menu-sub-head">
            {" "}
            <h1> Discover</h1>
          </div>
          <div className="menu-list-pages">
            {menus.map((item, mn) => {
              return (
                <ListItem
                  className={item.id === openId ? "active" : null}
                  key={mn}
                >
                  {item.submenu ? (
                    <Fragment>
                      <p
                        onClick={() =>
                          setOpenId(item.id === openId ? 0 : item.id)
                        }
                      >
                        {item.title}
                        <i
                          className={
                            item.id === openId
                              ? "fa fa-angle-up"
                              : "fa fa-angle-down"
                          }
                        ></i>
                      </p>
                      <Collapse
                        in={item.id === openId}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List className="menu-item menu-item-has-children active">
                          <Fragment>
                            {item.submenu.map((submenu, i) => {
                              return (
                                <ListItem key={i}>
                                  <Link
                                    onClick={ClickHandler}
                                    className="active"
                                    to={submenu.link}
                                  >
                                    {submenu.title}
                                  </Link>
                                </ListItem>
                              );
                            })}
                          </Fragment>
                        </List>
                      </Collapse>
                    </Fragment>
                  ) : (
                    <Link  onClick={ClickHandler} className="active" to={item.link}>
                      {" "}
                      <DecryptedText
                        text={item.title}
                        speed={70}
                        maxIterations={10}
                        characters="SYAALYNLSENASUGMENTTYOVGGRENROCNGSURULRSE"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                      />
                    </Link>
                  )}
                </ListItem>
              );
            })}
          </div>
        </div>
        <div className="menu-list-div">
          <div className="menu-sub-head">
            {" "}
            <h1> Services</h1>
          </div>
          <div className="menu-list-pages">
            {menus2.map((item, mn) => {
              return (
                <ListItem
                  className={item.id === openId ? "active" : null}
                  key={mn}
                >
                  {item.submenu ? (
                    <Fragment>
                      <p
                        onClick={() =>
                          setOpenId(item.id === openId ? 0 : item.id)
                        }
                      >
                        {item.title}
                        <i
                          className={
                            item.id === openId
                              ? "fa fa-angle-up"
                              : "fa fa-angle-down"
                          }
                        ></i>
                      </p>
                      <Collapse
                        in={item.id === openId}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List className="menu-item menu-item-has-children active">
                          <Fragment>
                            {item.submenu.map((submenu, i) => {
                              return (
                                <ListItem key={i}>
                                  <Link
                                    onClick={ClickHandler}
                                    className="active"
                                    to={submenu.link}
                                  >
                                    {submenu.title}
                                  </Link>
                                </ListItem>
                              );
                            })}
                          </Fragment>
                        </List>
                      </Collapse>
                    </Fragment>
                  ) : (
                    <Link  onClick={ClickHandler} className="active" to={item.link}>
                      {" "}
                      <DecryptedText
                        text={item.title}
                        speed={70}
                        maxIterations={10}
                        characters="SYAALYNLSENASUGMENTTYOVGGRENROCNGSURULRSE"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                      />
                    </Link>
                  )}
                </ListItem>
              );
            })}
          </div>
        </div>
        <div className="menu-list-div">
          <div className="menu-sub-head">
            {" "}
            <h1> Under attack?</h1>
          </div>
          <div className="menu-list-pages">
            {menus3.map((item, mn) => {
              return (
                <ListItem
                  className={item.id === openId ? "active" : null}
                  key={mn}
                >
                  {item.submenu ? (
                    <Fragment>
                      <p
                        onClick={() =>
                          setOpenId(item.id === openId ? 0 : item.id)
                        }
                      >
                        {item.title}
                        <i
                          className={
                            item.id === openId
                              ? "fa fa-angle-up"
                              : "fa fa-angle-down"
                          }
                        ></i>
                      </p>
                      <Collapse
                        in={item.id === openId}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List className="menu-item menu-item-has-children active">
                          <Fragment>
                            {item.submenu.map((submenu, i) => {
                              return (
                                <ListItem key={i}>
                                  <Link
                                    onClick={ClickHandler}
                                    className="active"
                                    to={submenu.link}
                                  >
                                    {submenu.title}
                                  </Link>
                                </ListItem>
                              );
                            })}
                          </Fragment>
                        </List>
                      </Collapse>
                    </Fragment>
                  ) : (
                    <Link  onClick={ClickHandler} className="active" to={item.link}>
                      <DecryptedText
                        text={item.title}
                        speed={70}
                        maxIterations={10}
                        characters="SYAALYNLSENASUGMENTTYOVGGRENROCNGSURULRSE"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                      />
                    </Link>
                  )}
                </ListItem>
              );
            })}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default MobileMenu;
