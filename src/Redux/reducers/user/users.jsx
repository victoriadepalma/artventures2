import { LIST_USERS_SUCCESS, LOGIN } from "../../constants";

  
  const INIT_STATE = {
    loader: false,
    users:[]
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case LIST_USERS_SUCCESS: {
        console.log("kjhgfcdcgvhj",action.data)
        return {
          ...state,
          users:action.data
        };
      }
      default: {
        return state;
      }
    }
  };
  