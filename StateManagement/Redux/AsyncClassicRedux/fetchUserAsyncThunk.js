import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./asyncActions";

export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUsersRequest());

    try {
      const response = await fetch("https://dummyjson.com/users");

      const data = await response.json();

      dispatch(fetchUsersSuccess(data.users));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
};
