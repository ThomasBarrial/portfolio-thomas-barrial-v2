import React, { Dispatch, SetStateAction } from "react";

interface IProps {
    isRequired: boolean;
    setName: Dispatch<SetStateAction<string>>;
    setMail: Dispatch<SetStateAction<string>>;
    setMessage: Dispatch<SetStateAction<string>>;
}

function Inputs({
    isRequired,
    setName,
    setMail,
    setMessage,
}: IProps): JSX.Element {
    return (
        <div>
            <label className="font-bold flex flex-col mt-10">
                <input
                    className="text-ms border-b bg-transparent border-pink rounded-sm py-2 focus:outline-none"
                    placeholder="Noms"
                    type="text"
                    name="user_name"
                    onChange={(e) => setName(e.target.value)}
                />
                {isRequired && (
                    <p className="text-xs mt-1 text-red-500">
                        Ce champs est obligatoire *
                    </p>
                )}
            </label>
            <label className="font-bold flex flex-col mt-8">
                <input
                    className="text-ms border-b bg-transparent border-pink rounded-sm py-2 focus:outline-none"
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    onChange={(e) => setMail(e.target.value)}
                />
                {isRequired && (
                    <p className="text-xs mt-1 text-red-500">
                        Ce champs est obligatoire *
                    </p>
                )}
            </label>
            <label className="font-bold flex flex-col mt-8">
                <textarea
                    className="mt-2 h-32 text-ms border bg-transparent border-pink rounded-sm p-2 focus:outline-none"
                    name="message"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                />
                {isRequired && (
                    <p className="text-xs mt-1 text-red-500">
                        Ce champs est obligatoire *
                    </p>
                )}
            </label>
            <input
                className="mt-8 w-full text-ms bg-transparent border  border-pink rounded-sm p-2 focus:outline-none"
                type="submit"
                value="Send"
            />
        </div>
    );
}

export default Inputs;
