import axios from "axios"
import styles from '@/styles/Alert.module.css';
import { AlertProp } from "@/lib/props";

export default function Alert({ id, alert }: AlertProp) {
	async function deleteImage() {
		await axios({
			method: 'DELETE',
			url: 'http://localhost:4200/api/' + id,
			withCredentials: true
		});

		window.location.href = '/';
	}

	return (
		<div className={styles.alert}>
			<div>
				<p>Are you sure of delete this image?</p>
				<button className={styles.cancel} onClick={() => alert(false)}>
					Cancel
				</button>
				<button className={styles.accept} onClick={deleteImage}>
					Accept
				</button>
			</div>
		</div>
	)
}
