import styles from '@/styles/Image.module.css';
import Link from "next/link";
import NextImage from "next/image";
import { GenericProp } from '@/lib/props';

export default function Image({ id, filename, alt }: GenericProp) {
  return (
    <Link href={'/gallery/' + id} className={styles.link}>
      <NextImage 
        src={"http://localhost:4200/uploads/" + filename}
        alt={alt}
        width={100}
        height={100}
        unoptimized={true}
      />
    </Link>
  )
}
