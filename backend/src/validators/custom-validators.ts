import { CustomValidator } from 'express-validator';
import { extname } from 'path';
import { File } from '../types.js';
import { Ext } from '../enums.js';

const isUndefined = (param: File): boolean => {
	return param !== undefined;
};

const isValidExtension = (param: string): boolean => {
	const ext: string = extname(param).toLowerCase();
	const values: string[] = Object.values(Ext);
	return values.includes(ext);
};

export const imageValidator: CustomValidator = (_value, { req }) => {
	const file: File = req.file;

	if (!isUndefined(file) && !isValidExtension(file.originalname)) {
		return false;
	}
	return true;
};
