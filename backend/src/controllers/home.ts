import { Result, ValidationError, validationResult } from 'express-validator';
import fs from 'fs-extra';
import { extname, resolve } from 'path';
import { Direction, Errors } from '../types.js';
import { randomFilename } from '../libs/randomFilename.js';
import { getErrorMessages } from '../libs/errorMessage.js';
import { ImageModel } from '../models/Image.js';
import { getSidebar } from '../sidebar/index.js';

export const index: Direction = async (_req, res) => {
	// Find images
	const images = await ImageModel
		.find()
		.sort({ createdAt: -1 })
		.limit(3)
		.lean({ virtuals: true });

	// Find stats for the sidebar
	const { stats, viewedImages, recentComments } = await getSidebar();

	return res.json({ images, stats, viewedImages, recentComments });
};

export const upload: Direction = async (req, res) => {
	// Checking validation errors
	const errors: Result<ValidationError> = validationResult(req);
	const tempPath = req.file?.path as string;

	if (req.file !== undefined && errors.isEmpty()) {
		const ext: string = extname(req.file.originalname).toLowerCase();
		const imgUrl: string = await randomFilename();
		const targetPath: string = resolve(`uploads/${imgUrl + ext}`);

		// Rename target path
		await fs.rename(tempPath, targetPath);

		// Create a new image
		const image = await new ImageModel({
			title: req.body.title,
			description: req.body.description,
			filename: imgUrl + ext,
			createdAt: new Date()
		}).save();

		return res.json('/gallery/' + image.uniqueId);
	}

	// Generate message errors
	if (tempPath !== undefined)	await fs.unlink(tempPath);
	const message: Errors = getErrorMessages(errors.array());
	return res.json(message);
};

export const gallery: Direction = async (_req, res) => {
	// Find images
	const images = await ImageModel
		.find()
		.sort({ createdAt: -1 })
		.lean({ virtuals: true });

	return res.json({ images });
};
