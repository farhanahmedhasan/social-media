import ThumbsUpIcon from "@/Components/icons/ThumbsUpIcon.jsx";
import CommentIcon from "@/Components/icons/CommentIcon.jsx";

export default function PostReactions() {
    return (
        <div className="flex items-center gap-2">
            <button
                className="flex-1 flex justify-center items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100">
                <ThumbsUpIcon/>
                <span>Like</span>
            </button>
            <button
                className="flex-1 flex justify-center items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg hover:bg-gray-100">
                <CommentIcon/>
                <span>Comment</span>
            </button>
        </div>
    )
}
