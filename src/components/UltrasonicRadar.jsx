//import React from "react";

function UltrasonicRadar({ data }) {
  const distance = data?.distance || 0;
  const angle = data?.angle || 0;

  const detected = distance > 0 && distance < 100;

  return (
    <div style={styles.container}>
      
      {/* Radar Image */}
      <div style={styles.radar}>
        <div style={styles.scanLine}></div>
      </div>

      {/* Data Section */}
      <div style={styles.info}>
        <p>
          Object Detect:{" "}
          <span style={{ color: detected ? "red" : "lime" }}>
            {detected ? "YES" : "NO"}
          </span>
        </p>
        <p>Distance: {distance} cm</p>
        <p>Angle: {angle}°</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "rgba(255,255,255,0.15)",
    padding: "40px",
    textAlign: "center",
    backdropFilter: "blur(0px)",
    color: "white",
    width: "350px",
    leftmargin: "20px",
    position: "absolute",
    top: "260px",
    left: "1054px"
  },

  radar: {
    width: "200px",
    height: "100px",
    borderTopLeftRadius: "200px",
    borderTopRightRadius: "200px",
    border: "4px solid lime",
    borderBottom: "none",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden"
  },

  scanLine: {
    width: "2px",
    height: "100%",
    background: "red",
    position: "absolute",
    left: "50%",
    transformOrigin: "bottom",
    animation: "scan 2s linear infinite"
  },

  info: {
    marginTop: "10px",
    fontSize: "14px"
  }
};

export default UltrasonicRadar;
