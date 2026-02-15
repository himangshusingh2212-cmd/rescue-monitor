const VideoBackground = () => {
  return (
    <div style={styles.container}>
      <video
        autoPlay
        loop
        muted
        style={styles.video}
      >
        <source src="/fire.mp4" type="video/mp4" />
      </video>

      {/* Overlay layer */}
      <div style={styles.overlay} />
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    inset: 0,
    zIndex: -1,
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
