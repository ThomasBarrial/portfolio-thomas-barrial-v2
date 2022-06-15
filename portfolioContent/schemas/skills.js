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
            name: "order",
            title: "Place in order",
            type: "number",
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
