import {useForm} from "@inertiajs/react";

import ImageEditIcon from "@/Components/icons/ImageEditIcon.jsx";
import CancelIcon from "@/Components/icons/CancelIcon.jsx";
import TickIcon from "@/Components/icons/TickIcon.jsx";

export default function CoverImage({isMyProfile, user, authUser}) {
    const {data, setData, post, errors} = useForm({
        _method: "patch",
        cover: ""
    })

    function handleChange(e) {
        const file = e.target.files[0]
        setData("cover", file)
    }

    function handleCancel() {
        setData("cover", "")
    }

    function handleSubmit() {
        post(route('profile.updateImage', {username: authUser.username}), {
            onSuccess: () => {
                handleCancel()
            }
        })
    }

    const coverImage = (user.cover_path && user.cover_path.length > 9) ? user.cover_path : '/images/defaults/user-cover.jpg'

    return (
        <>
            <img
                src={(data.cover && URL.createObjectURL(data.cover)) || coverImage}
                alt={data.cover || user.cover_path}
                className="h-[360px] w-full object-cover"/>

            {isMyProfile &&
                <div className="absolute top-2 right-2 flex items-center gap-2">
                    {!data.cover &&
                        <button
                            className="overflow-hidden flex items-center space-x-1 bg-gray-50 py-1 px-2 rounded text-gray-800 opacity-100 transition-all cursor-pointer group-hover:opacity-100 hover:bg-gray-200">
                            <ImageEditIcon/>
                            <span>{user.cover_path ? 'Edit' : 'Upload'} cover image</span>
                            <input
                                type="file"
                                className="absolute h-full w-full opacity-0 cursor-pointer"
                                value={data.avatar}
                                onChange={handleChange}
                            />
                        </button>
                    }

                    {data.cover &&
                        <>
                            <button
                                className="overflow-hidden flex items-center space-x-1 bg-gray-50 py-1 px-2 rounded text-gray-800 opacity-100 transition-all cursor-pointer group-hover:opacity-100 hover:bg-gray-200"
                                onClick={handleCancel}
                            >
                                <CancelIcon/>
                                <span>Cancel</span>
                            </button>
                            <button
                                className="overflow-hidden flex items-center space-x-1 bg-gray-800 py-1 px-2 rounded text-gray-400 opacity-100 transition-all cursor-pointer group-hover:opacity-100 hover:bg-gray-900"
                                onClick={handleSubmit}
                            >
                                <TickIcon stroke="#fff"/>
                                <span>Submit</span>
                            </button>
                        </>
                    }
                </div>
            }
        </>
    )
}
