import React from "react";
import avatar from "../img/user.png";

const Chats = () => {

  return (
    <div className="chats">
      <div className="userChat">
        <img src={avatar} alt="" />
        <div className="userChatInfo">
          <span>taha</span>
          <p>Hello1</p>
        </div>
      </div>
      <div className="userChat">
        <img src={avatar} alt="" />
        <div className="userChatInfo">
          <span>taha</span>
          <p>Hello2</p>
        </div>
      </div>
      <div className="userChat">
        <img src={avatar} alt="" />
        <div className="userChatInfo">
          <span>taha3</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
