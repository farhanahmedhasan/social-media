import DocumentIcon from "@/Components/icons/DocumentIcon.jsx";
import DownloadIcon from "@/Components/icons/DownloadIcon.jsx";

export default function PostAttachment({attachment}) {
    function isImage(attachment) {
        const mime = attachment.mime.split('/')[0]
        return mime.toLowerCase() === 'image'
    }

    return (
        <>
            {isImage(attachment) &&
                <div className="relative group">
                    <img src={attachment.path} alt={attachment.name} className="object-cover aspect-square"/>
                    <button
                        className="opacity-0 absolute right-2 top-2 cursor-pointer bg-gray-800 p-2 rounded transition-all hover:bg-gray-900 group-hover:opacity-100">
                        <DownloadIcon className="text-gray-100 h-4 w-4"/>
                    </button>
                </div>
            }
            {!isImage(attachment) &&
                <div className="group relative flex flex-col gap-2 items-center justify-center bg-blue-50">
                    <DocumentIcon/>
                    <p className="text-sm">{attachment.name}</p>
                    <button
                        className="opacity-0 absolute right-2 top-2 cursor-pointer bg-gray-800 p-2 rounded transition-all hover:bg-gray-900 group-hover:opacity-100">
                        <DownloadIcon className="text-gray-100 h-4 w-4"/>
                    </button>
                </div>
            }
        </>
    )
}
