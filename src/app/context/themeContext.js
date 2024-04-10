'use client';

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { createTheme, useMediaQuery } from '@mui/material';

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
	const prefersMode = useMediaQuery('(prefers-color-scheme: dark)');
	const [mode, setMode] = useState(prefersMode);

	useEffect(() => {
		setMode(prefersMode);
	}, [prefersMode]);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: mode ? 'dark' : 'light',
				},
			}),
		[mode],
	);

	const contextValue = useMemo(() => ({ mode, setMode, theme }), [mode, theme]);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
