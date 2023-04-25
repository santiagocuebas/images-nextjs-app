import styles from '@/styles/ButtonNav.module.css';
import Link from 'next/link';
import { GenericProp } from "@/lib/props";

export default function ButtonNav({ href, color, text }: GenericProp) {
  return (
    <Link href={href} className={styles.link + ' ' + styles[color]}>
      {text}
    </Link>
  )
}
