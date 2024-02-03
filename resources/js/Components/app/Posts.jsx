import PostItem from "@/Components/app/PostItem.jsx";

export default function Posts({posts}) {
    console.log(posts)
    return (
        <ul className="posts_scroll space-y-8 h-[calc(100vh-193px)] overflow-y-auto p-2">
            {posts.map(post => {
                return <PostItem key={post.id} post={post}/>
            })}
        </ul>
    )
}
