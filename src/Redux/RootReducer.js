// import ACTION from "./Action"
import { CHECK, SHOW_SEARCH_INPUT, LOGGED_IN_USER } from "./ACTION";

const initialState = {
  CHECK: "true",
  SHOW_SEARCH_INPUT: false,
};

const rootReducer = (state = initialState, Action) => {
  console.log(Action, "<<<<This is actions");
  // alert(Action.payload)
  switch (Action.type) {
    case CHECK:
      {
        return { ...state, CHECK: Action.payload };
      }
      break;
    case LOGGED_IN_USER:
      {
        return { ...state, LOGGED_IN_USER: Action.payload };
      }
      break;
    case SHOW_SEARCH_INPUT: {
      return { ...state, SHOW_SEARCH_INPUT: Action.payload };
    }
    default:
      return state;
  }
};
export default rootReducer;
