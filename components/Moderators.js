export default function Moderators() {
  let moderators = [
    {
      id: 1,
      firstName: 'Amity',
      lastName: 'Westley',
      avatar: 'http://dummyimage.com/250x250.png/cc0000/ffffff',
      video: 'videos/video2.mp4'
    },
    {
      id: 2,
      firstName: 'Zebulon',
      lastName: 'Peyto',
      avatar: 'http://dummyimage.com/250x250.png/ff4444/ffffff',
      video: 'videos/video3.mp4'
    },
    {
      id: 3,
      firstName: 'Valaree',
      lastName: 'Iwanczyk',
      avatar: 'http://dummyimage.com/250x250.png/5fa2dd/ffffff',
      video: 'videos/video4.mp4'
    }
  ];

  return (
    <div className="absolute left-0 z-10 px-4 py-8 top-1/4 moderators-wrapper">
      <ul className="flex flex-col">
        {moderators.map(function (user) {
          return (
            <li
              className="relative flex flex-col items-center flex-none w-24 m-2 text-center"
              key={user.id}
            >
              {/* <video
                autoPlay={true}
                loop={true}
                muted={true}
                src={user.video}
                className="object-cover mb-2 rounded-full w-28 h-28"
              ></video> */}
              <img
                className="object-cover w-20 h-20 mb-2 border-2 border-yellow-500 rounded-full"
                src={user.avatar}
                alt={'Photo of ' + user.firstName + '' + user.lastName}
              />
              <span className="text-xs text-white">
                {user.firstName} {user.lastName}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
