import {userConstants} from "../shared/users.constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.REGISTER_SUCCESS:
      return { registering: true  };
    case userConstants.REGISTER_ERROR:
      return {registering: false , error: action.error}
    default:
      return state
  }
}