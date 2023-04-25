import styles from '@/styles/Comment.module.css';
import { format } from 'timeago.js';
import Image from 'next/image';
import { CommentProp } from "@/lib/props";

export default function Comment({ comment }: CommentProp) {
  return (
    <div className={styles.comment}>
      <Image
        src={`http://gravatar.com/avatar/${comment.gravatar}?d=monsterid&s=45`}
        alt={comment.name}
        width={100}
        height={100}
        unoptimized={true}
      />
      <div>{comment.name} &#x25CF; {comment.email}</div>
      <div>{comment.comment}</div>
      <div className={styles.createdAt}>{format(comment.createdAt)}</div>
    </div>
  )
}
