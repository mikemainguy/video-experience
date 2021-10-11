import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as SignalWire from '@signalwire/js';
import { updateParticipants } from '../store/reducers/room';

export default function Video({ id = 'video1' }) {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.room);
  let [setupDone, setSetupDone] = useState(false);
  let [isLoading, setIsLoading] = useState(true);

  async function createVideo() {
    let room;

    if (setupDone) return;
    setSetupDone(true);

    try {
      room = await SignalWire.Video.createRoomObject({
        token,
        rootElementId: id,
        video: true
      });

      room.on('room.joined', async (e) => {
        // thisMemberId.current = e.member_id;
        // memberList.current = e.room.members;
        // let thisMember = memberList.current.find(
        //   (m) => m.id === e.member_id
        // );
        // onRoomUpdate({ thisMemberId: e.member_id, member: thisMember });
        debugger;
        dispatch(updateParticipants(e.room.members));
        // onMemberListUpdate(e.room.members);
        // console.log(e.room.members);
        // eventLogger('You have joined the room.');
      });
      room.on('room.updated', async (e) => {
        // eventLogger('Room has been updated');
      });
      room.on('member.joined', async (e) => {
        // eventLogger(e.member.name + ' has joined the room.');
        debugger;
        dispatch(updateParticipants(e.member));
        // memberList.current.push(e.member);
        // console.log(memberList.current);
        // onMemberListUpdate(memberList.current);
      });
      room.on('member.updated', async (e) => {
        // let updatedMember = memberList.current.find(
        //   (x) => x.id === e.member.id
        // );
        // if (updatedMember === undefined) return;
        // updatedMember = { ...updatedMember, ...e.member };
        // let newMemberList = memberList.current.filter(
        //   (x) => x.id !== e.member.id
        // );
        // newMemberList.push(updatedMember);
        // memberList.current = newMemberList;
        // onMemberListUpdate([...memberList.current]);
      });
      room.on('layout.changed', async (e) => {
        // onRoomUpdate({ layout: e.layout.name });
      });

      room.on('member.left', async (e) => {
        // let memberThatLeft = memberList.current.find(
        //   (m) => m.id === e.member.id
        // );
        // let remainingMembers = memberList.current.filter(
        //   (m) => m.id !== e.member.id
        // );
        // if (memberThatLeft === undefined) return;
        // eventLogger(memberThatLeft?.name + ' has left the room.');
        // if (thisMemberId.current === memberThatLeft?.id) {
        //   console.log('It is you who has left the room');
        //   onRoomUpdate({ left: true });
        // }
        // memberList.current = remainingMembers;
        // onMemberListUpdate(memberList.current);
        // console.log(memberList.current);
      });

      await room.join();

      let layouts = (await room.getLayouts()).layouts;
      let cameras = await SignalWire.WebRTC.getCameraDevicesWithPermissions();
      let microphones =
        await SignalWire.WebRTC.getMicrophoneDevicesWithPermissions();
      let speakers = await SignalWire.WebRTC.getSpeakerDevicesWithPermissions();

      setIsLoading(false);
      // onRoomInit(room, layouts, cameras, microphones, speakers);

      let camChangeWatcher = await SignalWire.WebRTC.createDeviceWatcher({
        targets: ['camera']
      });
      camChangeWatcher.on('changed', (changes) => {
        // eventLogger('The list of camera devices has changed');
        // onRoomUpdate({ cameras: changes.devices });
      });
      let micChangeWatcher = await SignalWire.WebRTC.createDeviceWatcher({
        targets: ['microphone']
      });
      micChangeWatcher.on('changed', (changes) => {
        // eventLogger('The list of microphone devices has changed');
        // onRoomUpdate({ microphones: changes.devices });
      });
      let speakerChangeWatcher = await SignalWire.WebRTC.createDeviceWatcher({
        targets: ['speaker']
      });
      speakerChangeWatcher.on('changed', (changes) => {
        // eventLogger('The list of speakers has changed');
        // onRoomUpdate({ speakers: changes.devices });
      });
    } catch (e) {
      console.log('test error', e);
    }
  }

  useEffect(() => {
    createVideo();
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {isLoading && (
        <div className="absolute flex items-center justify-center min-h-screen">
          Loading ...
        </div>
      )}
      <div id="video1" className="w-full min-h-screen"></div>
    </div>
  );
}
