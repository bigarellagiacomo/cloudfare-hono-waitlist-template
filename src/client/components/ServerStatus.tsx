import { useEffect, useState } from "react";

export default function ServerStatus() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/api/health").then((res) =>
      res.json().then((data) => setStatus(data)),
    );
  }, []);
  return (
    <div>
      <p>
        Server Status <span className="font-semibold">{status}</span>
      </p>
    </div>
  );
}
