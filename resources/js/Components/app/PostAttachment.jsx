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
                <div className="relative">
                    <img src={attachment.path} alt={attachment.name} className="object-cover aspect-square"/>
                    <button className="absolute right-2 top-2 cursor-pointer bg-gray-800 hover:bg-gray-700 p-2 rounded">
                        <DownloadIcon className="text-gray-100 h-4 w-4"/>
                    </button>
                </div>
            }
            {!isImage(attachment) &&
                <div className="relative flex flex-col gap-2 items-center justify-center aspect-square bg-blue-50">
                    <DocumentIcon/>
                    <p>{attachment.name}</p>
                    <button className="absolute right-2 top-2 cursor-pointer bg-gray-800 hover:bg-gray-700 p-2 rounded">
                        <DownloadIcon className="text-gray-100 h-4 w-4"/>
                    </button>
                </div>
            }
        </>
    )
}
