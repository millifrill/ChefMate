'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, useMediaQuery } from '@mui/material';
// import { darkTheme, lightTheme } from '../theme/theme';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
	const prefersMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [mode, setMode] = useState(prefersMode);

	useEffect(() => {
		setMode(prefersMode);
	}, [prefersMode]);

	const theme = createTheme({
		palette: {
			mode: mode ? 'dark' : 'light',
		},
	});

	// const value = useMemo(
	// 	() => ({
	// 		mode,
	// 		setMode,
	// 		activeTheme: mode ? darkTheme : lightTheme,
	// 	}),
	// 	[darkMode],
	// );

	// return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

	return (
		<ThemeContext.Provider value={{ mode, setMode, theme }}>{children}</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
