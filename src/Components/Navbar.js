import React, { useState } from 'react'
import IMG from './IMG.png'


const Navbar = () => {


    const [switched, setSwitched] = useState(false);
    const [switched2, setSwitched2] = useState(false);


    const toggle = () => {
        switched ? setSwitched(false) : setSwitched(true)
    }
    const toggle2 = () => {
        switched2 ? setSwitched2(false) : setSwitched2(true)
    }








    return (

        // *****************   Navbar Starts

        <>

            <nav className='navbar'>
                <div className="left-Nav">
                    <button className="hamburger" onClick={toggle}> <div className="menu-icon"  > <span><i className="fa fa-ellipsis-v" aria-hidden="true"></i><i className="fa fa-ellipsis-v" aria-hidden="true"></i><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span></div></button>
                    <div className="nav">
                        <li>  <a href="/"> COMCAT <br /><span className='px-4'> BUSINESS </span>  </a> </li>
                        <li>  <a href="/">  SHOP  </a> </li>
                        <li>  <a href="/">  SUPPORT  </a> </li>
                        <li>  <a data-bs-toggle="modal" href="#exampleModalToggle" >  MODAL </a> </li>
                    </div>

                </div>

                <div className="right-nav">
                    <span className="cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span className="border-right"></span>
                    <span className="search"><i className="fa fa-search" aria-hidden="true"></i></span>
                    <span className="border-right"></span>

                    <p className='mt-3'>Hello, Tim Whatley</p>
                    <div className="dropDown" onClick={toggle2}><span className="profile px-2"><i className="fa fa-user" aria-hidden="true"></i></span>
                        <div className={`   hide ${switched2 ? "visible" : "null"}`}>
                            <div className={` flex   `}>
                                <li>Voicemail </li>
                                <li>  <i className="fa fa-user mx-2" aria-hidden="true"> </i> My Profile</li>
                                <li>  <i className="fa fa-sign-out mx-2" aria-hidden="true"></i>Sign Out</li>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hamburger  MENU STARTS************************** */}


            <div className={`bottom-menu  ${switched ? "visible" : "visually-hidden"}`} id="bottom"  >
                <button className='close-btn' onClick={toggle} > <i className="fa fa-times" aria-hidden="true"  ></i></button>
                <h3>My Account</h3>
                <div className="content">
                    <h4>Astronoodle North</h4>
                    <h6>36 Main St. Greenwich NC </h6>
                    <h5 className="bold">  <a href="/">Switch Account</a> </h5> <hr />
                    <h6> <i className="fa fa-home" aria-hidden="true"></i> OVERVIEW</h6>
                    <div>
                        <h6 >
                            <a href="/" className="dropdown-item" style={{ color: "white" }}> <i class="fa fa-server mx-2" aria-hidden="true"></i>SUBSCRIBED SERVICES</a>
                        </h6>
                        <ul className=" width" >
                            <li><a className="dropdown-item" href="#">Business Internet</a></li>
                            <li><a className="dropdown-item" href="#">Business Mobile</a></li>
                            <li><a className="dropdown-item" href="#">Business Mobility</a></li>
                        </ul>
                    </div>

                    <div >
                        <h6>
                            <a href="/" className="dropdown-item" style={{ color: "white" }}><i class="fa fa-clipboard mx-2" aria-hidden="true"></i>ACCOUNT MANAGMENT</a>
                        </h6>
                        <ul className=" width" >
                            <li><a className="dropdown-item" href="#">Business Internet</a></li>
                            <li><a className="dropdown-item" href="#">Business Mobile</a></li>
                            <li><a className="dropdown-item" href="#">Business Mobility</a></li>
                        </ul>
                    </div>

                </div>
            </div>


            {/* BOTTOM LEFT MENU ENDS************************** */}


            {/* // MODAL STARTS HERE ***************************************************** */}


            {/* ********************     1st MODAL */}


            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="exampleModalToggleLabel">Welcome To My Account </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat delectus magnam natus? Voluptatum quidem corrupti voluptas, illo molestiae eius necessitatibus vel rem veniam dignissimos explicabo ipsa
                        </div>
                        <img src={IMG} alt="Image" />
                        <div className="modal-footer">
                            <button type="button" className="btn mybtn" data-bs-dismiss="modal" aria-label="Close">MAY BE LATER</button>
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={toggle}>CHECK IT OUT</button>

                        </div>
                    </div>
                </div>
            </div>

            {/* ********************    2nd MODAL */}


            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="exampleModalToggleLabel2">MY ACCOUNT MENU</h5>

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum molestiae dignissimos sint ex quod consequatur voluptatem aliquid mollitia placeat quis.
                        </div>
                        <div className="modal-footer">
                            <button className="btn mybtn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={toggle}>BACK</button>
                            <button className="btn btn-primary" id="btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" onClick={() => { toggle(); toggle2() }} >NEXT</button>

                        </div>
                    </div>
                </div>
            </div>




            {/* ********************    3rd MODAL */}



            <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="exampleModalToggleLabel">User Profile </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat delectus magnam natus? Voluptatum quidem corrupti voluptas, illo molestiae eius necessitatibus vel rem veniam dignissimos explicabo ipsa
                        </div>
                        <div className="modal-footer">
                            <button className="btn mybtn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={() => { toggle(); toggle2() }}>BACK</button>

                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={toggle2}   >NEXT</button>

                        </div>
                    </div>
                </div>
            </div>


            {/* ********************    4th  MODAL */}


            <div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-weight-bold" id="exampleModalToggleLabel">You're All Set  </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat delectus magnam natus? Voluptatum quidem corrupti voluptas, illo molestiae eius necessitatibus vel rem veniam dignissimos explicabo ipsa
                        </div>
                        <div className="modal-footer">
                            <button className="btn mybtn" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" onClick={toggle2}>BACK</button>

                            <button type="button" className="btn btn-outline-secondary">SET UP AUTO PAY</button>
                            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-dismiss="modal" >DONE</button>

                        </div>
                    </div>
                </div>
            </div>
        </>









    )
}

export default Navbar
