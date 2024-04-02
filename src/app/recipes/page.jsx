'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from './../theme/theme';
import useRecipesData from '../hooks/useRecipesData';
import Search from '../components/Search';
import Filter from '../components/Filter';
import RecipeCard from '../components/RecipeCard';

export default function Recipes() {
	const [searchQuery, setSearchQuery] = useState('');
	const recipesData = useRecipesData(searchQuery);

	return (
		// <>
		<ThemeProvider theme={theme}>
			<Box
				display={'flex'}
				flexDirection={{ xs: 'column', sm: 'row' }}
				alignItems='center'
				sx={{ alignSelf: 'center' }}>
				<Filter setSearchQuery={setSearchQuery} />
				<Search setSearchQuery={setSearchQuery} sx={{ mr: { xs: 0, sm: 2 } }} />
			</Box>

			<Grid container spacing={1}>
				{recipesData.map((recipe) => (
					<Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
						<RecipeCard recipe={recipe} />
					</Grid>
				))}
			</Grid>
		</ThemeProvider>
		// </>
	);
}
