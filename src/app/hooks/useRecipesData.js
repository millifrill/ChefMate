'use client';

import { useState, useEffect } from 'react';

export default function useRecipesData(searchQuery) {
	const [recipesData, setRecipesData] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchRecipesData = async () => {
			try {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
				);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				const data = await response.json();
				if (!data?.meals?.length) {
					setErrorMessage(
						'No recipes were found for your search. Try using other keywords or the filter.',
					);
					setRecipesData([]);
				} else {
					setErrorMessage(null);
					setRecipesData(data?.meals);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchRecipesData();
	}, [searchQuery]);

	return { recipesData, errorMessage };
}
