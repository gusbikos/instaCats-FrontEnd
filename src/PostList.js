import React from "react"
import PostCard from "./PostCard"

function PostList({ currentUser, posts, setPosts, handleDelete }) {
    
    const postList = Array.from(posts)

    const allPosts = postList.map((post) => {
        return (
            <div className="photosGrid">
                <PostCard 
                    key={post.id}
                    setPosts={setPosts}
                    handleDelete={handleDelete}
                    {...post}
                    post={post}  
                />
            </div>
        )
    })
    // console.log(allPosts)
    // console.log(posts)

    return (
        <ul className="content">
            {allPosts}
        </ul>
    )
}

export default PostList