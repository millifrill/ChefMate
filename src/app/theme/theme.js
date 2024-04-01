import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 680,
			md: 960,
			lg: 1280,
			xl: 1920,
			custom: 2000,
		},
	},
});

export default theme;
