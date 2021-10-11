import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  room: '',
  token: '',
  details: {},
  messages: [],
  hosts: [],
  moderators: [],
  participants: []
};

const slice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setMessages: (state, action) => {
      state.messages.push(action.payload);
    },
    setHost: (state, action) => {
      state.hosts.push(action.payload);
    },
    setModerator: (state, action) => {
      state.moderators.push(action.payload);
    },
    setParticipant: (state, action) => {
      state.participants.push(action.payload);
    },
    reset: () => initialState
  }
});

const {
  setName,
  setRoom,
  setToken,
  setDetails,
  setMessages,
  setHost,
  setModerator,
  setParticipant,
  reset
} = slice.actions;

export function updateName(name) {
  return (dispatch) => {
    dispatch(setName(name));
  };
}

export function updateRoom(room) {
  return (dispatch) => {
    dispatch(setRoom(room));
  };
}

export function updateToken(room) {
  return (dispatch) => {
    dispatch(setToken(room));
  };
}

export function updateDetails(details) {
  return (dispatch) => {
    dispatch(setDetails(details));
  };
}

export function updateMessages(message) {
  return (dispatch) => {
    dispatch(setMessages(message));
  };
}

export function updateHost(user) {
  return (dispatch) => {
    dispatch(setHost(user));
  };
}

export function updateModerators(user) {
  return (dispatch) => {
    dispatch(setModerator(user));
  };
}

export function updateParticipants(user) {
  return (dispatch) => {
    dispatch(setParticipant(user));
  };
}

export function resetRoom() {
  return (dispatch) => {
    dispatch(reset());
  };
}

export default slice.reducer;
