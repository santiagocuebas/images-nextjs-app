import { Dispatch, SetStateAction } from "react";
import { IComment, IImage } from "./global";

export interface GenericProp {
	[index: string]: string;
}

export interface ChildProp {
	children: JSX.Element[] | JSX.Element | null;
}

export interface ImagesProp {
	images: IImage[];
}

export interface CommentProp {
	comment: IComment;
}

export interface CommentsProp {
	comments: IComment[];
}

export interface AlertProp {
	id: string;
	alert: Dispatch<SetStateAction<boolean>>;
}

export interface CommentFormProp extends ChildProp {
	id: string;
	errors: Dispatch<SetStateAction<null>>;
	addComment: (value: IComment) => void;
}

export interface ErrorProp {
	hide: Dispatch<SetStateAction<null>>;
	errors: never;
}

export interface ImageCommentsProp extends ChildProp {
	comments: number;
}

export interface ContentProp {
	image: IImage;
	alert: Dispatch<SetStateAction<boolean>>;
}

export interface StatsProp {
	stats: number[];
}

export interface UploadProp extends ChildProp {
	errors: Dispatch<SetStateAction<null>>;
}
