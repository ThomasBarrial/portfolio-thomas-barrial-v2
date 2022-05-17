module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            margin: {
                "30px": "30px",
            },
            colors: {
                darkBlue: "#00253E",
                lightBlue: "#00FFFF",
                ultraLightBlue: "#99FFFC",
                smoothBlue: "#3A81AD",
                blue: "#04A7F0",
                hardBlue: "#174B75",
                white: "#F8F5F1",
                purple: "#9658E4",
                green: "#38A795",
            },
            maxWidth: {
                content: "1000px",
            },
            minHeight: {
                container: "520px",
                textpartner: "120px",
            },
            width: {
                line: "0.1rem",
                section3: "89.5%",
                people: "11rem",
                92: "93%",
            },
            inset: {
                dot: "4.9rem",
            },
            height: {
                header: "28rem",
                line: "1px",
                footer: "32rem",
                roadMap: "40rem",
            },
            boxShadow: {
                container: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                contactForm: "-20px 4px 20px rgba(0, 0, 0, 0.15);",
            },
            fontFamily: {
                roboto: ["Roboto Condensed", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
            screens: {
                lg: "1400px",
                // => @media (min-width: 1080px) { ... }
            },
            animation: {
                fadeIn: "fadeIn ease-in-out 2s",
                ping: "fade 0.8s infinite",
                fadeOut: "fadeOut ease-out 1s",
                fadeBg: "fadeBg ease-in-out 2s",
                fadeFast: "fadeIn ease-in-out 0.5s",
                scaleUp: "scaleUp ease-in 0.5s",
                rotateInfinite: "rotate linear infinite 5s",
            },
            keyframes: {
                rotate: {
                    "0%": { rotate: "0deg" },
                    "100%": { rotate: "360deg" },
                },
                scaleUp: {
                    "0%": { scale: 0 },
                    "100%": { scale: 100 },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                fade: {
                    "0%": { opacity: 0.5 },
                    "100%": { opacity: 1 },
                },
                fadeOut: {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
                fadeBg: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 0.05 },
                },
            },
            fontSize: {
                xxs: "0.6rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
