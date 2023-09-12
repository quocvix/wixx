/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                s454: "454px",
            },
            height: {
                custom: "580px",
                newBanner: "275px",
                notFound: "450px",
            },
        },
    },
    plugins: [],
};
