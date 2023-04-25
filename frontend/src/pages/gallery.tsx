import { IData, IImage } from '@/lib/global.js';
import styles from '@/styles/Gallery.module.css';
import Image from '@/components/Image';
import axios from 'axios';
import { FaImages } from 'react-icons/fa';
import { GetStaticProps } from 'next';

function Gallery({ images }: any) {
	return (
		<div className={styles.gallery}>
			<h2>
				<FaImages size={21} />
				Gallery
			</h2>
			<div>
				{
					images.map((image: IImage) => (
						<Image
							key={image.uniqueId}
							id={image.uniqueId}
							filename={image.filename}
							alt={image.title}
						/>
					))
				}
			</div>
		</div>
	)
}

export const getStaticProps: GetStaticProps<IData> = async () => {
	const data: IData = await axios
		.get('http://localhost:4200/api/gallery')
		.then(res => res.data);

	return {
		props: data
	}
}

export default Gallery;
