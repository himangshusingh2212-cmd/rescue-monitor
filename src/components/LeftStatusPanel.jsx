const LeftStatusPanel = ({
  fireDetected,
  gasDetected,
  temperature,
}) => {
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
    top: "120px",
    left: "30px",
    width: "330px",              // was 260px (+27%)
    padding: "26px",             // was 20px
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    color: "white",
  },
  block: {
    marginBottom: "36px",        // was 28px
  },
  label: {
    fontSize: "20px",            // was 16px (+25%)
    letterSpacing: "1.2px",
    marginBottom: "10px",        // was 6px
  },
  value: {
    fontSize: "26px",            // was 20px (+30%)
    fontWeight: "bold",
  },
};


export default LeftStatusPanel;
