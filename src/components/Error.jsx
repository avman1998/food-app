import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Opps... something went wrong... 😔</h1>
      {/* {error.error.message} */}
    </>
  );
};

export default Error;
