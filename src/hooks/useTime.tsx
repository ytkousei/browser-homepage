"use client";

import { useEffect, useState } from "react";

export default function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => setTime(new Date()), 1000);
  }, [time]);

  return time;
}
