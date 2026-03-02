const VideoBackground = () => {

  return (
    <div style={styles.container}>
      <img
        src="http://192.168.50.240:81/stream"
        alt="Live Stream"
        style={styles.video}
      />
      <div style={styles.overlay} />
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 0,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
};

export default VideoBackground;
