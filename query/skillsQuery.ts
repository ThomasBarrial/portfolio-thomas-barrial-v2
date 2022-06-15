const skillsQuery = `*[_type == "skills"] | order(order){
    _id,
   category,
   skills,
}`;

export default skillsQuery;
