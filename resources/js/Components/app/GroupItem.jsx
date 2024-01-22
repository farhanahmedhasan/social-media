export default function GroupItem({image, title, description}) {
    return (
        <li className="flex gap-x-3 items-start cursor-pointer p-2 hover:bg-gray-100">
            <img className="shrink-0 w-10 h-10 object-cover rounded-full" src={image} alt={title}/>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </li>
    )
}
