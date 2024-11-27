'use client'
import { useEffect, useState } from "react"
import { SunIcon } from "./icons/SunIcon"
import { MoonIcon } from "./icons/MoonIcon"

export const ToggleTheme = () => {

    const [darkTheme, setDarkTheme] = useState('corporate')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme')
        setDarkTheme(() => savedTheme || 'corporate')
        document.documentElement.setAttribute('data-theme', savedTheme || 'corporate');
    }, [])

    const toggleTheme = () => {
        const newTheme = darkTheme === 'corporate' ? 'forest' : 'corporate';
        setDarkTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    }
    return (
        <label className="flex items-center cursor-pointer gap-2">
            <SunIcon />
            <input
                type="checkbox"
                value="synthwave"
                checked={darkTheme == 'forest'}
                className="toggle toggle-xs md:toggle-md theme-controller" onChange={toggleTheme}
            />
            <MoonIcon />
        </label>
    )
}