import { createContext, ReactNode, useState } from 'react';


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
        
        setIsActiveDarkMode(!isActiveDarkMode);

    }


    return (
        <DarkModeContext.Provider
            value={{isActiveDarkMode, toggleDarkMode}}
        >
            {children}
        </DarkModeContext.Provider>
    );
}