import {Head} from '@inertiajs/react';

import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import PostsCreate from "@/Components/app/PostsCreate.jsx";
import Followings from "@/Components/app/Followings.jsx";
import Groups from "@/Components/app/Groups.jsx";
import Posts from "@/Components/app/Posts.jsx";

export default function HomePage({auth, posts}) {
    return (
        <Authenticated user={auth.user}>
            <Head title="Socially"/>
            <div className="px-2 pt-4 grid gap-y-4 lg:gap-y-0 lg:gap-x-3 lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <Groups/>
                </div>

                <div className="lg:order-3 lg:col-span-3">
                    <Followings/>
                </div>

                <div className="flex flex-col lg:order-2 lg:col-span-6">
                    <PostsCreate/>
                    <Posts posts={posts.data}/>
                </div>
            </div>
        </Authenticated>
    );
}
