const designQuery = `*[_type == "design"] | order(place) {
    _id,
    name,
    mainImage,
}`;

export default designQuery;
