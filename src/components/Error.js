import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div>{err.data}</div>
      <div>
        {err.status}:{err.statusText}
      </div>
    </>
  );
}
