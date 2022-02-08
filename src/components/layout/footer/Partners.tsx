import React from "react";
import partners from "../../../data/homepage/partners/partners";
import SlideUp from "../../animated/SlideUp";

function Partners(): JSX.Element {
    return (
        <div>
            <SlideUp duration={1.2} className="font-bold">
                Our partners
            </SlideUp>
            <SlideUp duration={1.8}>
                {partners.map((item) => (
                    <div className="my-1" key={item.name}>
                        <a
                            className="text-sm"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <p className="lowercase underline">{item.name}</p>
                        </a>
                    </div>
                ))}
            </SlideUp>
        </div>
    );
}

export default Partners;
