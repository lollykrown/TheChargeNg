export function reducer(state, action) {
  switch (action.type) {

    // implement saving video objects instead
    case 'TOGGLE_VIDEO_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };

    default:
      return state;
  }
}
