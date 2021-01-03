import React from "react";
import "../Stylesheets/MessageSender.css";

import Avatar from "@material-ui/core/Avatar";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";

const MessageSender = () => {
  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar src='' title='Vatsal' />
        <form>
          <input
            type='text'
            placeholder="What's on your mind user"
            className='messageSender__input'
          />
          <input
            type='text'
            placeholder='add image url'
            className='messageSender__image'
          />
          <button type='submit'>hidden btn</button>
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
