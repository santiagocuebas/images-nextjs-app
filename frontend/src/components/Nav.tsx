import styles from '@/styles/Nav.module.css';
import Link from "next/link";
import Image from "next/image";
import type { ChildProp } from '@/lib/props';

export default function Nav({ children }: ChildProp) {
  return (
    <nav className={styles.nav}>
      <Link href={'/'} className={styles.link}>
        <Image
          src={"/imgshare-logo.png"}
          alt={'Logo'}
          width={100}
          height={100}
          unoptimized={true}
        />
      </Link>
      <div>
        {children}
      </div>
    </nav>
  )
}
