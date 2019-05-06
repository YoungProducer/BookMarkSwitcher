import { ADD_SWITCHER_TO_LIST, CHANGE_ACTIVE_SWITCHER } from "./constants";

export const addSwitcherToList = (index, category, active) => ({
  type: ADD_SWITCHER_TO_LIST,
  payload: { index, category, active }
});

export const changeActiveSwitcher = index => ({
  type: CHANGE_ACTIVE_SWITCHER,
  payload: index
});
