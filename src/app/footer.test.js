/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import StickyFooter from './components/Footer';

test('Check if StickyFooter component renders without error', () => {
	render(<StickyFooter />);
});

test('Check if the footer background color is correct', () => {
	render(<StickyFooter />);
	const footerElement = screen.getByTestId('footer');
	expect(footerElement).toHaveStyle({ backgroundColor: '#4c4c4c' });
});

test('Check if footer text content and styles are correct', () => {
	render(<StickyFooter />);
	const textElement = screen.getByText(/Your recipe finder./i);
	expect(textElement).toBeInTheDocument();
	expect(textElement).toHaveStyle({ color: '#d8d8d8' });
});

test('Check if the copyright text is truthy', () => {
	const { getByText } = render(<StickyFooter />);
	const copyrightElement = getByText(/Copyright © ChefMate/i);
	expect(copyrightElement).toBeTruthy();
});

test('Check if footer copyright text content and styles are correct', () => {
	render(<StickyFooter />);
	const copyrightText = screen.getByText(/Copyright © ChefMate/i);
	expect(copyrightText).toBeInTheDocument();
	expect(copyrightText).toHaveStyle({ color: '#d8d8d8' });
});

test('Check if the copyright year is correct', () => {
	render(<StickyFooter />);
	const currentYear = new Date().getFullYear();
	const copyrightElement = screen.getByText(new RegExp(currentYear.toString(), 'i'));
	expect(copyrightElement).toBeInTheDocument();
});
