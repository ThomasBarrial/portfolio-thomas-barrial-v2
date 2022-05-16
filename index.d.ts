declare module "*.png";

interface ISection {
    id: string;
}

interface ICollaborator {
    id: string;
    name: string;
    image: string;
    profilTitle: string;
}

interface ISocialLink {
    id: string;
    link: string;
    name?: string;
}
interface IDate {
    name: string;
    date: string;
}

interface ICollaborator {
    id: string;
    name: string;
    image: string;
    profilTitle: string;
}

interface ICollaboratorSocialLink {
    id: string;
    icon: string;
    link: string;
    userId: string;
}

interface IPartner {
    name: string;
    text: string;
    link: string;
}

interface OurTeamText {
    id: string;
    title: string;
    subtitle: string;
}

interface ILanding {
    id: string;
    websiteTitle: string;
    subtitle: string;
    websiteDescription: string;
    linkMetashop: string;
    linkWhitepaper: string;
    buttonMetaShop: string;
    buttonWhitePaper: string;
}

// interface IRoadMap {
//     id: string;
//     name: sting;
//     status: string;
//     date: string;
// }

interface IAbout {
    id: string;
    manifestoLink: string;
    text1: string;
    text2: string;
    title1: string;
    title2: string;
}

interface IPartner {
    id: string;
    name: string;
    link: string;
    text: string;
}

interface IPartnerText {
    id: string;
    title: string;
    subtitle: string;
}

interface ISocialLinkText {
    id: string;
    title: string;
    subtitle: string;
}

interface ISolution {
    id: string;
    title: string;
    text1: string;
    text2: string;
    text3: string;
    argument1: string;
    argument2: string;
    argument3: srting;
    buttonName: string;
    buttonLink: string;
}

interface IProduct {
    id: string;
    title: string;
    image: string;
    imageMobile: string;
}

interface IRoadMap {
    id: string;
    title: string;
    text: string;
}
