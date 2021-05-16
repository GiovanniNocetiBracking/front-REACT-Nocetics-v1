import React, { useEffect, useState } from "react";
import db from "./FirebaseConfig";

export default function Smoke() {
  const [smoke, setSmoke] = useState(null);
  useEffect(() => {
    const smokeData = db.ref("Sensor1/smoke");
    smokeData.on("value", (snapshot) => {
      setSmoke(snapshot.val());
    });
    return () => {
      setSmoke({}); // This worked for me
    };
  }, []);
  return smoke;
}
