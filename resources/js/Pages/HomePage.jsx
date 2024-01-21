import {Head} from '@inertiajs/react';

import Group from "@/Components/Group.jsx";

export default function HomePage() {
    return (
        <>
            <Head title="Socially"/>
            <div className="grid gap-3 grid-cols-12">
                <Group/>
                <div className="col-span-6">Posts</div>
                <div className="col-span-3">Users i am following</div>
            </div>
        </>
    );
}
