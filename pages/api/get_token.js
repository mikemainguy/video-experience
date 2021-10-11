require('dotenv').config();

const axios = require('axios');
const auth = {
  username: process.env.PROJECT_ID,
  password: process.env.API_KEY
};
const apiurl = process.env.SPACE;

const moderatorPermissions = [
  'room.list_available_layouts',
  'room.set_layout',
  'room.member.audio_mute',
  'room.member.audio_unmute',
  'room.member.deaf',
  'room.member.undeaf',
  'room.member.remove',
  'room.member.set_input_sensitivity',
  'room.member.set_input_volume',
  'room.member.set_output_volume',
  'room.member.video_mute',
  'room.member.video_unmute'
];
const normalPermissions = [
  'room.self.audio_mute',
  'room.self.audio_unmute',
  'room.self.video_mute',
  'room.self.video_unmute',
  'room.self.deaf',
  'room.self.undeaf',
  'room.self.set_input_volume',
  'room.self.set_output_volume',
  'room.self.set_input_sensitivity',
  'room.hide_video_muted',
  'room.show_video_muted'
];

export default async function tokenHandler(req, res) {
  let { user_name, room_name } = req.body;

  try {
    let moderator = user_name === 'host';
    let perms = moderator
      ? [...normalPermissions, ...moderatorPermissions]
      : normalPermissions;

    let body = {
      user_name,
      room_name: room_name,
      // auto_create_room: false,
      permissions: perms
    };

    let token = await axios.post(apiurl + '/room_tokens', body, { auth });

    token = token.data?.token;

    return res.json({ token });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}
