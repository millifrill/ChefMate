'use client';

import ContactBanner from './../components/ContactBanner';
import { MainBox } from '../global-styles';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Contact() {
	return (
		<>
			<ContactBanner />
			<MainPaper>
				<MainBox>
					<Typography>Mail your questions to: millifrill@gmail.com</Typography>
				</MainBox>
			</MainPaper>
		</>
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
