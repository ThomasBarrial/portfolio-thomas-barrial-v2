import Image from "next/dist/client/image";

interface IProps {
    image1: string;
    image2: string;
}

function MobileImage({ image1, image2 }: IProps): JSX.Element {
    return (
        <div className="flex lg:hidden transform -translate-y-40  mt-16 sm:mt-0 flex-col items-end w-11/12">
            <div>
                <Image priority src={image1} height={480} width={800} />
            </div>
            <div className="transform -translate-y-20 w-10/12">
                <Image priority src={image2} height={350} width={550} />
            </div>
        </div>
    );
}

export default MobileImage;
