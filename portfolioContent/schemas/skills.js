export default {
    name: "skills",
    title: "skills",
    type: "document",
    fields: [
        {
            name: "category",
            title: "Category",
            type: "string",
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
