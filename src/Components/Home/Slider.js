import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import logo from "../../Assets/images/logo.png";
import toggle from "../../Assets/images/toggle-icon.png";

const Slider = () => {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    const [user, setUser] = useState('');

    useEffect(()=> {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []);

    console.log(user);

    const logout = ()=> {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setTimeout(()=> {
            window.location.href = '/';
        }, 1000)
        setUser('')
    }

    const getLang = localStorage.getItem('lang')
    const [langName, setLangName] = useState(getLang);

    const setLangEn = ()=> {
        setLangName('en')
        localStorage.removeItem('lang');
        localStorage.setItem('lang', 'en');
        setTimeout(()=> {
            window.location.reload(false);
        }, 1000)
    }

    const setLangAr = ()=> {
        setLangName('ar')
        localStorage.removeItem('lang');
        localStorage.setItem('lang', 'ar');
        setTimeout(()=> {
            window.location.reload(false);
        }, 1000)
    }

    return (
        <div className="banner_bg_main mb-4">

            <div className="container">
                <div className="header_section_top">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="custom_menu">
                                <ul>
                                    <li><a href="#">Best Sellers</a></li>
                                    <li><a href="#">Gift Ideas</a></li>
                                    <li><a href="#">New Releases</a></li>
                                    <li><a href="#">Today's Deals</a></li>
                                    <li><a href="#">Customer Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logo_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="logo_2">
                                <a href="/">
                                    <img src={logo} alt="logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header_section">
                <div className="container">
                    <div className="containt_main">
                        <div id="mySidenav" className="sidenav">
                            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                            <a href="/">Home</a>
                        </div>
                        <span className="toggle_icon" onClick={openNav}>
                            <img src={toggle}/>
                        </span>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Category
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                            </div>
                        </div>

                        <div className="main">

                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search this blog" />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button"
                                            style={{backgroundColor: "#f26522", borderColor: "#f26522"}}>
                                        <i className="fa fa-search"/>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="header_box">

                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {langName}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#" onClick={setLangAr}>ar</a>
                                    <a className="dropdown-item" href="#" onClick={setLangEn}>en</a>
                                </div>
                            </div>

                            <div className="login_menu">
                                <ul>
                                    <li>
                                        <Link to={"/login"} style={{ textDecoration: 'none' }}>
                                            <i className="fa fa-sign-in" aria-hidden="true" />
                                            <span className="padding_10">Sign in</span>
                                        </Link>
                                    </li>
                                    <li>

                                        {
                                            user !== '' ? (
                                                <div className="dropdown">
                                                    <div id="dropdownMenuButton2" data-toggle="dropdown"
                                                         aria-haspopup="true" aria-expanded="false" style={{cursor: 'pointer'}}>
                                                        <i className="fa fa-user" aria-hidden="true" />
                                                        <span className="padding_10">{user.username}</span>
                                                    </div>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                                        <a className="dropdown-item" style={{color: 'black'}}
                                                           href="/user/allorders">Profile</a>
                                                        <a className="dropdown-item" style={{color: 'black'}}
                                                           href="#" onClick={logout}>Logout</a>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <i className="fa fa-user" aria-hidden="true" />
                                                    <span className="padding_10">User</span>
                                                </>
                                            )
                                        }



                                        {/*/!*<Link to={"/user/allorders"} style={{ textDecoration: 'none' }}>*!/*/}
                                        {/*    <i className="fa fa-user" aria-hidden="true" id="dropdownMenuButton"/>*/}
                                        {/*    <span className="padding_10" id="dropdownMenuButton">User</span>*/}
                                        {/*    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">*/}
                                        {/*        <a className="dropdown-item" href="#">Action</a>*/}
                                        {/*        <a className="dropdown-item" href="#">Another action</a>*/}
                                        {/*    </div>*/}
                                        {/*/!*</Link>*!/*/}
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="banner_section layout_padding">
                <div className="container">
                    <div id="my_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">
                                            Get Start Your favorite shopping
                                        </h1>
                                        <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">
                                            Get Start Your favorite shopping
                                        </h1>
                                        <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h1 className="banner_taital">
                                            Get Start Your favorite shopping
                                        </h1>
                                        <div className="buynow_bt"><a href="#">Buy Now</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
                            <i className="fa fa-angle-left"></i>
                        </a>
                        <a className="carousel-control-next" href="#my_slider" role="button" data-slide="next">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Slider;