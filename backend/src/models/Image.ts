import { Schema, model } from 'mongoose';
import MLV from 'mongoose-lean-virtuals';
import { extname } from 'path';
import { IImage } from '../types.js';

const ImageSchema = new Schema<IImage>({
	title: { type: String, required: true, allowNull: false },
	description: String,
	filename: String,
	views: { type: Number, default: 0 },
	createdAt: Date
});

ImageSchema.plugin(MLV);

ImageSchema.virtual('uniqueId').get(function (this: { filename: string }): string {
	return this.filename.replace(extname(this.filename), '');
});

export const ImageModel = model<IImage>('Image', ImageSchema);
