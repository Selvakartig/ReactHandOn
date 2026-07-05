import useCustomHookWidth from "./useCustomHookWidth";

const UseCustomHookWidthUI = () => {
  const [width, status] = useCustomHookWidth();

  return (
    <>
      <p>Window Width: {width}</p>
      <p>Network Status: {status}</p>
    </>
  );
};

export default UseCustomHookWidthUI;
