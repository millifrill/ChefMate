'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter({ setSearchQuery }) {
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

					'& label': { color: '#fff !important' },
					'& .MuiOutlinedInput-root': {
						'& fieldset': {
							borderColor: '#fff',
						},
						'&:hover fieldset': {
							borderColor: '#fff',
						},
						'&.Mui-focused fieldset': {
							borderColor: '#fff',
						},
						'& .MuiOutlinedInput-input': {
							color: '#fff',
						},
						'&:hover .MuiOutlinedInput-input': {
							color: '#fff',
						},
						'&.Mui-focused .MuiOutlinedInput-input': {
							color: '#fff',
						},
						'& .MuiSelect-icon': {
							color: '#fff',
						},
					},
				}}>
				<InputLabel id='filter-category--select-label' sx={{ color: '#fff' }}>
					Filter categories
				</InputLabel>
				<Select
					labelId='filter-category--select-label'
					id='filter-category-select'
					value={category}
					label='Filter categories'
					onChange={handleChange}
					sx={{ color: '#fff' }}>
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
