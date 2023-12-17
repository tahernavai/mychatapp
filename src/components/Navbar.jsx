import React, { useState } from "react";
import avatar from "../img/user.png";
import Axios from "axios";


const Navbar = () => {
  const [photos, setPhotos] = useState("");
  Axios.get("https://randomuser.me/api/portraits/med/men/75.jpg").then((res) => {
    console.log(res.data.img);
    //setPhotos(res.data[0].excuse)
  });

  return (
    <div className="navbar">
      <span className="logo">AppinApps Chat</span>
      <div className="user">
        <img src={photos} alt="" />
        <span>taha</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
