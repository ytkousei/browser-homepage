"use client";

import useTime from "@/hooks/useTime";

export default function Clock() {
  const time = useTime();

  return (
    <div>
      <p>
        {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
      </p>
    </div>
  );
}
