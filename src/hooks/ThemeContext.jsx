'use client'

import dynamic from 'next/dynamic'
import { createContext, useEffect, useMemo, useState } from 'react'


const getInitialTheme = () => {
    if (window?.localStorage) {
        const storedPrefs = window.localStorage.getItem('color-theme')
        if (storedPrefs === 'light' || storedPrefs === 'dark') {
            return storedPrefs
        }

        const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
        if (userMedia.matches) {
            return 'dark'
        }
    }

    return 'light'
}

export const ThemeContext = createContext(null)

const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState < Theme > (getInitialTheme())

    const rawSetTheme = (rawTheme) => {
        const root = window.document.documentElement
        const isDark = rawTheme === 'dark'

        root.classList.remove(isDark ? 'light' : 'dark')
        root.classList.add(rawTheme)

        localStorage.setItem('color-theme', rawTheme)
        localStorage.setItem('lang', 'en')
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme])

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default dynamic(() => Promise.resolve(ThemeProvider), { ssr: false })
