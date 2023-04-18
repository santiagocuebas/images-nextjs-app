import { ImageModel } from '../models/Image.js';
import { CommentModel } from '../models/Comment.js';

export const getStats = async (): Promise<number[]> => {
	const images = await ImageModel.find();
	const comments = await CommentModel.find();

	const totalImages: number = images.length;
	const totalComments: number = comments.length;
	let totalViews = 0;

	if (images.length > 0) {
		for (const image of images) {
			totalViews += image.views;
		}
	}

	return [totalImages, totalComments, totalViews];
};
