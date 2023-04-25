import axios from 'axios';
import { IComment, IData, IImage } from '@/lib/global.js';
import ImageContent from '@/components/ImageContent';
import ImagePost from '@/components/ImagePost';
import ImageComments from '@/components/ImageComments';
import Comment from '@/components/Comment';
import CommentForm from '@/components/CommentForm';
import ErrorBox from '@/components/ErrorBox';
import Alert from '@/components/Alert';
import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

function Image({ image, comments }: IData) {
  const [iComments, setComments] = useState(comments);
  const [errors, setErrors] = useState(null);
  const [alert, setAlert] = useState(false);

	const addComment = (comment: IComment) => setComments([comment, ...iComments]);

	return (
		<>
      {alert ? <Alert id={image.uniqueId} alert={setAlert} /> : null}

			<ImageContent image={image} alert={setAlert} />

			<ImagePost>
				<CommentForm
					id={image.uniqueId}
					errors={setErrors}
					addComment={addComment}
				>
					{errors ? <ErrorBox hide={setErrors} errors={errors} /> : null}
				</CommentForm>
			</ImagePost>

			<ImageComments comments={iComments.length} >
				{
					iComments.map(comment => (
						<Comment key={comment._id} comment={comment} />
					))
				}
			</ImageComments>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { images }: IData = await axios
    .get('http://localhost:4200/api/gallery')
		.then(res => res.data);

  const paths = images.map(image => ({
    params: { id: image.uniqueId }
  }));

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IData> = async ({ params }) => {
	const data: IData = await axios
    .get('http://localhost:4200/api/gallery/' + params?.id)
		.then(res => res.data);

	if (!data) {
		return {
			redirect: {
				destination: '/',
				permanent: true
			}
		}
	}

	return {
		props: data
	}
}

export default Image;
