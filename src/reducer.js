const reducer = (state, action) => {
  if (action.type === 'USER') {
    console.log('Payload:', action.payload);
    return {
      ...state,
      userInfo: { newValue: 'Some new value' },
    };
  }
};

export default reducer;
