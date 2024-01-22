const postsData = [
    {
        id: 1,
        user: {
            id: 1,
            name: "Jane Doe",
            avatar: "https://source.unsplash.com/random"
        },
        group: null,
        body: `<p>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Let sheets
                </p>
                <p>
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>`,
        created_at: '2023-11-19 15:12'
    },
    {
        id: 2,
        user: {
            id: 1,
            name: "Jhon Doe",
            avatar: "https://source.unsplash.com/random"
        },
        group: {
            id: 1,
            name: "Laravel Developers"
        },
        attachments: [
            {
                id: 1,
                name: "test.png",
                path: "https://source.unsplash.com/random",
                mime: "image/png"
            },
            {
                id: 2,
                name: "test2.png",
                path: "https://source.unsplash.com/random",
                mime: "image/png"
            },
            {
                id: 3,
                name: "test2.doc",
                path: "#",
                mime: "application/msword"
            }
        ],
        body: `<p>
                    Lorem Ipsum is simply dummy text of the printing
                    and <strong>typesetting</strong> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                </p>
                <p>
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.containing Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>`,
        created_at: '2022-11-19 15:12'
    }
]

export default postsData
