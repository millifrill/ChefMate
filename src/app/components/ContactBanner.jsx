import React, { useContext } from 'react';
import Image from 'next/image';
import BannerImg from '../assets/contact.png';
import { BannerContainer, ContentWrapper, Title } from '../global-styles';
import { ThemeContext } from '../context/themeContext';

export default function ContactBanner() {
	const { theme } = useContext(ThemeContext);

	return (
		<BannerContainer
			sx={{ backgroundColor: theme.palette.background.primary }}
			data-testid='banner-container'>
			<Image
				src={BannerImg}
				alt={'Banner'}
				layout='responsive'
				objectFit='cover'
				quality={100}
			/>
			<ContentWrapper>
				<Title>Contact</Title>
			</ContentWrapper>
		</BannerContainer>
	);
}
