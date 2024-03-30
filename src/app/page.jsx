'use client';

import RecipesBanner from './components/RecipesBanner';
import { Main, MainBox } from './global-styles';
import Recipes from './recipes/page';

export default function Home() {
	return (
		<>
			<RecipesBanner />
			<Main>
				<MainBox>
					<Recipes />
				</MainBox>
			</Main>
		</>
	);
}
