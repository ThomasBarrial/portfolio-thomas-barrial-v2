const heroBannerQuery = `*[_type == "heroBanner"][0]{
    _id,
    myName,
    profilTitle,
    availableDate, 
}`;

export default heroBannerQuery;
