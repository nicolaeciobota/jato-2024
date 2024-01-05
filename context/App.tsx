'use client';

import React from 'react';

export const AppContext = React.createContext<any>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<string>('light');

    const themeHandler = () => {
        setTheme((pre: string) => {
            const mode = pre === 'dark' ? 'light' : 'dark';
            document.getElementsByTagName('body')[0].className = mode;
            return mode;
        })
    }

    return (
        <AppContext.Provider
            value={{
                themeHandler,
                theme
            }}
        >
            {children}
        </AppContext.Provider>
    );
}