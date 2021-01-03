import React, { useState } from "react";
import "../Stylesheets/MessageSender.css";

import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";
import { useStateValue } from "./../StateProvider";

import db from "../firebase";
import firebase from "firebase";
const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const submit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });

    setInput("");
    setImageUrl("");
  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src={user.photoURL} title={user.displayName} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder={`What's on your mind, ${user.displayName} ?`}
            className='messageSender__input'
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type='text'
            placeholder='add image url'
            className='messageSender__image'
          />
          <button type='submit' onClick={submit}>
            hidden btn
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: "red" }} />
          <h3> Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3> Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <MoodIcon style={{ color: "orange" }} />
          <h3> Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
