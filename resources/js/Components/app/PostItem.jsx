import {Disclosure} from "@headlessui/react";
import {Link} from "@inertiajs/react";

export default function PostItem({post}) {
    return (
        <article className="bg-white border border-gray-300 rounded p-2 shadow-sm">
            <header className="flex items-center gap-2 mb-2">
                <Link href="#">
                    <img src={post.user.avatar} alt={post.user.name}
                         className="h-12 w-12 rounded-full object-cover border-2 hover:border-blue-500"/>
                </Link>
                <div>
                    <div className="flex">
                        <Link href="#">
                            <h4 className="font-bold hover:underline">{post.user.name}</h4>
                        </Link>
                        {post.group && <span className="font-bold block px-3"> > </span>}
                        <Link href="#">
                            <h4 className="font-bold hover:underline">{post.group?.name}</h4>
                        </Link>
                    </div>
                    <span className="text-xs text-gray-400">{post.created_at}</span>
                </div>
            </header>

            <div>
                <Disclosure>
                    {({open}) => (
                        <>
                            {!open && <div dangerouslySetInnerHTML={{__html: post.body.substring(0, 255)}}/>}
                            <Disclosure.Panel>
                                <div dangerouslySetInnerHTML={{__html: post.body}}/>
                            </Disclosure.Panel>
                            <Disclosure.Button>
                                <span
                                    className="font-semibold text-blue-500 hover:underline">{open ? "See less" : "See more..."}</span>
                            </Disclosure.Button>
                        </>
                    )}
                </Disclosure>
            </div>
        </article>
    )
}
