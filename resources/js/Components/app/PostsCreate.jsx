import {useForm} from "@inertiajs/react";
import {useRef, useState} from "react";

import TextAreaInput from "@/Components/TextAreaInput.jsx";
import {autoSizeTextArea} from "@/utils/helpers.js"

export default function PostsCreate() {
    const [isPostCreating, setIsPostCreating] = useState(false)
    const textAreaRef = useRef(null)

    const {data, setData, post, reset} = useForm({
        body: ""
    })

    function handlePostCreating() {
        setIsPostCreating(true)
    }

    function handleTextAreaChange(e) {
        setData('body', e.target.value)
        autoSizeTextArea(textAreaRef);
    }

    function handleSubmit() {
        post(route('post.store'), {
            onSuccess: () => reset('body')
        })
    }

    return (
        <div className="flex-1 bg-white p-4 mb-6 rounded-lg">
            <TextAreaInput
                rows="1"
                ref={textAreaRef}
                value={data.body}
                onClick={handlePostCreating}
                onChange={handleTextAreaChange}
                placeholder="Click here to create a post"
                className="w-full"
            />

            {isPostCreating &&
                <div className="flex gap-2 justify-between mt-4">
                    <button className="relative py-2 px-6 text-white bg-blue-700 hover:bg-blue-800 rounded">
                        Attach files
                        <input type="file" className="absolute top-0 left-0 w-full opacity-0"/>
                    </button>
                    <button type="submit" onClick={handleSubmit}
                            className="py-2 px-6 text-white bg-blue-700 hover:bg-blue-800 rounded">Submit
                    </button>
                </div>
            }
        </div>
    )
}
