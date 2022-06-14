const skillsQuery = `*[_type == "skills"]{
    _id,
   category,
   skills,
}`;

export default skillsQuery;
