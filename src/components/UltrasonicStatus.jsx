import React, { useEffect, useState } from "react";

const UltrasonicStatus = () => {
  const [distance, setDistance] = useState(0);
  const [detected, setDetected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.1.55/ultrasonic");
        const data = await response.json();

        setDistance(data.distance);
        setDetected(data.object);
      } catch (error) {
        console.error("Error fetching ultrasonic data:", error);
      }
    };

    const interval = setInterval(fetchData, 500);
    return () => clearInterval(interval);
  }, []);

  const levelHeight = Math.max(0, Math.min(100, 100 - distance));

  return (
    <div style={styles.container}>
      <h2>Ultrasonic Object Detection</h2>

      <div style={styles.tank}>
        <div
          style={{
            ...styles.level,
            height: `${levelHeight}%`,
            backgroundColor: detected ? "red" : "green"
          }}
        />
      </div>

      <h3>Distance: {distance.toFixed(2)} cm</h3>

      <h2 style={{ color: detected ? "red" : "green" }}>
        {detected ? "OBJECT DETECTED" : "CLEAR"}
      </h2>
    </div>
  );
};
/*
const styles = {
  container: {
    textAlign: "center",
    color: "white"
  },
  tank: {
    width: "100px",
    height: "300px",
    border: "2px solid white",
    margin: "20px auto",
    position: "relative"
  },
  level: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    transition: "height 0.3s ease"
  }
};
*/
export default UltrasonicStatus;
