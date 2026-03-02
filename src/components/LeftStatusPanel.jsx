const LeftStatusPanel = ({ fireDetected, gasDetected, flameDetected, temperature }) => {
  return (
    <div style={styles.panel}>

      {/* FIRE STATUS */}
      <div style={styles.block}>
        <div style={styles.label}>
          🔥 FIRE STATUS
        </div>
        <div
          style={{
            ...styles.value,
            color: fireDetected ? "red" : "#00ff55",
          }}
        >
          {fireDetected ? "DETECTED" : "NORMAL"}
        </div>
      </div>

      {/* FLAME STATUS */}
      <div style={styles.block}>
        <div style={styles.label}>
          🔥 FLAME STATUS
        </div>
        <div
          style={{
            ...styles.value,
            color: flameDetected ? "red" : "#00ff55",
          }}
        >
          {flameDetected ? "DETECTED" : "NORMAL"}
        </div>
      </div>

      {/* GAS STATUS */}
      <div style={styles.block}>
        <div style={styles.label}>
          ⚠️ GAS STATUS
        </div>
        <div
          style={{
            ...styles.value,
            color: gasDetected ? "red" : "#00ff55",
          }}
        >
          {gasDetected ? "DETECTED" : "NORMAL"}
        </div>
      </div>

      {/* TEMPERATURE */}
      <div style={styles.block}>
        <div style={styles.label}>
          🌡️ TEMPERATURE
        </div>
        <div style={{ ...styles.value, color: "white" }}>
          {temperature}° C
        </div>
      </div>

    </div>
  );
};

const styles = {
  panel: {
    position: "absolute",
    top: "130px",
    left: "30px",
    width: "465px",
    padding: "40px 40px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(0px)",
    color: "white",
  },
  block: {
    marginBottom: "36px",
  },
  label: {
    fontSize: "38px",
    letterSpacing: "1.2px",
    marginBottom: "10px",
  },
  value: {
    fontSize: "33px",
    marginTop: "25px",
    marginLeft: "72px",
    fontWeight: "bold",
  },
};

export default LeftStatusPanel;