import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// actions
const UPLOADING = "UPLOADING";
const SET_PREVIEW = "SET_PREVIEW";
const DELETE_PREVIEW = "DELETE_PREVIEW";
const INITIAL_PREVIEW = "INITIAL_PREVIEW";
const IMAGE_URL = "IMAGEURL";
const DELETE_IMAGE = "DELETEIMAGE";
const INITIAL_IMAGE = "INITIALIMAGE";
const THUMBNAIL_URL = "THUMBNAIL_URL";

// action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const deletePreview = createAction(DELETE_PREVIEW, (index) => ({ index }));
const initialPreview = createAction(INITIAL_PREVIEW, (initial) => ({
  initial,
}));

const imageURL = createAction(IMAGE_URL, (imageURL) => ({ imageURL }));
const thumbnailURL = createAction(THUMBNAIL_URL, (thumbnailURL) => ({
  thumbnailURL,
}));
const deleteImage = createAction(DELETE_IMAGE, (index) => ({ index }));
const initialImage = createAction(INITIAL_IMAGE, (initial) => ({ initial }));

// initial state
const initialState = {
  image_url: "",
  uploading: false,
  preview: [],
  imageURL: [],
  thumbnailURL: [],
};

// reducer
export default handleActions(
  {
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = [...state.preview, action.payload.preview];
        //기존 배열에 새롭게 추가

        // console.log(action.payload.preview)
        // draft.preview = action.payload.preview
      }),
    [DELETE_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = state.preview.filter((l, idx) => {
          return parseInt(action.payload.index) !== idx;
        });
      }),
    [INITIAL_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.initial;
      }),
    [IMAGE_URL]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.imageURL)
        // action.payload.imageURL.map((image,) => (
        //   draft.imageURL = [...state.imageURL, image]
        // ))
        draft.imageURL = action.payload.imageURL
      }),
      
    [THUMBNAIL_URL]: (state, action) =>
      produce(state, (draft) => {
        draft.thumbnailURL = action.payload.thumbnailURL;
      }),

    [DELETE_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        const new_preview = state.preview.filter((l, idx) => {
          return parseInt(action.payload.index) !== idx;
        });
        const new_Image = state.imageURL.filter((l, idx) => {
          return parseInt(action.payload.index) !== idx;
        });
        return { imageURL: new_Image, preview: new_preview };
      }),
    [INITIAL_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.initial);
        draft.imageURL = action.payload.initial;
      }),
  },
  initialState
);

const actionCreators = {
  // uploadImage,
  //   uploadImageFB,
  setPreview,
  deletePreview,
  initialPreview,
  imageURL,
  deleteImage,
  initialImage,
  thumbnailURL,
};

export { actionCreators };
