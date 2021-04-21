import React from "react";
import PostList from "./PostList";
import { useEffect } from "react";

function PostContainer({ currentUser, setPosts, posts, handleDelete } ) {

    useEffect(() => {
        fetch("http://localhost:4000/posts")
        .then((r) => r.json())
        .then((data) => setPosts(data))
    }, [setPosts]);

    return(
        <PostList posts={posts} setPosts={setPosts} currentUser={currentUser} handleDelete={handleDelete} />
    )

}

export default PostContainer;