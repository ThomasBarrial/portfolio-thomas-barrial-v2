const heroBannerQuery = `*[_type == "heroBanner"]{
    _id,
    myName,
    profilTitle,
    availableDate, 
}`;

export default heroBannerQuery;
