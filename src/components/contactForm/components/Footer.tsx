import React from "react";
import Button from "../../buttons/Button";
import { useisContactFromStore } from "../../store/isContactContext.slice";

function Footer({ formStatus }: { formStatus: string }): JSX.Element {
    const { dispatchIsContact } = useisContactFromStore();
    return (
        <div className="w-full">
            <div className="text-pink text-xl mt-5 font-bold">
                {formStatus === "OK" ? (
                    "Message envoyer !!"
                ) : (
                    <p className="text-xs">{formStatus}</p>
                )}
            </div>
            {formStatus === "OK" && (
                <Button
                    onClick={() => dispatchIsContact()}
                    className="w-full mt-5"
                >
                    Ok
                </Button>
            )}
        </div>
    );
}

export default Footer;
