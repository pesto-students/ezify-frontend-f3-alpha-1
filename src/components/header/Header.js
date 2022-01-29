import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link, useHistory, useLocation } from "react-router-dom";

import { setCurrentUser, setCurrentUserToken } from "../../redux/user/user.actions";
import { selectToken, selectUserDetails } from "../../redux/user/user.selectors";

import CustomButton from "../atmoic/customButton/customButton";
import ModalBase from "../atmoic/modal/modal";
import ProfileOptions from "../profileOptions/profileOptions";

import UserSignup from "../signup/user/userSignup";

import "./Header.scss";
import VendorSignup from "../signup/vendor/vendorSignup";
import NotificationBell from "../notificationBell";

const Header = ({ token, setToken, userDetails, setUser, showVendorBtn }) => {
  const history = useHistory();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const [size, setSize] = useState("md");
  const [popupType, setPopupType] = useState("user");

  const handleClose = () => {
    setSize("md");
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleSignupSignIn = () => {
    if (token) {
      setToken(null);
      setUser(null);
      history.push("/");
    } else {
      location.pathname === "/vendorhome" ? setPopupType("vendor") : setPopupType("user");
      handleShow();
    }
  };

  const handleVendorHomePage = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-1 d-flex align-items-center justify-content-end">
              {showVendorBtn && (
                <Link to="/" className="logo-container">
                  Ezzify
                </Link>
              )}
            </div>
            <div className="col-7 offset-4 d-flex align-items-center justify-content-end">
              <div className="button-group d-flex align-items-center justify-content-end">
                {userDetails && <NotificationBell userDetails={userDetails} token={token} />}
                {showVendorBtn && (
                  <Link to="/vendorhome" className="button-vendor mr-3" onClick={handleVendorHomePage}>
                    Become a Vendor
                  </Link>
                )}
                <CustomButton type="button" text={token ? "Sign Out" : "Sign In"} onClick={handleSignupSignIn}></CustomButton>
                {token && <ProfileOptions {...userDetails} />}
              </div>
            </div>
          </div>
        </div>
      </header>

      <ModalBase show={show} handleClose={handleClose} handleShow={handleShow} dialogClassName="signup" size={size}>
        <>
          {popupType === "user" && <UserSignup setSize={setSize} handleClose={handleClose}></UserSignup>}

          {popupType === "vendor" && <VendorSignup setSize={setSize} handleClose={handleClose} />}
        </>
      </ModalBase>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
  userDetails: selectUserDetails,
});

const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setCurrentUserToken(token)),
  setUser: (user) => dispatch(setCurrentUser(user)),
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Header));
