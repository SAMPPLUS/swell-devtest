import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import WebFont from 'webfontloader';
import Header from './components/header/header';
import ReviewsList from './components/reviews-list/reviews-list';
import { theme } from './theme';
import { useEffect, useState } from 'react';
import { type ReviewsListProps } from './components/reviews-list/reviews-list';
import axios from 'axios';

WebFont.load({
	google: {
		families: ['Montserrat:500,600,700'],
	},
});

export function App() {
	const [data, setData] = useState<ReviewsListProps>({ reviews: [], completed: false });

	useEffect(() => {
		axios
			.get('/api/reviews/')
			.then((res) => {
				return res.data;
			})
			.then((data) => {
				setData({ reviews: data.reviews, completed: true });
			});
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Container sx={{ mt: 2, typography: 'body1' }}>
				<ReviewsList {...data} />
			</Container>
		</ThemeProvider>
	);
}

export default App;
