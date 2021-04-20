import React from "react";
import PostList from "./PostList";
import { useEffect } from "react";

function PostContainer({ currentUser, setPosts, posts } ) {

    useEffect(() => {
        fetch("http://localhost:4000/posts")
        .then((r) => r.json())
        .then((data) => setPosts(data))
    }, []);

    return(
        <PostList posts={posts} currentUser={currentUser}/>
    )

}

export default PostContainer;