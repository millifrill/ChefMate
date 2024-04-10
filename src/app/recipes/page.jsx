'use client';

import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import breakpointsTheme from './../theme/theme';
import useRecipesData from '../hooks/useRecipesData';
import Search from '../components/Search';
import Filter from '../components/Filter';
import RecipeCard from '../components/RecipeCard';
import { Typography } from '@mui/material';

export default function Recipes() {
	const [searchQuery, setSearchQuery] = useState('');
	const { recipesData, errorMessage } = useRecipesData(searchQuery);

	return (
		<ThemeProvider theme={breakpointsTheme}>
			<Box
				display={'flex'}
				flexDirection={{ xs: 'column', sm: 'row' }}
				alignItems='center'
				sx={{ alignSelf: 'center' }}>
				<Filter setSearchQuery={setSearchQuery} sx={{ ml: { xs: 0, sm: 1, md: 1, lg: 1 } }} />
				<Search setSearchQuery={setSearchQuery} sx={{ mr: { xs: 0, sm: 1, md: 1, lg: 1 } }} />
			</Box>

			{errorMessage ? (
				<Box>
					<Typography sx={{ margin: 'auto', textAlign: 'center' }}>{errorMessage}</Typography>
				</Box>
			) : (
				<Grid container spacing={2}>
					{recipesData.map((recipe) => (
						<Grid item key={recipe?.idMeal} xs={12} sm={6} md={4} lg={3}>
							<RecipeCard recipe={recipe} />
						</Grid>
					))}
				</Grid>
			)}
		</ThemeProvider>
	);
}
