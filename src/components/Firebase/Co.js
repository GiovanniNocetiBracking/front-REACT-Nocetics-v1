import React, { useEffect, useState } from "react";
import db from "./FirebaseConfig";

export default function Co() {
  const [co, setCo] = useState(null);
  useEffect(() => {
    const coData = db.ref("Sensor1/co");
    coData.on("value", (snapshot) => {
      setCo(snapshot.val());
    });
    return () => {
      setCo({});
    };
  }, []);
  return co;
}
