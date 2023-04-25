import { GetServerSideProps } from "next";

function Placeholder() {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		redirect: {
			destination: '/',
			permanent: true
		}
	}
}

export default Placeholder;
