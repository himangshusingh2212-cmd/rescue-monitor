const PersonsDetected = ({ count }) => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>PERSONS DETECTED</div>
      <div style={styles.count}>{count}</div>
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    top: "563px",              // BELOW water level bar
    right: "30px",             // same alignment as water tank
    width: "450px",            // unchanged
    padding: "60px 20px",      // increased height
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(0px)",
    textAlign: "center",
    color: "white",
  },
  title: {
    fontSize: "35px",
    letterSpacing: "1.5px",
    marginBottom: "18px",      // more vertical space
  },
  count: {
    fontSize: "56px",          // slightly bigger for balance
    fontWeight: "bold",
  },
};

export default PersonsDetected;
