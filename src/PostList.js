import React from "react"
import PostCard from "./PostCard"

function PostList({ currentUser, posts }) {

    const allPosts = posts.map((post) => {
        return <PostCard key={post.id} {...post} />
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