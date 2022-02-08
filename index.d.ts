declare module "*.png";

interface ISection {
    id: string;
}

interface ICollaborator {
    name: string;
    image: string;
    profilTitle: string;
    socialLinks: ISocialLink[];
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
    icon: string;
    link: string;
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
