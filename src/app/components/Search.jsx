'use client';

import React, { useRef, useContext } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import { ThemeContext } from '../context/themeContext';

export default function Search({ setSearchQuery }) {
	const { theme } = useContext(ThemeContext);
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
					'& label': {
						color: theme.palette.text.primary,
						'&.Mui-focused': {
							color: theme.palette.text.primary,
						},
					},
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
						'& .MuiInputLabel-root': {
							'&.Mui-focused': {
								color: theme.palette.text.primary,
							},
						},
						'& .MuiOutlinedInput-input': {
							color: theme.palette.text.primary,
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
								<SearchIcon sx={{ color: theme.palette.text.primary }} />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
}
