module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                container: "0px 10px 20px rgba(0, 0, 0, 0.25)",
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
