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
    icon: string;
    link: string;
}
interface IDate {
    name: string;
    date: string;
}

interface ICollaborator {
    name: string;
    image: string;
    profilTitle: string;
    socialLinks: ISocialLink[];
}

interface ISocialLink {
    id: string;
    icon: string;
    link: string;
    userId: string;
}

interface ISocialIcon {
    name: string;
    icon: string;
    link: string;
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

interface IRoadMap {
    id: string;
    name: sting;
    status: string;
    date: string;
}

interface IAbout {
    id: string;
    manifestoLink: string;
    text1: string;
    text2: string;
    title1: string;
    title2: string;
}
