import {useForm} from "@inertiajs/react";

import GroupItem from "@/Components/app/GroupItem.jsx";
import TextInput from "@/Components/TextInput.jsx";

export default function Groups() {
    const {data, setData} = useForm({
        name: ""
    })

    return (
        <div className=" bg-white px-2 pt-2 border rounded ">
            <div className="px-1">
                <h2 className="text-xl font-bold mb-4">My Groups</h2>
                <TextInput
                    className="w-full"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    placeholder="Find your group"
                />
            </div>
            <div className="h-[20vh] lg:h-[calc(100vh-128px)] overflow-y-auto mt-4 pb-4">
                {0 ?
                    <p className="text-gray-400 text-center">You are not joined into any groups </p>
                    :
                    <ul>
                        <GroupItem image="https://source.unsplash.com/random" title="Laravel Devs"
                                   description="THis is some dummy text"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/>
                        <GroupItem image="https://source.unsplash.com/random" title="Vue Devs"
                                   description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devs"
                        description="This is a vue group which is almost a year old"/><GroupItem
                        image="https://source.unsplash.com/random" title="Vue Devsss"
                        description="This is a vue group which is almost a year old"/>


                    </ul>
                }
            </div>
        </div>
    )
}
