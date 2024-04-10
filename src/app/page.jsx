'use client';

import RecipesBanner from './components/RecipesBanner';
import { MainBox } from './global-styles';
import Recipes from './recipes/page';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Home() {
	return (
		<>
			<RecipesBanner />
			<MainPaper>
				<MainBox>
					<Recipes />
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
