import React, { useEffect, useState } from "react";
import db from "./FirebaseConfig";

export default function Sensor() {
  const [glp, setGlp] = useState(null);
  useEffect(() => {
    const glpData = db.ref("Sensor1/lpg");
    glpData.on("value", (snapshot) => {
      setGlp(snapshot.val());
    });
    return () => {
      setGlp({}); // This worked for me
    };
  }, []);
  return glp;
}
