import React from 'react';
import Image from 'next/image';

export default function Banner() {
	return (
		<div>
			<Image src='/banner1.jpg' alt={'Banner image'} width={500} height={500} quality={100} />
		</div>
	);
}
