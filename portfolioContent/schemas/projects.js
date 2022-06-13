export default {
    name: "projects",
    title: "projects",
    type: "document",
    fields: [
        {
            name: "projectName",
            title: "Project Name",
            type: "string",
        },
        {
            name: "projectNumber",
            title: "Project Number",
            type: "string",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
        },
        {
            name: "duration",
            title: "Duration",
            type: "string",
        },
        {
            name: "technicalStack",
            title: "Technical Stack",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "description2",
            title: "Description2",
            type: "string",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
        },
    ],
};
