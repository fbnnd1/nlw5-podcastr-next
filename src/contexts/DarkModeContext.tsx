import { createContext, ReactNode, useEffect, useState } from 'react';


type DarkModeContextData = {
    isActiveDarkMode:boolean;
    toggleDarkMode: () => void;
};

type DarkModeContextProviderProps = {
    children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeContextData);

export function DarkModeContextProvider( {children}:DarkModeContextProviderProps ) {

    const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);

    function toggleDarkMode() {
        
        localStorage.setItem("podcastr:darkMode",String(!isActiveDarkMode));
        
        setIsActiveDarkMode(!isActiveDarkMode);

    }

    useEffect(() => {

        const activeDarkMode = localStorage.getItem("podcastr:darkMode");

        if ((activeDarkMode) && (activeDarkMode == "true")) {
            setIsActiveDarkMode(true);
        }

    }, []);

    return (
        <DarkModeContext.Provider
            value={{isActiveDarkMode, toggleDarkMode}}
        >
            {children}
        </DarkModeContext.Provider>
    );
}