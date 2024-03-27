import React from 'react';
import Image from 'next/image';
import BannerImg from '../assets/contact.png';

export default function ContactBanner() {
	return (
		<div style={{ position: 'relative', width: '100%' }}>
			{/* <img src={BannerImg} alt={'Banner'} style={{ width: '100%', objectFit: 'cover' }} /> */}
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
				<h1>Contact</h1>
			</div>
		</div>
	);
}
