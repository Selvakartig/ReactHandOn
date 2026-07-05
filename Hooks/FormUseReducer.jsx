import { useReducer } from "react";

const initialState = { name: "", age: 0, submitted: false };

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SUBMIT":
      return { ...state, submitted: true };
    default:
      return state;
  }
};

export default function FormUseReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT" });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_NAME", payload: e.target.value })
          }
          placeholder="Your name"
        />
        <input
          type="number"
          value={state.age}
          onChange={(e) =>
            dispatch({ type: "SET_AGE", payload: e.target.value })
          }
          placeholder="Your Age"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {state.submitted &&
          `Form Submitted: Name: ${state.name} and Age: ${state.age}`}
      </div>
    </>
  );
}
