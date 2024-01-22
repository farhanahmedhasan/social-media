import PostItem from "@/Components/app/PostItem.jsx";
import postsData from "@/data/PostsData.js";

export default function Posts() {
    return (
        <ul className="space-y-8">
            {postsData.map(post => {
                return <PostItem key={post.id} post={post}/>
            })}
        </ul>
    )
}
