'use client';

import ContactBanner from './../components/ContactBanner';
import { Main, MainBox } from '../global-styles';
import Typography from '@mui/material/Typography';

export default function Contact() {
	return (
		<>
			<ContactBanner />
			<Main>
				<MainBox>
					<Typography>Mail your questions to: millifrill@gmail.com</Typography>
				</MainBox>
			</Main>
		</>
	);
}
