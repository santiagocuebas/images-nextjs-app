import axios from "axios";
import styles from '@/styles/CommentForm.module.css';
import { ChangeEvent } from "react";
import { FaComment } from "react-icons/fa";
import { CommentFormProp } from "@/lib/props";

export default function CommentForm({ children, id, errors, addComment }: CommentFormProp) {
	async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

		const form = e.target as HTMLFormElement;

		const data = await axios({
      method: form.method,
      url: form.action,
      withCredentials: true,
      data: form
    }).then(res => res.data);
		
		if (data.gravatar !== undefined) {
      errors(null);
      
			for (const child of form.children as any) {
				child.value = '';
			};

			return addComment(data);
		}
    
		return errors(data);
	}

  return (
    <form
      action={`http://localhost:4200/api/${id}/comment`}
      method="POST"
      onSubmit={handleSubmit}
      className={styles.form}
    >
      {children}
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <textarea name="comment" rows={2} placeholder="Comment"></textarea>
      <button className={styles.button}>
        <FaComment />
        Post
      </button>
    </form>
  )
}
