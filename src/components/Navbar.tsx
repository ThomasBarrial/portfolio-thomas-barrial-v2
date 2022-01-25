import React from "react";
import navbarLinks from "../data/navbar";
import Link from "next/link";

function Navbar(): JSX.Element {
    return (
        <div className="text-pink animate-fadeIn flex flex-col lg:flex-row z-10">
            {navbarLinks.map((item) => {
                return (
                    <div key={item.name}>
                        <Link href={item.link} passHref>
                            <p className="my-1 lg:my-2 lg:mr-10 cursor-pointer transform hover:scale-105">
                                {item.name}
                            </p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Navbar;
