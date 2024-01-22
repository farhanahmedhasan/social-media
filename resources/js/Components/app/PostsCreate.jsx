import {useState} from "react";

export default function PostsCreate() {
    const [isPostCreating, setIsPostCreating] = useState(false)

    function handlePostCreating() {
        setIsPostCreating(true)
    }

    return (
        <div>
            <p className="text-gray-500 border border-gray-300 rounded mb-3 py-3 px-2 cursor-pointer"
               onClick={handlePostCreating}>Click
                here to create your post
            </p>

            {isPostCreating &&
                <div className="flex gap-2 justify-between">
                    <button className="relative py-2 px-6 text-white bg-blue-700 hover:bg-blue-800 rounded">
                        Attach files
                        <input type="file" className="absolute top-0 left-0 w-full opacity-0"/>
                    </button>
                    <button className="py-2 px-6 text-white bg-blue-700 hover:bg-blue-800 rounded">Submit</button>
                </div>
            }
        </div>
    )
}
