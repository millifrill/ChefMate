'use client';

import React, { useState, useEffect } from 'react';
import { Main, MainBox } from '@/app/global-styles';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import theme from '../../theme/theme';
import { ThemeProvider } from '@emotion/react';
import YouTube from 'react-youtube';

export default function Page({ params }) {
	const { id } = params;
	const [recipesInstructionsData, setRecipesInstructionsData] = useState(null);

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
				console.log(data.meals[0]);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchRecipesInstructionsData();
		console.log(fetchRecipesInstructionsData);
	}, [id]);

	return (
		<ThemeProvider theme={theme}>
			<Main>
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
									<CustomPaper square={false} elevation={3} sx={{ p: 1 }}>
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
									<CustomPaper square={false} elevation={3}>
										<Typography variant='h5' m='20px'>
											Ingredients:
										</Typography>
										<Divider sx={{ backgroundColor: '#222', margin: '10px' }} />
										<ul style={{ margin: '10px' }}>
											{Array.from({ length: 20 }).map((_, index) => {
												const measureKey = `strMeasure${index + 1}`;
												const measure = recipesInstructionsData[measureKey];
												const ingredientKey = `strIngredient${index + 1}`;
												const ingredient = recipesInstructionsData[ingredientKey];

												if (ingredient && measure) {
													return (
														<Box
															key={index}
															style={{
																margin: '20px',
															}}>
															<input
																type='checkbox'
																style={{ marginRight: '10px' }}
															/>
															{`${measure} ${ingredient}`}
														</Box>
													);
												}
												return null;
											})}
										</ul>
									</CustomPaper>
									<CustomPaper square={false} elevation={3}>
										<Typography variant='h5' m='20px'>
											Instructions:
										</Typography>
										<Divider sx={{ backgroundColor: '#222', margin: '10px' }} />
										<ol style={{ margin: 10, padding: '10px', listStyle: 'none' }}>
											{recipesInstructionsData.strInstructions
												.split('\n')
												.map((instruction, index) => (
													<li
														key={index}
														style={{
															display: 'flex',
															alignItems: 'flex-start',
															marginBottom: '25px',
														}}>
														<input type='checkbox' style={{ margin: '5px' }} />
														<div
															style={{ display: 'flex', alignItems: 'flex-start' }}>
															<span style={{ marginRight: '10px' }}>
																{index + 1}
															</span>
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
									<CustomPaper square={false} elevation={3}>
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
			</Main>
		</ThemeProvider>
	);
}

// const PaperBox = styled(Paper)(({ theme }) => ({
// 	minWidth: 200,
// 	padding: theme.spacing(3),
// 	...theme.typography.body2,
// 	textAlign: 'left',
// 	backgroundColor: theme.palette.background.primary,
// 	color: theme.palette.text.primary,
// }));

const CustomPaper = styled(Paper)(({ theme }) => ({
	minWidth: 300,
	padding: '10px',
	backgroundColor: 'black',
	color: 'white',
	textAlign: 'left',
}));
