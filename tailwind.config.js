export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
        colors: {
            primary: "#1a1a2e",
            secondary: "#e94560",
            accent: "#0f3460",
            light: "#f8f9fa",
        },
        animation: {
            "fade-in": "fadeIn 0.5s ease-in-out",
            "slide-up": "slideUp 0.3s ease-out",
            "pulse-slow": "pulse 3s infinite",
            },
        },
    },
    plugins: [],
};