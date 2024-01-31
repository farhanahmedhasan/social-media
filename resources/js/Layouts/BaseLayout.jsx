import {Toaster} from "sonner";

export default function BaseLayout({children}) {
    return (
        <div>
            {children}
            <Toaster
                closeButton={true}
                richColors={true}
                toastOptions={{
                    duration: 5000,
                }}
            />
        </div>
    );
};
