import React from "react";
import avatar from "../img/user.png";

const Message = () => {

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={avatar} alt="" />
        <span>Jast now</span>
        <div className="messageContent">
          <p>this is message</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
