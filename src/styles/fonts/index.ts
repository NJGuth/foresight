import localFont from "next/font/local";

export const swissFont = localFont({
    src: [
        {
            path: "./SuisseScreen-Monitor-WebTrial.woff2",
            weight: "300",
            style: "thin"
        },
        {
            path: "./SuisseScreen-Regular-WebTrial.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "./SuisseScreen-Medium-WebTrial.woff2",
            weight: "500",
            style: "medium"
        },

        {
            path: "./SuisseScreen-SemiBold-WebTrial.woff2",
            weight: "600",
            style: "semibold"
        },
        {
            path: "./SuisseScreen-Bold-WebTrial.woff2",
            weight: "700",
            style: "bold"
        },

    ],
    variable: '--font-swiss',
    display: 'swap',
    preload: true,
})