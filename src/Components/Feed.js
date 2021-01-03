import React, { useState, useEffect } from "react";

import "../Stylesheets/Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useStateValue } from "./../StateProvider";
import db from "../firebase";

const Feed = () => {
  const [{ user }, dispatch] = useStateValue();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  console.log(posts);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
        />
      ))}
    </div>
  );
};

export default Feed;
