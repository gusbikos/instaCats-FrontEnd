import React from "react";
import PostList from "./PostList";
import { useState, useEffect } from "react";

function PostContainer() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/posts")
        .then((r) => r.json())
        .then((data) => setPosts(data))
        
    }, []);

    return(
        <PostList posts={posts} />
    )

}

export default PostContainer;