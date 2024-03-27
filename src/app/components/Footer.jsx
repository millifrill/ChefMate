'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary'>
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
				backgroundColor: 'grey',
				// backgroundColor: (theme) =>
				// 	theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
			}}>
			<Container maxWidth='sm'>
				<Typography variant='body1'>Lorum isum.</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}
