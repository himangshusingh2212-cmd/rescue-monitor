const Crosshair = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.vertical} />
      <div style={styles.horizontal} />
    </div>
  );
};

const styles = {
  wrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40px",
    height: "40px",
    pointerEvents: "none", // IMPORTANT
   },
    vertical: {
    position: "absolute",
    left: "50%",
    top: 0,
    transform: "translateX(-50%)",
    width: "2px",
    height: "100%",
    background: "linear-gradient(skyblue 0 45%, transparent 45% 55%, skyblue 55% 100%)",
   },

    horizontal: {
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
    height: "2px",
    width: "100%",
    background: "linear-gradient(90deg, skyblue 0 45%, transparent 45% 55%, skyblue 55% 100%)",
   },

};

export default Crosshair;
