import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReviewsService {
	constructor(private prisma: DatabaseService) {}

	getReviewsCount() {
		return this.prisma.review.count();
	}

	getReviews() {
		return this.prisma.review.findMany({
			orderBy: [{ createdOn: 'desc' }],
			include: {
				user: true,
				company: true,
			},
		});
	}
}
