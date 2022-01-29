import React, { useEffect, useContext, useRef, useState } from "react";
import { io } from "socket.io-client";

import { ApiCallsContext } from "../../services/api.service";

import "./notificationBell.scss";

import Bell from "./../../assets/header/bell.svg";
import { API_URLS } from "../../utlis/constants";
import { catchHandler } from "../../utlis/catchHandler.utlis";
import { Dropdown } from "react-bootstrap";
import NotificationList from "../notificationList";
import { setToasterConfig } from "../../redux/toaster/toaster.actions";
import { connect } from "react-redux";

const NotificationBell = ({ userDetails, token, setToasterCofig }) => {
  const [notifications, setNotifications] = useState([]);

  const ApiContext = useContext(ApiCallsContext);

  const socket = io(API_URLS.SOCKET_END_POINT, {
    transports: ["websocket", "polling"],
    path: "/mysocket/",
  });

  const fetchNotifications = async () => {
    const response = await catchHandler(fetchNotificationsAPI);
    if (Array.isArray(response) && response.length > 0) {
      setNotifications(response);
      setToasterCofig({
        show: true,
        message: "You have new notifications",
        className: "success",
      });
    }
  };

  const fetchNotificationsAPI = async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = await ApiContext.getData(API_URLS.FETCH_NOTIFICATIONS, { headers });
    return data;
  };

  useEffect(() => {
    fetchNotifications();
    socket.emit("join", userDetails._id);

    socket.on("NEW_ORDER", (data) => {
      fetchNotifications();

    });
  }, []);

  useEffect(() => {
    if (notifications.length > 0) {
      let audio = new Audio("/notificationSound.wav");
      audio.play();
    }
  }, [notifications]);

  return (
    <div className="mr-3 notificationBell">
      <Dropdown className="ml-3">
        <Dropdown.Toggle>
          <img src={Bell} alt="Notification bell" id="notification--bell" className="notificationBell--bell" />
          {notifications.length > 0 && <div className="notificationBell__count">{notifications.length}</div>}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <NotificationList notifications={notifications} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setToasterCofig: (config) => dispatch(setToasterConfig(config)),
});

export default connect(null, mapDispatchToProps)(NotificationBell);
