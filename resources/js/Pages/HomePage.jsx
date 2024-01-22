import {Head} from '@inertiajs/react';

import Followings from "@/Components/Followings.jsx";
import Groups from "@/Components/Groups.jsx";
import Posts from "@/Components/Posts.jsx";
import PostsCreate from "@/Components/PostsCreate.jsx";

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
