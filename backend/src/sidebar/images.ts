import { ImageModel } from '../models/Image.js';

export const getImages = async () => {
	return await ImageModel
		.find()
		.sort({ views: -1 })
		.limit(3)
		.lean({ virtuals: true });
};
