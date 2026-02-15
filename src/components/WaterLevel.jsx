const WaterLevel = ({ level }) => {
  const getColor = () => {
    if (level >=60) return "#00bfff";      // blue
    if (level <60 && level >30) return "#ffcc00";      // yellow
    if (level <=30) return "#ff3333";      // red
  };

  return (
    <div style={styles.container}>
      <div style={styles.tank}>
        <div
          style={{
            ...styles.water,
            height: `${level}%`,
            backgroundColor: getColor(),
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "absolute",
    right: "30px",
    top: "200px",
  },
  tank: {
    width: "48px",
    height: "300px",
    borderRadius: "6px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden",
  },
  water: {
    width: "100%",
    transition: "height 0.6s ease, background-color 0.6s ease",
  },
};

export default WaterLevel;
