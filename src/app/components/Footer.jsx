'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Copyright() {
	return (
		<Typography variant='body2' color='#d8d8d8'>
			{'Copyright © '}
			ChefMate {new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default function StickyFooter() {
	return (
		<Box
			component='footer'
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: '#4c4c4c',
				textAlign: 'center',
			}}
			data-testid='footer'>
			<Container>
				<Typography variant='body1' color='#d8d8d8'>
					Your recipe finder.
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}
