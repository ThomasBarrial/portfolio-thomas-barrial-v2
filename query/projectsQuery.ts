const projectsQuery = `*[_type == "projects"]{
    _id,
    projectName,
    projectNumber,
    projectType,
    duration,
    technicalStack,
    description,
    description2,
    images,
}`;

export default projectsQuery;
