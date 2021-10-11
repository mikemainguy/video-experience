import { useSelector } from 'react-redux';
import Image from '../components/Image';

export default function Participants() {
  const { participants } = useSelector((state) => state.room);

  let firstHalf = participants.slice(0, participants.length / 2);
  let secondHalf = participants.slice(participants.length / 2);

  function createList(array) {
    return (
      <ul className="flex overflow-x-scroll hide-scrollbars">
        {array.map(function (user) {
          return (
            <li
              className="relative flex flex-col items-center flex-none w-24 m-2 text-center"
              key={user.sub}
            >
              {/* <video
                autoPlay={true}
                loop={true}
                muted={true}
                src={user.video}
                className="object-cover mb-2 rounded-full w-28 h-28"
              ></video> */}
              <img
                className="object-cover w-20 h-20 mb-2 rounded-full"
                src={user.picture}
                alt={'Photo of ' + user.name}
              />
              <span className="text-xs text-white">{user.name}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-8 participants-wrapper">
      {createList(firstHalf)}
      {createList(secondHalf)}
    </div>
  );
}
