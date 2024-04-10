'use client';

import React, { useState, useEffect, useContext } from 'react';
import { MainBox } from '@/app/global-styles';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import YouTube from 'react-youtube';
import { ThemeContext } from './../../context/themeContext';
import Checkbox from '@mui/material/Checkbox';

export default function Page({ params }) {
	const { id } = params;
	const [recipesInstructionsData, setRecipesInstructionsData] = useState(null);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		const fetchRecipesInstructionsData = async () => {
			try {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
				);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await response.json();
				setRecipesInstructionsData(data.meals[0]);
				// console.log(data.meals[0]);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchRecipesInstructionsData();
		// console.log(fetchRecipesInstructionsData);
	}, [id]);

	return (
		<MainPaper>
			<MainBox style={{ maxWidth: '800px' }}>
				{recipesInstructionsData && (
					<>
						<Box sx={{ width: '100%' }}>
							<Box>
								<Typography
									variant='h1'
									sx={{
										fontSize: '2rem',
									}}>
									{recipesInstructionsData?.strMeal}
								</Typography>
							</Box>
							<Box sx={{ width: '100%', m: '10px 0', p: 0 }}>
								<CustomPaper square={false} elevation={8} sx={{ p: 1 }}>
									<Image
										src={recipesInstructionsData.strMealThumb}
										alt={recipesInstructionsData.strMeal}
										layout='responsive'
										objectFit='cover'
										quality={100}
										width={300}
										height={300}
									/>
								</CustomPaper>
							</Box>
						</Box>
						<Box>
							<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
								<CustomPaper square={false} elevation={8}>
									<Typography variant='h5' m='20px'>
										Ingredients:
									</Typography>
									<Divider
										sx={{
											backgroundColor: theme.palette.background.primary,
											margin: '10px',
										}}
									/>
									<ul style={{ margin: '10px' }}>
										{Array.from({ length: 20 }).map((_, index) => {
											const measureKey = `strMeasure${index + 1}`;
											const measure = recipesInstructionsData[measureKey];
											const ingredientKey = `strIngredient${index + 1}`;
											const ingredient = recipesInstructionsData[ingredientKey];
											const idMeal = recipesInstructionsData.idMeal;

											if (ingredient && measure) {
												return (
													<Box
														key={`${idMeal}-${index}`}
														style={{
															margin: '20px 0px ',
														}}>
														<Checkbox
															sx={{
																width: '40px',
																height: '20px',
																backgroundColor: theme.palette.background.primary,
																'&.Mui-checked': {
																	color: theme.palette.primary.main,
																	backgroundColor:
																		theme.palette.background.primary,
																},
																'& .MuiSvgIcon-root': {
																	backgroundColor:
																		theme.palette.background.primary,
																},
															}}
														/>
														{`${measure} ${ingredient}`}
													</Box>
												);
											}
											return null;
										})}
									</ul>
								</CustomPaper>
								<CustomPaper square={false} elevation={8}>
									<Typography variant='h5' m='20px'>
										Instructions:
									</Typography>
									<Divider
										sx={{
											backgroundColor: theme.palette.background.primary,
											margin: '10px',
										}}
									/>
									<ol style={{ margin: 10, listStyle: 'none' }}>
										{recipesInstructionsData.strInstructions
											.split('\n')
											.map((instruction, index) => (
												<li
													key={`${recipesInstructionsData.idMeal}-${index}`}
													style={{
														display: 'flex',
														alignItems: 'flex-start',
														margin: '20px 0px',
													}}>
													<Checkbox
														sx={{
															backgroundColor: theme.palette.background.primary,
															width: '40px',
															height: '20px',
														}}
													/>
													<div style={{ display: 'flex', alignItems: 'flex-start' }}>
														<span style={{ marginRight: '10px' }}>{index + 1}</span>
														<span style={{ flex: 1 }}>{instruction}</span>
													</div>
												</li>
											))}
									</ol>
								</CustomPaper>
							</Stack>
						</Box>
						{recipesInstructionsData.strYoutube && (
							<Box sx={{ mt: 2 }}>
								<CustomPaper square={false} elevation={8}>
									<YouTube
										videoId={recipesInstructionsData.strYoutube.split('v=')[1]}
										opts={{ width: '100%' }}
									/>
								</CustomPaper>
							</Box>
						)}
					</>
				)}
			</MainBox>
		</MainPaper>
	);
}

const MainPaper = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: 'left',
	backgroundColor: theme.palette.background.primary,
	color: theme.palette.text.primary,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	padding: '30px',
	margin: 0,
	minHeight: '100vh',
	borderRadius: 0,
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
	minWidth: 300,
	padding: '10px',
	backgroundColor: theme.palette.background.primary,
	color: theme.palette.text.primary,
	textAlign: 'left',
}));
