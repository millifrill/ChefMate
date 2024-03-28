import Image from 'next/image';
import BannerImg from '../assets/contact.png';
import { BannerContainer, ContentWrapper, Title } from '../global-styles';

export default function ContactBanner() {
	return (
		<BannerContainer>
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
