import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { resetRoom } from '../store/reducers/room';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetRoom());
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center min-h-full py-48 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Join a Room
        </h1>

        <LoginForm></LoginForm>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
