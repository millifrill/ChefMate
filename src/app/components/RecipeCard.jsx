import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export default function RecipeCard({ recipe }) {
	return (
		<Card
			sx={{
				width: 300,
				backgroundColor: '#000',
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
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						color='#fff'
						sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
						{recipe?.strMeal}
					</Typography>
					<Box display='flex' justifyContent='space-between'>
						<Typography variant='body2' color='#fff' marginRight={'15px'}>
							{recipe?.strCategory || 'No category'}
						</Typography>
						<Typography
							variant='body2'
							color='#fff'
							sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
							{recipe?.strTags || 'No tags'}
						</Typography>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
