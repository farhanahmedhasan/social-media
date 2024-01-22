import {useForm} from "@inertiajs/react";

import GroupItem from "@/Components/GroupItem.jsx";
import TextInput from "@/Components/TextInput.jsx";

export default function Groups() {
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
                    placeholder="Find your group"
                />
            </div>
            <div className="py-8">
                {0 ?
                    <p className="text-gray-400 text-center">You are not joined into any groups </p>
                    :
                    <ul>
                        <GroupItem image="https://source.unsplash.com/random" title="Laravel Devs"
                                   description="THis is some dummy text"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                    </ul>
                }
            </div>
        </>
    )
}
