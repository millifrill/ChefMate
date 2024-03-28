import Image from 'next/image';
import BannerImg from '../assets/recipes.png';
import { BannerContainer, ContentWrapper, Title } from '../global-styles';

export default function RecipesBanner() {
	return (
		<BannerContainer>
			<Image
				src={BannerImg}
				alt={'Banner image'}
				layout='responsive'
				objectFit='cover'
				quality={100}
			/>
			<ContentWrapper>
				<Title>Recipes</Title>
			</ContentWrapper>
		</BannerContainer>
	);
}
