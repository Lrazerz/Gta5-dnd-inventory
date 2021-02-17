// when user clicks cross (close) or picks interaction we only trigger to server
// this action passes when server invokes func on window
export const SET_IS_OPENED_INTERACTIONS = 'SET_IS_OPENED_INTERACTIONS';

// get interactions from server, also sets isOpened = true
export const SET_ALL_INTERACTIONS = 'SET_ALL_INTERACTIONS';
