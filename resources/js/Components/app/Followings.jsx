import {useForm} from "@inertiajs/react";

import FollowingItem from "@/Components/app/FollowingItem.jsx";
import TextInput from "@/Components/TextInput.jsx";

export default function Followings() {
    const {data, setData} = useForm({
        name: ""
    })

    return (
        <>
            <div className="px-1">
                <h2 className="text-2xl font-bold mb-4">My Groups</h2>
                <TextInput
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="w-full"
                    placeholder="Find the user you are following"
                />
            </div>
            <div className="py-8">
                {0 ?
                    <p className="text-gray-400 text-center">You are not following anyone</p>
                    :
                    <ul>
                        <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                        <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                    </ul>
                }
            </div>
        </>
    )
}
