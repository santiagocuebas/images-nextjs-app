import { StatsProp } from '@/lib/props';
import styles from '@/styles/Stats.module.css';
import { FaChartLine, FaImages, FaComments, FaEye } from "react-icons/fa";

export default function Stast({ stats }: StatsProp) {
	return (
		<div className={styles.stats}>
			<h2>
				<FaChartLine size={24} />
				Stats
			</h2>
			<p>
				<FaImages />
				Images: {stats[0]}
			</p>
			<p>
				<FaComments />
				Comments: {stats[1]}
			</p>
			<p>
				<FaEye />
				Views: {stats[2]}
			</p>
		</div>
	)
}
