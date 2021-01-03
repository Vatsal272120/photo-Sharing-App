import React from "react";
import "../Stylesheets/StoryReel.css";
import Story from "./Story";
import { useStateValue } from "./../StateProvider";

const StoryReel = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='storyReel'>
      <Story image='' profileSrc={user.photoURL} title={user.displayName} />
      <Story
        image='https://images.unsplash.com/photo-1599028004313-2b39b6daba11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
        profileSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/220px-Elon_Musk_Royal_Society.jpg'
        title='Elon Musk'
      />
      <Story
        image='https://images.unsplash.com/photo-1598981256010-1955bacb823d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
        profileSrc='https://ichef.bbci.co.uk/news/976/cpsprodpb/1E3D/production/_110514770_mediaitem110514768.jpg'
        title='Jeff Bezos'
      />
      <Story
        image='https://images.unsplash.com/photo-1598989995965-76ffb0f161dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60'
        profileSrc='https://miro.medium.com/max/6000/1*Yo63Z3JvpjDlNApcONLOrw.jpeg'
        title='Warren Buffet'
      />
    </div>
  );
};

export default StoryReel;
