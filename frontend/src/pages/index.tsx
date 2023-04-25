import axios from 'axios';
import { IData } from '@/lib/global';
import styles from '@/styles/Index.module.css';
import Upload from '@/components/Upload';
import ErrorBox from '@/components/ErrorBox';
import Stats from '@/components/Stats';
import ViewedImages from '@/components/ViewedImages';
import RecentComments from '@/components/RecentComments';
import RecentUploads from '@/components/RecentUploads';
import { useState } from 'react';
import { GetStaticProps } from 'next';

function Home({ images, stats, viewedImages, recentComments }: IData) {
	const [errors, setErrors] = useState(null);

  return (
    <div className={styles.principal}>
      <Upload errors={setErrors}>
        {errors ? <ErrorBox hide={setErrors} errors={errors} /> : null}
      </Upload>
      <div className={styles.sidebar}>
        <Stats stats={stats} />
        <ViewedImages images={viewedImages} />
        <RecentComments comments={recentComments} />
      </div>
      <div className={styles.recent}>
        <RecentUploads images={images} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IData> = async () => {
	const data: IData = await axios
    .get('http://localhost:4200/api/index')
    .then(res => res.data);

	return {
		props: data
	}
}

export default Home;
