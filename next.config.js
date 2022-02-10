/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withImages = require("next-images");
module.exports = withImages({
    fileExtensions: ["jpg", "jpeg", "png", "gif", "webp", "svg"],
    reactStrictMode: true,
    images: {
        disableStaticImages: true,
        domains: ["firebasestorage.googleapis.com"],
    },
});
