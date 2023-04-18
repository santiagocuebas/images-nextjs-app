import { ValidationError } from 'express-validator';
import { Errors } from '../types.js';

export const getErrorMessages = (errs: ValidationError[]): Errors => {
	const message: Errors = {};

	for (const e of errs) {
		message[e.param] = e.msg;
	}
	return message;
};
