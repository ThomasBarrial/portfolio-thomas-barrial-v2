interface IHeroBanner {
    _id: string;
    availableDate: string;
    myName: string;
    profilTitle: string;
}

interface IAboutMe {
    _id: string;
    value: string;
}
interface IProjects {
    _id: string;
    description: string;
    description2: string;
    duration: string;
    images: string[];
    projectName: string;
    projectNumber: string;
    projectType: string;
    technicalStack: string[];
}

interface IDesign {
    _id: string;
    mainImage: string;
    name: tring;
}

interface ISkill {
    _id: string;
    category: string;
    skills: string[];
}

interface IFooter {
    _id: string;
    catchPhrase: string;
    copyrights: string;
    email: string;
    phoneNumber: string;
    photo: string;
    socialMedia: ISocialMedia[];
}

interface ISocialMedia {
    _key: string;
    _type: string;
    link: string;
    name: sting;
}
