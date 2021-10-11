import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Host from '../components/Host';
import Chat from '../components/Chat';
import Moderators from '../components/Moderators';
import Participants from '../components/Participants';
import Controls from '../components/Controls';
import LayoutVideo from '../components/LayoutVideo';
export default function Room() {
  const { token } = useSelector((state) => state.room);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Host></Host>
      <Chat></Chat>
      <Moderators></Moderators>
      <Participants></Participants>
      {/* <Controls></Controls> */}
    </>
  );
}

Room.getLayout = function getLayout(page) {
  return <LayoutVideo>{page}</LayoutVideo>;
};
