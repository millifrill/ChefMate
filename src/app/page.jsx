'use client';
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import RecipesBanner from './components/RecipesBanner';

const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	padding: 4rem;
	max-width: 800px;
	margin: auto;
	min-height: 100vh;
`;

export default function Home() {
	return (
		<>
			<RecipesBanner />
			<Main></Main>
		</>
	);
}
