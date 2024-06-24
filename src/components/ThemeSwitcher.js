import React, { useState, useEffect } from 'react';
import { CiTextAlignCenter } from "react-icons/ci";
const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    return (
        <div className="flex p-4 space-x-2">
            <button className="wg-button">
            <CiTextAlignCenter />
            </button>
            <button className="wg-button">
                00 자
            </button>
            <button className="wg-button">
                가
            </button>
            <button
                onClick={toggleDarkMode}
                className="wg-button"
            >
                {darkMode ? '🌙' : '🌓'}
            </button>
        </div>
    );
};

export default ThemeSwitcher;
