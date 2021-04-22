import React from "react";
import PostList from "./PostList";
import { useEffect, useState } from "react";

function PostContainer({ currentUser, setPosts, posts, handleDelete }) {
    const [showAll, setShowAll] = useState(false)
    
    useEffect(() => {
        fetch("http://localhost:4000/posts")
        .then((r) => r.json())
        .then((data) => setPosts(data))
    }, []);

    function filteredPosts() {
        if (currentUser) {
            if (showAll) {
                return posts
            }
            else {
                const filterPosts = posts.filter((post) => {
                    // console.log(post)
                    return post.user_id === currentUser.id
                })
                    return filterPosts
            }
        }
        return posts
    }

    function handleShow() {
        setShowAll(!showAll)
    }

    return(
        <div className="container">
            <button onClick ={handleShow }>{showAll ? 'Show My Posts' : "Show All"}</button>
            <PostList 
                posts={filteredPosts()} 
                setPosts={setPosts} 
                currentUser={currentUser} 
                handleDelete={handleDelete} 
            />
        </div>
    )
}

export default PostContainer;