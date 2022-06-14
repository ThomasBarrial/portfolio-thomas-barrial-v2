import Image from "next/dist/client/image";

interface IProps {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}

function ImagesMobile({ image1, image2, image3, image4 }: IProps): JSX.Element {
    return (
        <div className="flex lg:hidden mb-52 justify-center transform -translate-y-11 w-11/12">
            <div className="">
                <Image src={image1} height={630} width={300} />
            </div>
            <div>
                <Image src={image2} height={700} width={330} />
            </div>
            <div>
                <Image src={image3} height={620} width={300} />
            </div>
            <div>
                <Image src={image4} height={700} width={330} />
            </div>
        </div>
    );
}

export default ImagesMobile;
