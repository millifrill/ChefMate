import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import Link from 'next/link';
import { ThemeContext } from '../context/themeContext';

export default function RecipeCard({ recipe }) {
	const { theme } = useContext(ThemeContext);

	return (
		<Link href={`/recipes/${recipe?.idMeal}`}>
			<Card
				elevation={8}
				sx={{
					width: 300,
					backgroundColor: theme.palette.background.default,
					margin: 'auto',
				}}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='160'
						width='140'
						image={recipe?.strMealThumb}
						alt={recipe?.strMeal}
					/>
					<CardContent
						sx={{
							backgroundColor: theme.palette.background.primary,
							color: theme.palette.text.primary,
						}}>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							color='inherit'
							sx={{
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
								color: theme.palette.text.primary,
							}}>
							{recipe?.strMeal}
						</Typography>
						<Box display='flex' justifyContent='space-between'>
							<Typography
								variant='body2'
								marginRight={'15px'}
								sx={{ color: theme.palette.text.primary }}>
								{recipe?.strCategory || 'No category'}
							</Typography>
							<Typography
								variant='body2'
								color='inherit'
								sx={{
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
									color: theme.palette.text.primary,
								}}>
								{recipe?.strTags || 'No tags'}
							</Typography>
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
}
