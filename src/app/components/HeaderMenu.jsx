'use client';

import React, { useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailIcon from '@mui/icons-material/Mail';
import Switch from './Switch';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeContext } from '../context/themeContext';

const drawerWidth = 240;

export default function HeaderMenu({ window }) {
	const { setMode, mode } = useContext(ThemeContext);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{ textAlign: 'left', width: 250, backgroundColor: '#000' }}>
			<List sx={{ backgroundColor: '#000' }}>
				<ListItem>
					<ListItemText sx={{ color: '#fff' }}>Toggle theme</ListItemText>
					<Switch
						checked={mode}
						onClick={() => {
							if (mode) {
								setMode(false);
							} else {
								setMode(true);
							}
						}}
					/>
				</ListItem>
			</List>
			<Divider sx={{ backgroundColor: '#222' }} />
			<List sx={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff' }}>
				{['Recipes', 'Contact'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<Link href={index % 2 === 0 ? '/' : '/contact'}>
							<ListItemButton>
								<ListItemIcon sx={{ color: '#fff' }}>
									{index % 2 === 0 ? <MenuBookIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItemButton>
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container = window !== undefined ? () => window().document.body : undefined;
	const isMobile = useMediaQuery('(max-width: 600px)');

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			<CssBaseline />
			<AppBar component='nav' sx={{ backgroundColor: theme.palette.primary.main }}>
				<Toolbar sx={{ backgroundColor: '#000', justifyContent: 'space-between' }}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}>
						<MenuIcon />
					</IconButton>
					<Link href={'/'}>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1, display: 'block', color: theme.palette.text.primary }}>
							ChefMate
						</Typography>
					</Link>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						{!isMobile &&
							['Recipes', 'Contact'].map((text, index) => (
								<ListItem key={text} disablePadding>
									<Link href={index % 2 === 0 ? '/' : '/contact'}>
										<ListItemButton>
											<ListItemText primary={text} />
										</ListItemButton>
									</Link>
								</ListItem>
							))}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
							backgroundColor: theme.palette.background.default,
						},
					}}>
					{drawer}
				</Drawer>
			</nav>
			<Box component='main' sx={{ flexGrow: 1, p: 0 }}>
				<Toolbar />
			</Box>
		</Box>
	);
}
