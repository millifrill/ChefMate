import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const globalStyles = css`
	body {
		margin: 0;
		padding: 0;
		font-family: Arial, sans-serif;
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 4rem;
	margin: 0;
	min-height: 100vh;
	background-color: #222;
`;

export const MainBox = styled.main`
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	max-width: 1400px;
	margin: 0 auto;
`;

export const BannerContainer = styled.div`
	position: relative;
	width: 100%;
	margin: 0;
	background-color: #222;
`;

export const ContentWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	text-align: center;
`;

export const Title = styled.h1`
	font-size: 2rem;

	@media (min-width: 800px) {
		font-size: 3rem;
	}
	@media (min-width: 1200px) {
		font-size: 4rem;
	}
	@media (min-width: 1600px) {
		font-size: 5rem;
	}
`;
