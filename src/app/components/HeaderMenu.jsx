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
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeContext } from '../context/themeContext';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const drawerWidth = 240;

export default function HeaderMenu({ window }) {
	const { mode, setMode, theme } = useContext(ThemeContext);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
			sx={{
				textAlign: 'left',
				width: 230,
				backgroundColor: theme.palette.background.primary,
				marginLeft: '10px',
			}}>
			<List sx={{ backgroundColor: theme.palette.background.primary }}>
				<ListItem>
					<ListItemText sx={{ color: theme.palette.text.primary }}>
						<Typography
							variant='h6'
							sx={{
								color: theme.palette.text.primary,
								fontSize: '1.5rem',
								lineHeight: '1.5rem',
							}}>
							ChefMate
						</Typography>
					</ListItemText>
				</ListItem>
			</List>
			<Divider
				sx={{
					backgroundColor: theme.palette.background.primary,
					marginRight: '12px',
				}}
			/>
			<List
				sx={{
					backgroundColor: theme.palette.background.primary,
					minHeight: '100vh',
					color: theme.palette.text.primary,
				}}>
				{['Recipes', 'Contact'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<Link href={index % 2 === 0 ? '/' : '/contact'}>
							<ListItemButton>
								<ListItemIcon sx={{ color: theme.palette.text.primary }}>
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
		<Box sx={{ display: 'flex', flexDirection: 'row', height: '64px' }}>
			<CssBaseline />
			<AppBar
				component='nav'
				sx={{ backgroundColor: theme.palette.background.default, height: '64px' }}>
				<Toolbar
					sx={{
						backgroundColor: theme.palette.background.primary,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						height: '100%',
					}}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							sx={{ mr: 2, color: theme.palette.text.primary, display: { sm: 'none' } }}>
							<MenuIcon />
						</IconButton>
						<Link href={'/'}>
							<Typography
								variant='h6'
								component='div'
								sx={{
									flexGrow: 1,
									display: 'flex',
									justifySelf: 'flex-start',
									color: theme.palette.text.primary,
									fontSize: '1.5rem',
								}}>
								ChefMate
							</Typography>
						</Link>
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							{!isMobile &&
								['Recipes', 'Contact'].map((text, index) => (
									<ListItem key={text} disablePadding>
										<Link href={index % 2 === 0 ? '/' : '/contact'}>
											<ListItemButton>
												<ListItemText
													primary={text}
													sx={{ color: theme.palette.text.primary }}
												/>
											</ListItemButton>
										</Link>
									</ListItem>
								))}
						</Box>
						<IconButton
							sx={{ ml: 1, color: theme.palette.text.primary, justifySelf: 'flex-end' }}
							checked={mode}
							onClick={() => {
								if (mode) {
									setMode(false);
								} else {
									setMode(true);
								}
							}}
							color='inherit'>
							{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
						</IconButton>
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
							backgroundColor: theme.palette.background.primary,
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
