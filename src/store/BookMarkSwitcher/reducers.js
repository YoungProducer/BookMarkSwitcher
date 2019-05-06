import { ADD_SWITCHER_TO_LIST, CHANGE_ACTIVE_SWITCHER } from "./constants";

const switchersInitialState = {
  switchers: [],
  activeSwitcherIndex: 0,
};

export const switchersReducer = (state = switchersInitialState, action) => {
  switch (action.type) {
    case ADD_SWITCHER_TO_LIST:

      return { 
        ...state, 
        switchers: [
          ...state.switchers.concat({
          index: action.payload.index, 
          category: action.payload.category, 
          active: action.payload.active})
        ]
      }

    case CHANGE_ACTIVE_SWITCHER: {
      
      if (action.payload !== state.activeSwitcherIndex) {
        state.switchers[action.payload].active = true
        state.switchers[state.activeSwitcherIndex].active = false
      }

      return {
        switchers: 
          [...state.switchers], 
          activeSwitcherIndex: action.payload, 
      }
    }

    default:
      return state;
  }
};
