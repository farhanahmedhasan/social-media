import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import DeleteUserForm from './Partials/DeleteUserForm';

export default function Edit({mustVerifyEmail, status}) {
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
