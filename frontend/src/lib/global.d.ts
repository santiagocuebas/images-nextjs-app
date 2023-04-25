export interface IData {
	image: IImage;
	comments: IComment[];
	images: IImage[];
	stats: number[];
	viewedImages: IImage[];
	recentComments: IComment[];
}

export interface IProps {
	params: {
		id: string;
	}
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
  _id: string;
  imageId: string;
	email: string;
	name: string;
	gravatar: string;
	filename: string;
	comment: string;
	createdAt: Date;
}
