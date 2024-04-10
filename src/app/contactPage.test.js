/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import Contact from './contact/page';

test('Check if Contact component renders without error', () => {
	render(<Contact />);
});

test('Check if Contact displays correct contact information', () => {
	render(<Contact />);
	const contactInfoText = screen.getByText(/Mail your questions to: millifrill@gmail.com/i);
	expect(contactInfoText).toBeInTheDocument();
});
