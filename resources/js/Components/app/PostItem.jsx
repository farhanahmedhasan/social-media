import {Disclosure} from "@headlessui/react";
import {Link} from "@inertiajs/react";

import PostAttachment from "@/Components/app/PostAttachment.jsx";
import PostReactions from "@/Components/app/PostReactions.jsx";

export default function PostItem({post}) {
    return (
        <article className="bg-white border border-gray-300 rounded p-2 shadow-sm">
            <header className="flex items-center gap-2 mb-2">
                <Link href="#">
                    <img src={post.user.avatar_path} alt={post.user.name}
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
                    <span className="text-xs text-gray-400">{post.created_at.diff_for_humans}</span>
                </div>
            </header>

            <Disclosure className="mb-2" as="div">
                {({open}) => (
                    <>
                        {!open && <div dangerouslySetInnerHTML={{__html: post.body.substring(0, 255)}}/>}
                        <Disclosure.Panel>
                            <div dangerouslySetInnerHTML={{__html: post.body}}/>
                        </Disclosure.Panel>
                        {post.body.length > 255 &&
                            <Disclosure.Button>
                                <span
                                    className="font-semibold text-blue-500 hover:underline">
                                    {open ? "See less" : "See more..."}
                                </span>
                            </Disclosure.Button>
                        }
                    </>
                )}
            </Disclosure>

            {/*attachments*/}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                {post.attachments?.map(attachment => {
                    return <PostAttachment key={attachment.id} attachment={attachment}/>
                })}
            </div>

            {/*Reactions*/}
            <PostReactions/>
        </article>
    )
}
