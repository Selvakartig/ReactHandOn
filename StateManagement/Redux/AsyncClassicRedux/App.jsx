import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./fetchUserAsyncThunk";

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
} from "./asyncActions";

export default function Counter() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  const loading = useSelector((state) => state.users.loading);

  const error = useSelector((state) => state.users.error);

  return <button onClick={() => dispatch(fetchUsers())}>Fetch</button>;
}
