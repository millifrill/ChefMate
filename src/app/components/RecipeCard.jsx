import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export default function RecipeCard() {
	return (
		<Card sx={{ maxWidth: 345, backgroundColor: '#000' }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image='/static/images/cards/contemplative-reptile.jpg'
					alt='green iguana'
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div' color='#fff'>
						Pasta with salmon
					</Typography>
					<Box display='flex' justifyContent='space-between'>
						<Typography variant='body2' color='#fff'>
							30 min
						</Typography>
						<Typography variant='body2' color='#fff'>
							Fisk
						</Typography>
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
