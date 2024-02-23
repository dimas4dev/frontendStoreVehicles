import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="flex items-center justify-center w-full">
            <p className="text-sm">© {year} - All rights reserved</p>
        </footer>
    );
}

export { Footer }