import { render, screen } from '@testing-library/react';
import ReviewsList from './reviews-list';

describe('ReviewsList', () => {
	const revs = [
		{
			id: '1',
			createdOn: '2022-08-30T15:59:19Z',
			reviewText: 'review 1',
			rating: 3,
			user: {
				id: 'u1',
				firstName: 'Alain',
				lastName: 'Delon',
			},
			company: {
				id: 'c1',
				name: 'paramount',
			},
		},
		{
			id: '2',
			createdOn: '2022-07-30T15:59:39Z',
			reviewText: '',
			rating: 4,
			user: {
				id: 'u2',
				firstName: 'Jack',
				lastName: 'Nicholson',
			},
			company: {
				id: 'c2',
				name: 'Toho',
			},
		},
		{
			id: '3',
			createdOn: '2022-06-30T15:59:49Z',
			reviewText: 'review 3',
			rating: 5,
			user: {
				id: 'u3',
				firstName: 'Al',
				lastName: 'Pacino',
			},
			company: {
				id: 'c3',
				name: '20th Century',
			},
		},
	];

	it('should render successfully', () => {
		const { baseElement } = render(<ReviewsList completed={true} reviews={revs} />);
		expect(baseElement).toBeTruthy();
	});

	it('should render list of reviews', () => {
		const { baseElement } = render(<ReviewsList completed={true} reviews={revs} />);
		var items = screen.getAllByRole('listitem');
		expect(items.length).toEqual(3);
	});

	it('should display message if no reviews are found', () => {
		const { baseElement } = render(<ReviewsList completed={true} reviews={[]} />);
		expect(screen.getByText('0 Reviews Found')).toBeInTheDocument();
	});

	it('should display the review text if provided', () => {
		const { baseElement } = render(<ReviewsList completed={true} reviews={revs} />);
		expect(screen.getByText('review 1')).toBeInTheDocument();
		expect(screen.getByText('review 3')).toBeInTheDocument();
	});

	it('should display date human-readable', () => {
		const { baseElement } = render(<ReviewsList completed={true} reviews={revs} />);
		expect(screen.getByText('Tue Aug 30 2022')).toBeInTheDocument();
	});

	it('should display loading message when data has not yet loaded', () => {
		const { baseElement } = render(<ReviewsList completed={false} reviews={[]} />);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});

	// Feel free to add any additional tests you think are necessary
});
