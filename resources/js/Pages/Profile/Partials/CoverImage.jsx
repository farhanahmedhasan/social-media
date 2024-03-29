import {useForm} from "@inertiajs/react";
import {toast} from "sonner";

import ImageEditIcon from "@/Components/icons/ImageEditIcon.jsx";
import CancelIcon from "@/Components/icons/CancelIcon.jsx";
import TickIcon from "@/Components/icons/TickIcon.jsx";

export default function CoverImage({isMyProfile, user}) {
    const {data, setData, post} = useForm({
        _method: "patch",
        cover: ""
    })

    function handleChange(e) {
        const file = e.target.files[0]
        if (file.type === "video/mp4") {
            toast.error('Please Insert a valid image type file ex:jpg,png')
            handleCancel()
            return
        }
        setData("cover", file)
    }

    function handleCancel() {
        setData("cover", "")
    }

    function handleSubmit() {
        post(route('profileImage.update'), {
            onSuccess: () => {
                handleCancel()
                toast.success('Cover image has been updated successfully')
            },

            onError: (e) => {
                toast.error(e.cover)
            }
        })
    }

    return (
        <div className="relative bg-white border-b">
            <img
                src={(data.cover && URL.createObjectURL(data.cover)) || user.cover_path}
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
                                value={data.cover}
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
        </div>
    )
}
