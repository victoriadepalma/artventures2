import { LOGIN } from "../../constants";

  
  const INIT_STATE = {
    loader: false,
  };
  
  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case LOGIN: {
        console.log('logiiiin',action)
        return {
          ...state,
          loader: true,
        };
      }
      default: {
        return state;
      }
    }
  };
  