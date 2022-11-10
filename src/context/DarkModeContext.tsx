import React, { createContext, ReactNode, useContext, useState } from 'react'

interface DarkModeContextProviderProps {
    children: ReactNode
}

interface DarkModeProvider {
    darkMode: boolean
    handleSetDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeProvider>({ darkMode: false, handleSetDarkMode: () => {} })

export function useDarkMode () {
    return (
        useContext(DarkModeContext)
    )
}

export function DarkModeContextProvider({ children }: DarkModeContextProviderProps) {
    const [ darkMode, setDarkMode ] = useState(false)

    function handleSetDarkMode () {
        setDarkMode(darkMode => !darkMode)
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, handleSetDarkMode }}>
            {children}
        </DarkModeContext.Provider>
  )
}