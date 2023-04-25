import axios from "axios";
import { handleImage } from "@/lib/services";
import styles from '@/styles/Upload.module.css';
import { ChangeEvent } from "react";
import { FaImage, FaUpload } from 'react-icons/fa';
import { UploadProp } from "@/lib/props";

export default function Upload({ children, errors }: UploadProp) {
	async function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

		const data = await axios({
      method: form.method,
      url: form.action,
      data: form,
      withCredentials: true
    }).then(res => res.data);

		if (typeof data !== 'object') {
			window.location.href = data;
		} else {
			errors(data);
		}
	};
  
  return (
    <div className={styles.upload}>
      <h2 className="general-header">
        <FaImage size={32} />
        Upload Image
      </h2>
      <form action="http://localhost:4200/api/upload"  method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
        {children}
        <label>
          <input type="file" name="image" onChange={handleImage} />
        </label>
        <input type="text" name="title" placeholder="Title" />
        <textarea name="description" rows={2} placeholder="Description"></textarea>
        <button className={styles.button}>
          <FaUpload />
          Upload
        </button>
      </form>
    </div>
  )
}
