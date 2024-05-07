"use client";

import useTime from "@/hooks/useTime";

export default function Clock() {
  const time = useTime();

  return (
    <div>
      <p className="text-neutral-100">
        {Intl.DateTimeFormat("ja", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(time)}
        {/* {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} */}
      </p>
    </div>
  );
}
