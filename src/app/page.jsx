'use client';

import RecipesBanner from './components/RecipesBanner';
import { Main } from './global-styles';
import RecipeCard from './components/RecipeCard';

export default function Home() {
	return (
		<>
			<RecipesBanner />
			<Main>
				<RecipeCard />
			</Main>
		</>
	);
}
