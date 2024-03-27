import React from 'react';
import Image from 'next/image';
import BannerImg from '../assets/banner1.png';

export default function RecipesBanner() {
	return (
		<div style={{ position: 'relative', width: '100%' }}>
			<Image
				src={BannerImg}
				alt={'Banner image'}
				layout='responsive'
				objectFit='cover'
				quality={100}
			/>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					color: 'white',
					textAlign: 'center',
				}}>
				<h1>Recipes</h1>
			</div>
		</div>
	);
}
