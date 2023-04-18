import { CommentModel } from '../models/Comment.js';

export const getComments = async () => {
	return await CommentModel
		.find()
		.sort({ createdAt: -1 })
		.limit(5);
};
