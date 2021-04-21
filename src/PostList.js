import React from "react"
import PostCard from "./PostCard"

function PostList({ currentUser, posts, setPosts, handleDelete }) {
    

    const allPosts = posts.map((post) => {
        return (
            <div className="cards-list">
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