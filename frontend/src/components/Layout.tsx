import styles from '@/styles/Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';
import Button from './ButtonNav';
import { useRouter } from 'next/router';
import { WheelEventHandler, useState } from 'react';
import { ChildProp } from '@/lib/props';

export default function Layout({ children }: ChildProp) {
	const router = useRouter();
	const [visible, setVisible] = useState(true);

	const showFooter: WheelEventHandler<HTMLDivElement> = e => {
		if (e.deltaY < 0) {
			return setVisible(true);
		}

		return setVisible(false);
	}

	return (
		<>
			<Nav>
				{
					router.asPath !== '/gallery'
						? <Button text='Gallery' color='green' href='/gallery' />
						: null
				}
				{
					router.asPath !== '/'
						? <Button text='Upload' color='violet' href='/' />
						: null
				}
			</Nav>
			<div className={styles.main} onWheel={showFooter}>
				{children}
			</div>
			{visible ? <Footer /> : null}
		</>
	)
}
