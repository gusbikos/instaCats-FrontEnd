import React from "react"
import PostCard from "./PostCard"

function PostList({posts}) {

    const allPosts = posts.map((post) => {
        return <PostCard key={post.id} post={post} />
    })

    return (
        <ul className="cards">
            {allPosts}
        </ul>
    )
}


export default PostList