import RecipesBanner from './components/RecipesBanner';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<RecipesBanner />
			<main className={styles.main}></main>
		</>
	);
}
