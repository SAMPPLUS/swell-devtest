import { Alert, List, ListItem, ListItemText, ListSubheader, Divider, Rating } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';

/* eslint-disable-next-line */
export interface ReviewsListProps {
	reviews: {
		id: string;
		createdOn: string;
		rating: number;
		reviewText: string;
		user: { firstName: string; lastName: string };
		company: { name: string };
	}[];
	completed: boolean;
}

export function ReviewsList(props: ReviewsListProps) {
	var ret;

	if (props.reviews.length > 0) {
		const listItems = props.reviews.map((element) => {
			return (
				<div key={element.id}>
					<ListItem sx={{ borderBottom: 1, borderColor: '#bebebe' }}>
						<div>
							<ListItemText
								primary={element.user.firstName + ' ' + element.user.lastName}
								secondary={element.company.name}
								sx={{ width: 200 }}
							/>
							<ListItemText secondary={new Date(element.createdOn).toDateString()} />
						</div>
						<div>
							<Rating name="read-only" value={element.rating} readOnly />
							<ListItemText>{element.reviewText}</ListItemText>
						</div>
					</ListItem>
				</div>
			);
		});
		ret = <List sx={{ width: '80%', bgcolor: 'background.paper' }}>{listItems}</List>;
	} else if (props.completed) {
		ret = <Alert severity="info"> 0 Reviews Found</Alert>;
	} else {
		ret = <p>Loading...</p>;
	}

	return ret;
}

export default ReviewsList;
