import React, { useState } from "react";
import { useEffect } from "react";

export default function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
    addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
  }, []);
  return onlineStatus;
}
