import { Schema } from 'express-validator';
import { imageValidator } from './customValidators.js';

export const schemaUploads: Schema = {
	title: {
		isString: {
			errorMessage: 'Enter a valid title',
			bail: true
		},
		isLength: {
			errorMessage: 'The title must contain between 5 and 60 characters',
			options: { min: 5, max: 60 }
		}
	},
	description: {
		isString: {
			errorMessage: 'Enter a valid description'
		}
	},
	image: {
		custom: {
			options: imageValidator,
			errorMessage: 'Enter a valid image archive'
		}
	}
};

export const schemaComment: Schema = {
	name: {
		isString: {
			errorMessage: 'Enter a valid name'
		},
		isLength: {
			errorMessage: 'The name must contain between 5 and 40 characters',
			options: { min: 5, max: 60 }
		}
	},
	email: {
		isEmail: {
			errorMessage: 'Enter a valid email'
		}
	},
	comment: {
		exists: {
			options: {
				checkFalsy: true
			},
			errorMessage: 'Enter a valid comment'
		}
	}
};
