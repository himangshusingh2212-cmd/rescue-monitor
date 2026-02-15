import { useEffect, useState } from "react";

const TopBar = () => {
  const [online, setOnline] = useState(true);
  const [torch, setTorch] = useState(false);
  const [recording, setRecording] = useState(false);
  const [battery, setBattery] = useState(82);
  const [time, setTime] = useState("");

  // IST Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={styles.bar}>
      <span style={styles.title}>RESCUE MONITORING SYSTEM</span>

      <span style={{ color: online ? "#00ff6a" : "red" }}>
        ● {online ? "online" : "offline"}
      </span>

      <span
        style={{
          ...styles.icon,
          color: torch ? "white" : "#ccc",
        }}
      >
        🔦
      </span>

      <span
        style={{
          color: "red",
          animation: recording ? "blink 0.8s infinite" : "none",
        }}
      >
        ● REC
      </span>

      <span>🔋 {battery}%</span>
      <span>TIME {time}</span>
    </div>
  );
};

const styles = {
  bar: {
    position: "absolute",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    width: "96.4%",
    padding: "20px 20px",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backdropFilter: "blur(6px)",
  },
  title: {
    letterSpacing: "2px",
  },
  icon: {
    fontSize: "18px",
  },
};

export default TopBar;
