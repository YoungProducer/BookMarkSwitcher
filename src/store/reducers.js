import { combineReducers } from "redux";

import { switchersReducer } from "./BookMarkSwitcher/reducers";

const rootReducer = combineReducers({
  bookMarks: switchersReducer
});

export default rootReducer;
