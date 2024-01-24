import {useForm} from "@inertiajs/react";

import FollowingItem from "@/Components/app/FollowingItem.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {Disclosure} from "@headlessui/react";
import ArrowRightIcon from "@/Components/icons/ArrowRightIcon.jsx";
import GroupItem from "@/Components/app/GroupItem.jsx";

export default function Followings() {
    const {data, setData} = useForm({
        name: ""
    })

    return (
        <div className="bg-white px-2 pt-2 border rounded">
            <div className="block lg:hidden">
                <Disclosure className="mb-2" as="div">
                    {({open}) => (
                        <>
                            <Disclosure.Button className="w-full flex items-center justify-between">
                                <h2 className="text-xl font-bold">My Followings</h2>
                                <ArrowRightIcon
                                    className={`transform transition-all ${open ? 'rotate-90' : 'rotate-0'}`}/>
                            </Disclosure.Button>

                            <Disclosure.Panel className="px-1">
                                <TextInput
                                    className="w-full mt-4"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    placeholder="Find your group"
                                />
                                <div className="h-[20vh] lg:h-[calc(100vh-128px)] overflow-y-auto mt-4 pb-4">
                                    {0 ?
                                        <p className="text-gray-400 text-center">You are not following anyone yet</p>
                                        :
                                        <ul>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random"
                                                           title="Mia Malkova"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                                        </ul>
                                    }
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
            <div className="hidden lg:block">
                <div className="px-1">
                    <h2 className="text-xl font-bold mb-4">My Followings</h2>
                    <TextInput
                        name="name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="w-full"
                        placeholder="Find the user you are following"
                    />
                </div>
                <div className="h-[20vh] lg:h-[calc(100vh-128px)] overflow-y-auto mt-4 pb-4">
                    {0 ?
                        <p className="text-gray-400 text-center">You are not following anyone yet</p>
                        :
                        <ul>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Mia Malkova"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                            <FollowingItem image="https://source.unsplash.com/random" title="Jane Doe"/>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}
