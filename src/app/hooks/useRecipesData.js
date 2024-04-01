import { useState, useEffect } from 'react';

export default function useRecipesData(searchQuery) {
	const [recipesData, setRecipesData] = useState([]);

	useEffect(() => {
		const fetchRecipesData = async () => {
			try {
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`,
				);
				const data = await response.json();
				setRecipesData(data?.meals);
				console.log(data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchRecipesData();
	}, [searchQuery]);

	return recipesData;
}
