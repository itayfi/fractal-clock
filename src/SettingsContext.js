import React from 'react';

const DEFAULT_SETTINGS = {
    hours: false,
    minutes: true,
    seconds: true,
    maxDepth: 8,
    showFps: false,
    color: '#5cc0ff'
}

const SettingsContext = React.createContext({});

export function SettingsProvider({children}) {
    const fromStorage = localStorage.getItem('fractalClockSettings');

    const [settings, setSettings] = React.useState(fromStorage ? JSON.parse(fromStorage) : DEFAULT_SETTINGS);

    const ctx = React.useMemo(() => {
        const processed = Object.fromEntries(Object.keys(DEFAULT_SETTINGS).map(prop => [
            prop,
            {
                value: settings[prop],
                onChange(value) {
                    setSettings(state => ({...state, [prop]: value}));
                }
            }
        ]));
        return {
            ...processed,
            raw: settings
        };
    }, [settings, setSettings]);

    React.useEffect(() => {
        localStorage.setItem('fractalClockSettings', JSON.stringify(settings));
    }, [settings]);

    return <SettingsContext.Provider value={ctx}>{children}</SettingsContext.Provider>;
};

export function useSettings() {
    return React.useContext(SettingsContext);
};