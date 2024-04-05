'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import RecipesBanner from './components/RecipesBanner';
import { Main, MainBox } from './global-styles';
import Recipes from './recipes/page';
import { useState } from 'react';
// import { theme, toggleTheme, toggleDarkMode } from './ThemeProvider';

export default function Home() {
	const [mode, setMode] = useState(false);

	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<RecipesBanner />
			<Main>
				<MainBox>
					<Recipes />
				</MainBox>
			</Main>
		</ThemeProvider>
	);
}
