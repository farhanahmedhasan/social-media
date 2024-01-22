export default function FollowingItem({image, title}) {
    return (
        <li className="flex gap-x-3 items-center cursor-pointer p-2 hover:bg-gray-100">
            <img className="shrink-0 w-8 h-8 object-cover rounded-full" src={image} alt={title}/>
            <h3 className="font-bold">{title}</h3>
        </li>
    )
}
