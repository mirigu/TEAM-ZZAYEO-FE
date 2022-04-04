import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// actions
const SET_STYLE = "SET_STYLE";
const DELETE_STYLE = "DELETE_STYLE";
const RESET_STYLE = "RESET_STYLE";

// action creators
const setStyle = createAction(SET_STYLE, (style) => ({ style }));
const deleteStyle = createAction(DELETE_STYLE, (index) => ({ index }));
const resetStyle = createAction(RESET_STYLE, (reset) => ({ reset }));

// initial state
const initialState = {
  style: [],
};

// reducer
export default handleActions(
  {
    [SET_STYLE]: (state, action) =>
      produce(state, (draft) => {
        if (state.style.includes(action.payload.style) === false) {
          draft.style = [...state.style, action.payload.style];
        }
      }),
    [DELETE_STYLE]: (state, action) =>
      produce(state, (draft) => {
        draft.style = state.style.filter((l, idx) => {
          console.log(l);
          return parseInt(action.payload.index) !== idx;
        });
      }),
    [RESET_STYLE]: (state, action) =>
      produce(state, (draft) => {
        draft.style = action.payload.reset;
      }),
  },
  initialState
);

const actionCreators = {
  setStyle,
  deleteStyle,
  resetStyle,
};

export { actionCreators };
