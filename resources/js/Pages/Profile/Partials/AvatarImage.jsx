import {useForm} from "@inertiajs/react";
import {toast} from "sonner";

import CameraAddIcon from "@/Components/icons/CameraAddIcon.jsx";
import CancelIcon from "@/Components/icons/CancelIcon.jsx";
import TickIcon from "@/Components/icons/TickIcon.jsx";

export default function AvatarImage({isMyProfile, user}) {
    const {data, setData, post} = useForm({
        _method: "patch",
        avatar: ""
    })

    function handleChange(e) {
        const file = e.target.files[0]

        if (file.type === "video/mp4") {
            toast.error('Please Insert a valid image type file ex:jpg,png')
            handleCancel()
            return
        }

        setData("avatar", file)
    }

    function handleCancel() {
        setData("avatar", "")
    }

    function handleSubmit() {
        post(route("profileImage.update"), {
            onSuccess: () => {
                handleCancel()
                toast.success("Profile picture has been successfully updated")
            },

            onError: (e) => {
                toast.error(e.avatar)
                handleCancel()
            }
        });
    }

    return (
        <div className="relative">
            <img src={(data.avatar && URL.createObjectURL(data.avatar)) || user.avatar_path}
                 alt={user.avatar_path}
                 className="h-48 w-48 object-cover border-2 border-gray-200 rounded-full"/>

            {(isMyProfile && !data.avatar) &&
                <button
                    className="absolute right-0 bottom-5 bg-gray-300 border border-gray-600 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-400">
                    <CameraAddIcon/>
                    <input
                        type="file"
                        className="absolute h-full w-full cursor-pointer opacity-0"
                        value={data.avatar}
                        onChange={handleChange}/>
                </button>
            }

            {(isMyProfile && data.avatar) &&
                <>
                    <div
                        className="absolute -right-3 bottom-24 bg-red-200 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-300"
                        onClick={handleCancel}>
                        <CancelIcon fill="#FF2400"/>
                    </div>
                    <div
                        className="absolute -right-2 bottom-12 bg-green-200 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-300"
                        onClick={handleSubmit}>
                        <TickIcon stroke="#0BDA51"/>
                    </div>
                </>
            }
        </div>
    );
};
