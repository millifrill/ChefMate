'use client';
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import ContactBanner from './../components/ContactBanner';

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

export default function Contact() {
	return (
		<>
			<ContactBanner />
			<Main></Main>
		</>
	);
}
