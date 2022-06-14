const footerQuery = `*[_type == "footer"][0]{
    _id,
   catchPhrase,
   phoneNumber,
   email,
   photo,
   copyrights,
   socialMedia,
}`;

export default footerQuery;
