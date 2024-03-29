import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  const handleFeature = () => {
    alert("Comming Soon in Future");
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" onClick={handleFeature} />
          <img src={Add} alt="" onClick={handleFeature} />
          <img src={More} alt="" onClick={handleFeature} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
