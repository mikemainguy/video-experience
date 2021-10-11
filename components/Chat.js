import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMessages } from '../store/reducers/room';
import { useUser } from '@auth0/nextjs-auth0';

import Form from './Form';
import TextInput from './TextInput';

export default function Chat() {
  const { name, room, messages } = useSelector((state) => state.room);
  const [chatHeight, setChatHeight] = useState({ height: 0 });
  const messagesEndRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useUser();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (data) => {
    dispatch(
      updateMessages({
        name: user.name,
        message: data.message,
        picture: user.picture,
        sub: user.sub
      })
    );
    scrollToBottom();
  };

  // useEffect(() => {
  //   getChatHeight();
  // }, []);

  // const getChatHeight = () => {
  //   let participantsEl = document.getElementsByClassName(
  //     'participants-wrapper'
  //   );

  //   let participantsHeight =
  //     participantsEl.length > 0 ? participantsEl[0].height : 0;

  //   console.log(participantsHeight);

  //   setChatHeight({
  //     height: participantsHeight
  //   });
  // };

  return (
    <div className="absolute top-0 right-0 z-10 flex flex-col w-3/12 p-4 h-5/6 chat-wrapper">
      <ul className="w-full mt-auto overflow-y-scroll hide-scrollbars">
        {messages.map(function (user, index) {
          return (
            <li key={index} className="w-full mb-8 font-bold text-white">
              <div className="mb-4 text-sm text-right">{user.message}</div>
              <div className="flex items-center justify-end text-right">
                <span className="mr-4 text-sm">
                  {user.name && <>{user.name}</>}
                </span>
                <img
                  className="object-cover w-10 h-10 rounded-full"
                  src={
                    user.picture
                      ? user.picture
                      : 'https://via.placeholder.com/100'
                  }
                  alt={'Photo of ' + user.name}
                />
              </div>
            </li>
          );
        })}
        <li ref={messagesEndRef}></li>
      </ul>
      <Form
        className="mt-auto"
        onSubmit={onSubmit}
        resetOnSubmit={true}
        submitText="Submit"
        submitClass="btn-primary w-auto ml-auto"
      >
        <TextInput
          name="message"
          rules={{ required: true }}
          placeholder="Type message"
        ></TextInput>
      </Form>
    </div>
  );
}
