'use client';

import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';

export default function Search({ setSearchQuery }) {
	const inputRef = useRef(null);

	const handleClick = () => {
		const inputValue = inputRef.current.value;
		setSearchQuery(inputValue);
		inputRef.current.value = '';
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			const inputValue = e.target.value;
			setSearchQuery(inputValue);
			inputRef.current.value = '';
		}
	};

	return (
		<Box sx={{ mb: 4 }}>
			<TextField
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
					},
				}}
				label='Search'
				onKeyDown={handleEnter}
				inputRef={inputRef}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton onClick={handleClick}>
								<SearchIcon sx={{ color: '#fff' }} />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
}
