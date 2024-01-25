import {Head} from '@inertiajs/react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Index({auth}) {
    const user = auth.user
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Profile"/>
            <section className="py-12">
                {/* Cover */}
                <p>Hi there</p>
                {/* Profile */}

                {/* Tabs */}
            </section>
        </AuthenticatedLayout>
    );
}
