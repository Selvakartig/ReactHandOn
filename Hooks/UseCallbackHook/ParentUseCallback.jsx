import { useCallback, useEffect, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";

const ParentUseCallback = () => {
  const [pText, setpText] = useState(0);

  const handleChild = useCallback(() => {
    setpText((prev) => prev + 2);
  }, []);

  console.log("inside parent..");

  return (
    <>
      <p>Parent {pText}</p>

      <button
        onClick={() => {
          setpText((prev) => prev + 1);
        }}
      >
        Click to Boom..
      </button>

      <ChildUseCallback handleChild={handleChild} />
    </>
  );
};

export default ParentUseCallback;
