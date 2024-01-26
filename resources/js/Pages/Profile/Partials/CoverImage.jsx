import {useForm} from "@inertiajs/react";

import ImageEditIcon from "@/Components/icons/ImageEditIcon.jsx";

const coverImageSrc = "https://e0.pxfuel.com/wallpapers/137/952/desktop-wallpaper-facebook-cover-love-lovely-nice-cool-touch-beauty.jpg"

export default function CoverImage({isMyProfile, user}) {
    const {data, setData, post} = useForm({
        cover: ""
    })

    function handleSubmit() {
        //
    }

    return (
        <>
            {!user.cover_path ? <div className="h-[360px] w-full bg-black"></div>
                : <img src={coverImageSrc} alt={user?.cover_path} className="h-[360px] w-full object-cover"/>
            }
            {isMyProfile &&
                <button
                    className="absolute overflow-hidden top-2 right-2 flex items-center space-x-2 bg-gray-50 py-1 px-2 rounded text-gray-800 opacity-100 transition-all cursor-pointer group-hover:opacity-100 hover:bg-gray-200">
                    <ImageEditIcon/>
                    <span>{user.cover_path ? 'Edit' : 'Upload'} cover image</span>
                    <input
                        type="file"
                        className="absolute h-full w-full opacity-0 cursor-pointer"
                        value={data.avatar}
                        onChange={(e) => setData('cover', e.target.files[0])}
                    />
                </button>
            }
        </>
    )
}
