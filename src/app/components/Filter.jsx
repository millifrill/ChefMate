'use client';

import React, {  useContext } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeContext } from '../context/themeContext';

export default function Filter({ setSearchQuery }) {
	const { theme } = useContext(ThemeContext);
	const [category, setCategory] = React.useState('');

	const handleChange = (event) => {
		setCategory(event.target.value);
		setSearchQuery(event.target.value);
	};

	return (
		<Box sx={{ mr: { xs: 0, sm: 1 }, mb: { xs: 1, sm: 4 } }}>
			<FormControl
				fullWidth
				sx={{
					width: '300px',

					'& label': { color: theme.palette.text.primary },
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: theme.palette.text.primary,
						},
						'&:hover fieldset': {
							borderColor: theme.palette.text.primary,
						},
						'&.Mui-focused fieldset': {
							borderColor: theme.palette.text.primary,
						},
						'& .MuiOutlinedInput-input': {
							color: theme.palette.text.primary,
						},
						'&:hover .MuiOutlinedInput-input': {
							color: theme.palette.text.primary,
						},
						'&.Mui-focused .MuiOutlinedInput-input': {
							color: theme.palette.text.primary,
						},
						'& .MuiSelect-icon': {
							color: theme.palette.text.primary,
						},
					},
				}}>
				<InputLabel
					id='filter-category--select-label'
					sx={{ color: theme.palette.text.primary }}>
					Filter by category
				</InputLabel>
				<Select
					labelId='filter-category--select-label'
					id='filter-category-select'
					value={category}
					label='Filter categories'
					onChange={handleChange}
					sx={{ color: theme.palette.text.primary }}>
					<MenuItem value=''>All categories</MenuItem>
					<MenuItem value='Pasta'>Pasta</MenuItem>
					<MenuItem value='Beef'>Beef</MenuItem>
					<MenuItem value='Chicken'>Chicken</MenuItem>
					<MenuItem value='Lamb'>Lamb</MenuItem>
					<MenuItem value='Pork'>Pork</MenuItem>
					<MenuItem value='Goat'>Goat</MenuItem>
					<MenuItem value='Seafood'>Seafood</MenuItem>
					<MenuItem value='Breakfast'>Breakfast</MenuItem>
					<MenuItem value='Vegetarian'>Vegetarian</MenuItem>
					<MenuItem value='Vegan'>Vegan</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
}
