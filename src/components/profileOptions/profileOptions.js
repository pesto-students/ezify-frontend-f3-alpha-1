import React from "react";
import { Dropdown } from "react-bootstrap";

import "./profileOptions.scss";

import Avatar from "./../../assets/profile/avatar-1.svg";
import { Link } from "react-router-dom";

const ProfileOptions = ({ firstName, roles }) => {
  let menuOptions = [];

  switch (roles) {
    case "user":
      menuOptions = [
        { label: "Profile", link: "/profile" },
        { label: "Bookings", link: "/bookings" },
      ];
      break;

    default:
      menuOptions = [];
      break;
  }

  return (
    <Dropdown className="ml-3 profileOptionsDropdown">
      <Dropdown.Toggle>
        <div className="d-flex align-items-center justify-content-center">
          <div className="profileOptionsDropdown__img">
            <img src={Avatar} alt="Profile" />
          </div>
          <span>Hi, {firstName}</span>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {menuOptions.map((option, index) => (
          <Dropdown.Item as="button" key={index}>
            <Link to={option.link}>{option.label}</Link>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileOptions;
