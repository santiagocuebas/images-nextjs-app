import { ValidationError } from 'express-validator';
import { Errors } from '../types.js';

export const getErrorMessages = (errs: ValidationError[]): Errors => {
	const message: Errors = {};

	for (const e of errs) {
		if (e.type === 'field') message[e.path] = e.msg;
	}
	return message;
};
