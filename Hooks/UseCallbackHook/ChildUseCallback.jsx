import React, { useEffect } from "react";

const ChildUseCallback = React.memo(({ handleChild }) => {
  console.log("inside child");

  return (
    <button
      onClick={() => {
        handleChild();
      }}
    >
      Child button
    </button>
  );
});

export default ChildUseCallback;
