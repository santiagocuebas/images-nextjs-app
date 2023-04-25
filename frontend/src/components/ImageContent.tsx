import { format } from "timeago.js";
import styles from '@/styles/ImageContent.module.css';
import Image from 'next/image';
import { FaImage, FaEye, FaRegClock } from "react-icons/fa";
import { ContentProp } from "@/lib/props";

export default function ImageContent({ image, alert }: ContentProp) {
	return (
		<div className={styles.image}>
			<h2>
				<FaImage size={32} />
				{image.title}
				<button name={image.uniqueId} onClick={() => alert(true)}>
					Delete
				</button>
			</h2>
			<Image
				src={'http://localhost:4200/uploads/' + image.filename}
				alt={image.title}
				width={100}
				height={100}
				unoptimized={true}
			/>
			{
				image.description
					? <div className={styles.description}>
							{image.description}
						</div>
					: null
			}
			<div className={styles.stats}>
				<p>
					<FaEye />
					{image.views}
				</p>
				<p>
					<FaRegClock />
					{format(image.createdAt)}
				</p>
			</div>
		</div>
	)
}
