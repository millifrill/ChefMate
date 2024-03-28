'use client';

import styled from '@emotion/styled';
import { Main } from './global-styles';

export default function NotFound() {
	return (
		<Main>
			<H2>There was a problem.</H2>
			<p>We could not find the page you where looking for.</p>
		</Main>
	);
}

const H2 = styled.h1`
	font-size: 2rem;
	margin-top: 50px;
	margin-bottom: 20px;
`;
