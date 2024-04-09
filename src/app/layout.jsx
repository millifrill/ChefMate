import { Inter } from 'next/font/google';
import './globals.css';
import HeaderMenu from './components/HeaderMenu';
import Footer from './components/Footer';
import ContextProviders from './context';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'ChefMate',
	description: 'Recipes app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ContextProviders>
					{/* <HeaderMenu check={darkMode} change={() => setDarkMode(!darkMode)} /> */}
					<HeaderMenu />
					{children}
					<Footer />
				</ContextProviders>
			</body>
		</html>
	);
}
