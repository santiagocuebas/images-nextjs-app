import { getStats } from './stats.js';
import { getImages } from './images.js';
import { getComments } from './comments.js';

export const getSidebar = async () => {
	const stats = await getStats();
	const viewedImages = await getImages();
	const recentComments = await getComments();

	return { stats, viewedImages, recentComments };
};
