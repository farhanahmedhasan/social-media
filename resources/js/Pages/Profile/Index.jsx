import {Head} from '@inertiajs/react';
import {Tab} from "@headlessui/react";

import CoverImage from "@/Pages/Profile/Partials/CoverImage.jsx";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EditIcon from "@/Components/icons/EditIcon.jsx";
import Edit from "@/Pages/Profile/Edit.jsx";
import AvatarImage from "@/Pages/Profile/Partials/AvatarImage.jsx";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const tabs = [
    {id: 'posts', name: 'Posts'},
    {id: 'about', name: 'About'},
    {id: 'photos', name: 'Photos'},
    {id: 'followers', name: 'Followers'},
    {id: 'followings', name: 'Followings'},
]

export default function Index({auth, user, mustVerifyEmail, status}) {
    const authUser = auth.user
    const isMyProfile = authUser?.id === user?.id

    return (
        <AuthenticatedLayout user={authUser}>
            <Head title="Profile"/>
            <section className="container mx-auto">
                <CoverImage isMyProfile={isMyProfile} user={user} authUser={authUser}/>

                <div className="bg-white flex justify-between pl-10 -mt-20 pb-4">
                    <div className="flex space-x-4">
                        <AvatarImage isMyProfile={isMyProfile} user={user} authUser={authUser}/>
                        <div>
                            <h2 className="text-3xl capitalize font-semibold mt-24">{user?.name}</h2>
                            <span className="text-sm font-medium mt-24">1105 Followings</span>
                        </div>
                    </div>
                    {isMyProfile &&
                        <button
                            className="flex items-center rounded space-x-2 bg-blue-500 text-white mt-20 py-2 px-6 mr-10 self-center hover:bg-blue-600">
                            <EditIcon stroke="#fff"/>
                            <span>Edit</span>
                        </button>
                    }
                </div>

                {/* Tabs */}
                <div className="border-t px-2 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex space-x-6 bg-white px-8">
                            {tabs.map(tab => {
                                if ((!isMyProfile) && (tab.id === "about")) return
                                return <Tab
                                    key={tab.id}
                                    className={({selected}) =>
                                        classNames(
                                            'pt-2.5 pb-2 font-medium focus:outline-none',
                                            selected
                                                ? 'text-blue-700 border-b-2 border-blue-500'
                                                : 'text-gray-700 border-b-2 border-transparent hover:text-gray-800'
                                        )
                                    }
                                >
                                    {tab.name}
                                </Tab>
                            })}
                        </Tab.List>

                        <Tab.Panels className="mt-4">
                            <Tab.Panel className="bg-white shadow">
                                <h1>Posts</h1>
                            </Tab.Panel>
                            {isMyProfile &&
                                <Tab.Panel className="bg-white shadow">
                                    <Edit user={authUser} mustVerifyEmail={mustVerifyEmail} status={status}/>
                                </Tab.Panel>
                            }
                            <Tab.Panel className="bg-white shadow">
                                <h1>Photos</h1>
                            </Tab.Panel>
                            <Tab.Panel className="bg-white shadow">
                                <h1>Followers</h1>
                            </Tab.Panel>
                            <Tab.Panel className="bg-white shadow">
                                <h1>Followings</h1>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
