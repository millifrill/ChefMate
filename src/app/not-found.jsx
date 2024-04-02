'use client';

import styled from '@emotion/styled';
import { Main } from './global-styles';

export default function NotFound() {
	return (
		<Main>
			<H2>There was a problem.</H2>
			<P>We could not find the page you where looking for.</P>
		</Main>
	);
}

const H2 = styled.h1`
	font-size: 2rem;
	margin: 50px auto 20px;
`;

const P = styled.p`
	font-size: 1rem;
	margin: 10px auto;
`;
