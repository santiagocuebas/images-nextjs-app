import { Result, ValidationError, validationResult } from 'express-validator';
import fs from 'fs-extra';
import { Md5 } from 'ts-md5';
import { Direction, Errors } from '../types.js';
import { getErrorMessages } from '../libs/errorMessage.js';
import { ImageModel } from '../models/Image.js';
import { CommentModel } from '../models/Comment.js';

export const image: Direction = async (req, res) => {
	// Find and update image
	const image = await ImageModel
		.findOneAndUpdate(
			{ filename: { $regex: req.params.imageId } },
			{ $inc: { views: 1 } }
		)
		.lean({ virtuals: true });

	if (image !== null) {
		image.views++;

		// Find comments
		const comments = await CommentModel
			.find({ imageId: image._id })
			.sort({ createdAt: -1 })
			.lean();
		
		return res.json({ image, comments });
	}
		
	return res.json(image);
};

export const comment: Direction = async (req, res) => {
	// Checking validation errors and if the image exists
	const errors: Result<ValidationError> = validationResult(req);
	const image = await ImageModel.findOne({ filename: {
		$regex: req.params.imageId
	} });

	if (errors.isEmpty() && image !== null) {
		// Create a new comment
		const comment = await new CommentModel({
			imageId: image.id,
			name: req.body.name,
			email: req.body.email,
			comment: req.body.comment, 
			filename: image.filename, 
			gravatar: Md5.hashStr(req.body.email),
			createdAt: new Date()
		}).save();

		return res.json(comment);
	}

	// Generate message errors
	const message: Errors = getErrorMessages(errors.array());
	return res.json(message);
};

export const deleteImage: Direction = async (req, res) => {
	// Find image
	const image = await ImageModel.findOne({
		filename: { $regex: req.params.imageId }
	});

	if (image !== null) {
		// Unlink file and delete image and comment
		await fs.unlink(`./uploads/${image.filename}`);
		await CommentModel.deleteMany({ imageId: image._id });
		await image.deleteOne();

		return res.json({ url: '/' });
	}

	return res.json({});
};
