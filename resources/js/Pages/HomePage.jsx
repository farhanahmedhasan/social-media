import {Head} from '@inertiajs/react';

import Groups from "@/Components/Groups.jsx";
import Followings from "@/Components/Followings.jsx";

export default function HomePage() {
    return (
        <>
            <Head title="Socially"/>
            <div className="grid gap-3 grid-cols-12">
                <Groups/>
                <div className="col-span-6">
                    posts
                </div>
                <Followings/>
            </div>
        </>
    );
}
