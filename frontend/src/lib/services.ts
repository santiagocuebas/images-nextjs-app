import { ChangeEvent } from "react";

export function handleImage(e: ChangeEvent<HTMLInputElement>) {
  const input = e.target as HTMLInputElement;
	const reader = new FileReader();
  const files = input.files as FileList;
	const parent = input.parentElement as HTMLElement;

	reader.readAsDataURL(files[0]);
	reader.addEventListener('load', () => {
		parent.style.backgroundImage = `url(${reader.result})`;
	}, false);
}
