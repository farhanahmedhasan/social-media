import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {Head} from '@inertiajs/react';

export default function Edit({auth, mustVerifyEmail, status}) {
    return (
        <div className="space-y-6 py-10 sm:px-6 lg:px-8">
            <div className="p-4 shadow rounded sm:p-8">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />
            </div>

            <div className="p-4 shadow rounded sm:p-8">
                <UpdatePasswordForm className="max-w-xl"/>
            </div>

            <div className="p-4 shadow rounded sm:p-8">
                <DeleteUserForm className="max-w-xl"/>
            </div>
        </div>

    );
}
