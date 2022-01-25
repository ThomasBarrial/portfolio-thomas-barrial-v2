declare module "*.png";

interface ISection {
    id: string;
    bg: string;
    Component?: (data: ISection | null) => JSX.Element;
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
