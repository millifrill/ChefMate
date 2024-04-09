'use client';

import React from 'react';
import ThemeContextProvider from './themeContext';
import ComponentWrapper from './ComponentWrapper';

export default function ContextProviders({ children }) {
	return (
		<ThemeContextProvider>
			<ComponentWrapper>{children}</ComponentWrapper>
		</ThemeContextProvider>
	);
}
