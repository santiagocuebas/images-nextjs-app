import { ImageCommentsProp } from '@/lib/props';
import styles from '@/styles/ImageComments.module.css';
import { FaComments } from "react-icons/fa";

export default function ImageComments({ children, comments }: ImageCommentsProp) {
	return (
		<div className={styles.comments}>
			<h2>
				<FaComments size={32} />
				{comments} comments
			</h2>
			{
				comments > 0
					? <div className={styles.list}>
							{children}
						</div>
					: null
			}
		</div>
	)
}
