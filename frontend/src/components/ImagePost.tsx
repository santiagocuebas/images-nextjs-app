import { useState } from "react";
import styles from '@/styles/ImagePost.module.css';
import { FaComment, FaAngleDown } from "react-icons/fa";
import { ChildProp } from "@/lib/props";

export default function ImagePost({ children }: ChildProp) {
	const [visible, setVisible] = useState(false);

	return (
		<div className={styles.post}>
			<h2>
				<FaComment size={32} /> 
				Comment
				<button className={styles.button} onClick={() => setVisible(!visible)}>
					<FaAngleDown size={20} className={styles.icon} />
				</button>
			</h2>
			{ visible ? children : null }
		</div>
	)
}
