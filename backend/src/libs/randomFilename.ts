import { ImageModel } from '../models/Image.js';

export const randomFilename = async (): Promise<string> => {
	const validChar = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let filename = '';

	for (let i = 0; i < 8; i++) {
		filename += validChar.charAt(Math.floor(Math.random() * validChar.length));
	}

	const image = await ImageModel.find({ filename });

	if (!image) {
		randomFilename();
	}

	return filename;
};
