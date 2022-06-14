export default {
    name: "footer",
    title: "footer",
    type: "document",
    fields: [
        {
            name: "catchPhrase",
            title: "Catch Phrase",
            type: "string",
        },
        {
            name: "phoneNumber",
            title: "Phone number",
            type: "string",
        },
        {
            name: "email",
            title: "Email",
            type: "string",
        },
        {
            name: "photo",
            title: "Photo",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "copyrights",
            title: "Copyrights",
            type: "string",
        },
        {
            name: "socialMedia",
            title: "Social medias",
            type: "array",
            of: [
                {
                    name: "socialMedia",
                    title: "SocialMedia",
                    type: "object",
                    fields: [
                        {
                            name: "name",
                            title: "name",
                            type: "string",
                        },
                        {
                            name: "link",
                            title: "Link",
                            type: "string",
                        },
                    ],
                },
            ],
        },
    ],
};
