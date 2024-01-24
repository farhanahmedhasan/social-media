import {Head} from '@inertiajs/react';

import Followings from "@/Components/app/Followings.jsx";
import Groups from "@/Components/app/Groups.jsx";
import Posts from "@/Components/app/Posts.jsx";
import PostsCreate from "@/Components/app/PostsCreate.jsx";

export default function HomePage() {
    return (
        <>
            <Head title="Socially"/>
            <div className="grid gap-3 lg:grid-cols-12 px-2 pt-4">
                <div className="lg:col-span-3">
                    <Groups/>
                </div>

                <div className="lg:order-3 lg:col-span-3">
                    <Followings/>
                </div>

                <div className="lg:order-2 lg:col-span-6">
                    <PostsCreate/>
                    <Posts/>
                </div>
            </div>
        </>
    );
}
