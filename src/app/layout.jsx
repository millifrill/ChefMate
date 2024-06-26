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
			<ContextProviders>
				<body className={inter.className}>
					<HeaderMenu />
					{children}
					<Footer />
				</body>
			</ContextProviders>
		</html>
	);
}
