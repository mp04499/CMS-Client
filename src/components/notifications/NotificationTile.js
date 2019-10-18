import React from "react";
import NotificationList from "./NotificationList";
import "../../css/Notification.css"

const NotificationTile = () => {

  return (
    <div className="tile is-child box Notification-Tile">
      <p className="title">Notifications</p>
      <NotificationList/>
    </div>
  )
};

export default NotificationTile;
