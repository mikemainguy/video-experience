import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  timer: null,
  error: null,
  warning: null,
  success: null
};

const slice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
    clearTimer: (state, action) => {
      clearTimeout(state.timer);
      state.timer = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setWarning: (state, action) => {
      state.warning = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    reset: () => initialState
  }
});

const {
  setShow,
  setTimer,
  clearTimer,
  setError,
  setSuccess,
  setWarning,
  reset
} = slice.actions;

export function updateAlert(response, timeout = true) {
  return (dispatch) => {
    const timer = () => setTimeout(() => dispatch(setShow(false)), 3000);

    dispatch(clearTimer());
    dispatch(resetAlert());

    // TODO add more error codes
    if ([200, 201, 202].indexOf(response.errorCode) > -1) {
      dispatch(updateSuccess(response.message));
    } else if ([408, 409].indexOf(response.errorCode) > -1) {
      dispatch(updateWarning(response.message));
    } else if (
      [400, 401, 403, 404, 405, 406, 407, 500, 501, 502, 503, 504].indexOf(
        response.errorCode
      ) > -1
    ) {
      dispatch(updateError(response.message));
    } else {
      // Fallback error
      dispatch(updateError(response.message));
    }

    dispatch(setShow(true));

    if (timeout) {
      dispatch(setTimer(timer()));
    }
  };
}

export function updateError(message) {
  return (dispatch) => {
    dispatch(setError(message));
  };
}

export function updateWarning(message) {
  return (dispatch) => {
    dispatch(setWarning(message));
  };
}

export function updateSuccess(message) {
  return (dispatch) => {
    dispatch(setSuccess(message));
  };
}

export function resetAlert() {
  return (dispatch) => {
    dispatch(reset());
  };
}

export default slice.reducer;
