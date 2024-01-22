import {Head} from '@inertiajs/react';

import Followings from "@/Components/app/Followings.jsx";
import Groups from "@/Components/app/Groups.jsx";
import Posts from "@/Components/app/Posts.jsx";
import PostsCreate from "@/Components/app/PostsCreate.jsx";

export default function HomePage() {
    return (
        <>
            <Head title="Socially"/>
            <div className="grid gap-3 grid-cols-12">
                <div className="col-span-3 py-6 px-3">
                    <Groups/>
                </div>

                <div className="col-span-6 py-6 px-3">
                    <PostsCreate/>
                    <Posts/>
                </div>

                <div className="col-span-3  py-6 px-3">
                    <Followings/>
                </div>

            </div>
        </>
    );
}
