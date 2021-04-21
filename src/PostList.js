import React from "react"
import PostCard from "./PostCard"

function PostList({ currentUser, posts, setPosts, handleDelete }) {

    // Ask about setting a default value of likes to 0.  On browswer nothing
    // is showing after likes.

    const allPosts = posts.map((post) => {
        return (
            <PostCard 
                key={post.id}
                setPosts={setPosts}
                handleDelete={handleDelete}
                {...post}
                post={post}  
            />
        )
    })
    console.log(allPosts)
    console.log(posts)

    return (
        <ul className="cards">
            {allPosts}
        </ul>
    )
}

export default PostList