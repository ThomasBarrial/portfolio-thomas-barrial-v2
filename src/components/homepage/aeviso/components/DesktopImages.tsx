import Image from "next/dist/client/image";
import { useOffsetYFromStore } from "../../../store/offsetY.slice";

interface IProps {
    image1: string;
    image2: string;
}

function DesktopImages({ image1, image2 }: IProps): JSX.Element {
    const { scrollPosition } = useOffsetYFromStore();
    return (
        <div className="hidden lg:flex flex-col items-end ">
            <div style={{ transform: `translatex(-32px)` }}>
                <Image priority src={image1} height={480} width={800} />
            </div>
            <div
                className=""
                style={{
                    transform: `translateY(-${
                        (scrollPosition.offsetY - 3000) * 0.2
                    }px)`,
                }}
            >
                <Image priority src={image2} height={350} width={550} />
            </div>
        </div>
    );
}

export default DesktopImages;
