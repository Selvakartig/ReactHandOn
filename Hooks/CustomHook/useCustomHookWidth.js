import { useState, useEffect } from "react";

function useCustomHookWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [status, setStatus] = useState("You are Online!");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    const handleOffile = () => {
      setStatus("You are Offline!");
    };

    const handleOnline = () => {
      setStatus("You are Online!");
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("offline", handleOffile);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return [width, status];
}

export default useCustomHookWidth