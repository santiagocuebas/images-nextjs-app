import { Request, Response, NextFunction } from 'express';
import { Types } from 'mongoose';

export type Direction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export interface IImage {
  title: string;
	description: string;
	filename: string;
  uniqueId: string;
	views: number;
	createdAt: Date;
}

export interface IComment {
  imageId: Types.ObjectId;
	email: string;
	name: string;
	gravatar: string;
	filename: string;
	comment: string;
	createdAt: Date;
}

export interface Errors {
  [index: string]: string;
}
